import styled from "styled-components";
import { Elevator } from "./Elevator";
import BuildingFloor from "../modules/BuildingFloor";
import findNearestFloorIndex from "../helpers/findNearestFloorIndex";
const FLOOR_HEIGHT = 60;

interface IBuilding {
    currentFloors: number[];
    currentFloor: number,
    floors: number,
    elevators: number,
}

interface IStyledBuild {
    currentFloor: number,
    floors: number,
    nearest: number,
    elevators: number,
}

const StyledBuilding = styled.div<IStyledBuild>`
    display: flex;
    flex-direction: column-reverse;
    width: ${(props) => props.elevators * 50}px ;
    min-width: 200px;
    background: gray;
    position: relative;
    align-self: flex-end;
`;



const Building = ({ currentFloors, currentFloor, floors, elevators }: IBuilding) => {

    const buildingFloors = [];
    const buildingElevators = [];
    const nearestFloorIndex = findNearestFloorIndex(currentFloor, currentFloors);
    currentFloors[nearestFloorIndex] = currentFloor;

    for (let i = 0; i < floors + 1; i++) {
        buildingFloors.push(<BuildingFloor key={i} height={FLOOR_HEIGHT} />);
    }

    for (let i = 0; i < elevators; i += 1) {
        const position = currentFloors[i] * FLOOR_HEIGHT
        buildingElevators.push(<Elevator key={i} number={i} position={position} />);
    }

    return (
        <StyledBuilding nearest={nearestFloorIndex} currentFloor={currentFloor} floors={floors} elevators={elevators}>
            {buildingFloors}
            {buildingElevators}
        </StyledBuilding>
    );
};

export default Building;