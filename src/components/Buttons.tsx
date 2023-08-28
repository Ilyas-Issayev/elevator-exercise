import React from "react";
import styled from "styled-components";
import ElevatorButton from "../modules/ElevatorButton";

const StyledElevatorButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  background-color: #e4e4e4;
  padding: 10px;
  border-radius: 10px;
  overflow-y: auto
`;

interface ElevatorButtonsProps {
    floors: number;
    pressed: [number, boolean][];
    onFloorRequest: (floor: number) => void;
}

const ElevatorButtons: React.FC<ElevatorButtonsProps> = ({
    floors,
    pressed,
    onFloorRequest,
    ...rest
}) => {
    const onButtonPress = React.useCallback(
        (index: number) => () => {
            if (typeof onFloorRequest === "function") {
                onFloorRequest(index);
            }
        },
        [onFloorRequest]
    );

    const buttons = [];
    for (let i = 0; i <= floors; i += 1) {
        const pressedButtons = pressed.find((row) => row[0] === i);
        const isPressed = pressedButtons !== undefined ? pressedButtons[1] : undefined;
        buttons.push(
            <ElevatorButton
                key={i}
                pressed={isPressed}
                onClick={onButtonPress(i)}
            >
                {i}
            </ElevatorButton>
        );
    }

    return <StyledElevatorButtons {...rest}>{buttons.reverse()}</StyledElevatorButtons>;
};

export default ElevatorButtons;
