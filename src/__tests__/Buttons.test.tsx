import { render, fireEvent } from "@testing-library/react";
import ElevatorButtons from "../components/shared/Buttons";
import "@testing-library/jest-dom/extend-expect";

test("renders correct number of buttons", () => {
    const floors = 5;
    const pressed: [number, boolean][] = [[1, false], [2, true], [3, false], [4, true], [5, false]];
    const onFloorRequest = jest.fn();

    const { getAllByRole } = render(
        <ElevatorButtons
            floors={floors}
            pressed={pressed}
            onFloorRequest={onFloorRequest}
        />
    );

    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(floors);
});

test("calls onFloorRequest with correct floor when a button is clicked", () => {
    const floors = 3;
    const pressed: [number, boolean][] = [[1, false], [2, true], [3, false]];
    const onFloorRequest = jest.fn();

    const { getByText } = render(
        <ElevatorButtons
            floors={floors}
            pressed={pressed}
            onFloorRequest={onFloorRequest}
        />
    );

    const button = getByText("1");
    fireEvent.click(button);

    expect(onFloorRequest).toHaveBeenCalledTimes(1);
    expect(onFloorRequest).toHaveBeenCalledWith(0);
});

