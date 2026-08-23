import { render, screen, fireEvent } from "@testing-library/react";
import { SignUpForm } from "./forms";
import * as actions from "@/lib/actions";
import { MessageStoreContext } from "@/providers/message-store-provider";
import { createMessageStore } from "@/lib/stores/message-store";
import { useActionState } from "react";

vi.mock("@/lib/actions", () => ({
  signUpWithEmail: vi.fn(),
}));

vi.mock("react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react")>();
  return {
    ...actual,
    useActionState: vi.fn((action, initialState) => [
      initialState,
      action,
      false,
    ]),
  };
});

describe("Form Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should check if the form action is being submitted.", async () => {
    const storeTest = createMessageStore();

    const { container } = render(
      <MessageStoreContext.Provider value={storeTest}>
        <SignUpForm />
      </MessageStoreContext.Provider>,
    );

    const formElement = container.querySelector("form");
    expect(formElement).not.toBeNull();

    if (formElement) {
      fireEvent.submit(formElement);
    }

    await vi.waitFor(() => {
      expect(actions.signUpWithEmail).toHaveBeenCalled();
    });
  });

  it("should render error messages", async () => {
    vi.mocked(useActionState).mockReturnValueOnce([
      {
        errors: {
          username: ["O nome de usuário deve ter pelo menos 6 caracteres."],
          email: ["Por favor, insira um e-mail válido."],
          password: ["A senha deve ter pelo menos 6 caracteres."],
        },
      },
      vi.fn(),
      false,
    ]);

    const storeTest = createMessageStore();

    render(
      <MessageStoreContext.Provider value={storeTest}>
        <SignUpForm />
      </MessageStoreContext.Provider>,
    );

    expect(
      await screen.findByText(
        "O nome de usuário deve ter pelo menos 6 caracteres.",
      ),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Por favor, insira um e-mail válido."),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("A senha deve ter pelo menos 6 caracteres."),
    ).toBeInTheDocument();
  });
});
