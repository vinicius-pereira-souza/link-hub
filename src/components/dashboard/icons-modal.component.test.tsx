import { render, screen, fireEvent } from "@testing-library/react";
import IconPickerModal from "./icon-picker-modal";

describe("Icon Picker Modal", () => {
  it(`must execute the onClose function after the click.`, () => {
    const props = {
      isOpen: true,
      onClose: vi.fn(),
      onSelect: vi.fn(),
    };

    render(<IconPickerModal {...props} />);

    const closeButton = screen.getByTestId("modal-close-button");
    fireEvent.click(closeButton);

    expect(closeButton).toBeInTheDocument();
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it(`must execute the onSelect function after the click.`, () => {
    const props = {
      isOpen: true,
      onClose: vi.fn(),
      onSelect: vi.fn(),
    };

    const { container } = render(<IconPickerModal {...props} />);

    const iconPickerTrigger = container.querySelector(
      '[data-testid="icon-picker-trigger-camera"]',
    );

    if (iconPickerTrigger) {
      fireEvent.click(iconPickerTrigger);
    }

    expect(iconPickerTrigger).toBeInTheDocument();
    expect(props.onSelect).toHaveBeenCalledTimes(1);
  });
});
