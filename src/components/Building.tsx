import styled from "styled-components";
import { Elevator } from "./Elevator";
import BuildingFloor from "../modules/BuildingFloor";
import findNearestFloorIndex from "../helpers/findNearestFloorIndex";
import React from "react";
const FLOOR_HEIGHT = 60;

interface IBuilding {
    currentFloors: number[];
    currentFloor: number,
    floors: number,
    elevators: number,
    busyElevators: boolean[]
}

interface IStyledBuild {
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



const Building = ({ currentFloors, currentFloor, floors, elevators, busyElevators }: IBuilding) => {

    const nearestFreeElevator = () => {
        const index = findNearestFloorIndex(currentFloor, currentFloors, busyElevators);
        console.log("building ", busyElevators)
        busyElevators[index] = true;
        return index;
    };

    const buildingFloors = [];
    const buildingElevators = [];
    currentFloors[nearestFreeElevator()] = currentFloor;

    for (let i = 0; i < floors + 1; i++) {
        buildingFloors.push(<BuildingFloor key={i} height={FLOOR_HEIGHT} />);
    }

    for (let i = 0; i < elevators; i += 1) {
        const position = currentFloors[i] * FLOOR_HEIGHT;
        buildingElevators.push(<Elevator key={i} number={i} position={position} />);
    }

    return (
        <StyledBuilding elevators={elevators}>
            {buildingFloors}
            {buildingElevators}
        </StyledBuilding>
    );
};

export default Building;