import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PrependButton from "./prepend-button";
import {
  ManagerLinksStoreProvider,
  ManagerLinksStoreContext,
} from "@/providers/manager-links-provider";
import { createManagerLinkStore } from "@/lib/stores/manager-links";

vi.stubGlobal("crypto", {
  randomUUID: () => "mocked-uuid-123",
});

describe("PrependButton", () => {
  beforeEach(() => {
    createManagerLinkStore().setState({ links: [] });
  });

  it(`should render the button with the correct text`, () => {
    render(
      <ManagerLinksStoreProvider>
        <PrependButton text="Adicionar link" hasIcon={true} />
      </ManagerLinksStoreProvider>,
    );

    const button = screen.getByTestId("add-link-button");

    expect(button).toBeInTheDocument();
  });

  it(`should add a new empty link to the store when clicked.`, async () => {
    const user = userEvent.setup();
    const testStore = createManagerLinkStore({
      hasChanges: false,
      linksRemoved: [],
      links: [],
    });

    render(
      <ManagerLinksStoreContext.Provider value={testStore}>
        <PrependButton text="Adicionar link" hasIcon={true} />
      </ManagerLinksStoreContext.Provider>,
    );

    const button = screen.getByTestId("add-link-button");

    expect(button).toBeInTheDocument();
    expect(testStore.getState().links).toHaveLength(0);

    await user.click(button);

    expect(testStore.getState().links).toHaveLength(1);
    expect(testStore.getState().links[0]).toEqual({
      id: expect.any(String),
      title: "",
      url: "",
      is_active: true,
      isNew: true,
      iconName: "Website",
      position_at: 0,
      display_type: "card",
      total_click: 0,
    });
  });
});
