import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ManagerLinksStoreContext } from "@/providers/manager-links-provider";
import { createManagerLinkStore } from "@/lib/stores/manager-links";
import type { LinkItem } from "@/lib/definitions";
import { DragDropProvider } from "@dnd-kit/react";
import SortableListItem from "./sortable-list-item";

const link: LinkItem = {
  id: 1,
  iconName: "Instagram",
  title: "instagram",
  url: "https://instagram.com",
  is_active: true,
  position_at: 0,
};

const initialStoreState = {
  hasChanges: false,
  linksRemoved: [],
  links: [{ ...link }],
};

describe("SortableListItem", () => {
  it(`should render the title input with the correct value`, () => {
    const testStore = createManagerLinkStore(initialStoreState);

    render(
      <ManagerLinksStoreContext.Provider value={testStore}>
        <DragDropProvider>
          <SortableListItem {...link} />
        </DragDropProvider>
      </ManagerLinksStoreContext.Provider>,
    );

    const input = screen.getByRole("textbox", { name: /titulo/i });

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("instagram");
  });

  it(`should remove the link with ID 1 and add it to the exclusion list when clicked`, () => {
    const testStore = createManagerLinkStore(initialStoreState);

    render(
      <ManagerLinksStoreContext.Provider value={testStore}>
        <DragDropProvider>
          <SortableListItem {...link} />
        </DragDropProvider>
      </ManagerLinksStoreContext.Provider>,
    );

    const button = screen.getByTestId("delete-link");

    expect(button).toBeInTheDocument();
    expect(testStore.getState().links).toHaveLength(1);

    fireEvent.click(button);

    expect(testStore.getState().links).toHaveLength(0);
    expect(testStore.getState().linksRemoved).toHaveLength(1);
  });

  it(`toggles is_active state from true to false on click`, () => {
    const testStore = createManagerLinkStore(initialStoreState);

    render(
      <ManagerLinksStoreContext.Provider value={testStore}>
        <DragDropProvider>
          <SortableListItem {...link} />
        </DragDropProvider>
      </ManagerLinksStoreContext.Provider>,
    );

    const button = screen.getByTestId("toggle-link");

    expect(button).toBeInTheDocument();
    expect(testStore.getState().links[0].is_active).toBeTruthy();

    fireEvent.click(button);

    expect(testStore.getState().links[0].is_active).toBeFalsy();
  });
});
