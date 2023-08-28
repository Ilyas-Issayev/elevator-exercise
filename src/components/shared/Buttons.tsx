import { useCallback } from "react";
import styled from "styled-components";
import ElevatorButton from "../UI/ElevatorButton";

const StyledElevatorButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
    background-color: silver;
    justify-content: center;
`;

interface ElevatorButtonsProps {
    floors: number;
    pressed: [number, boolean][];
    onFloorRequest: (floor: number) => void;
}

/**
 * Component for render all elevator buttons for floors
 * @param param0 
 * @returns 
 */
const ElevatorButtons: React.FC<ElevatorButtonsProps> = ({ floors, pressed, onFloorRequest, ...rest }) => {
    const handleButtonPress = useCallback((index: number) => () => onFloorRequest(index), [onFloorRequest]);
    const buttons = Array.from({ length: floors }, (_, i) => {
        const pressedButtons = pressed.find((row) => row[0] === i);
        const isPressed = pressedButtons !== undefined ? pressedButtons[1] : undefined;
        return (<ElevatorButton
            key={i}
            pressed={isPressed}
            onClick={handleButtonPress(i)}
        >
            {i + 1}
        </ElevatorButton>)
    });


    return <StyledElevatorButtons data-testid="buttons" {...rest}>{buttons.reverse()}</StyledElevatorButtons>;
};

export default ElevatorButtons;
