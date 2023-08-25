import styled from "styled-components";
import { Elevator } from "./Elevator";
import BuildingFloor from "../modules/BuildingFloor";
import findNearestFloorIndex from "../helpers/findNearestFloorIndex";
import React, { useMemo } from "react";
const FLOOR_HEIGHT = 60;

interface IBuilding {
    currentFloors: number[];
    currentFloor: number,
    floors: number,
    elevators: number,
    busy: boolean[]
}

interface IStyledBuild {
    currentFloor: number,
    floors: number,
    nearest: number,
    elevators: number,
    busy: boolean[]
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



const Building = ({ currentFloors, currentFloor, floors, elevators, busy }: IBuilding) => {

    const buildingFloors = [];
    const buildingElevators = [];
    const nearestFloorIndex = useMemo(() => {
        const index = findNearestFloorIndex(currentFloor, currentFloors, busy)
        busy[index] = true;
        return index;
    }, [currentFloor, currentFloors, busy]);
    setTimeout(() => busy[nearestFloorIndex] = false, 1000);
    currentFloors[nearestFloorIndex] = currentFloor;

    for (let i = 0; i < floors + 1; i++) {
        buildingFloors.push(<BuildingFloor key={i} height={FLOOR_HEIGHT} />);
    }

    for (let i = 0; i < elevators; i += 1) {
        const position = currentFloors[i] * FLOOR_HEIGHT
        buildingElevators.push(<Elevator key={i} number={i} position={position} />);
    }

    return (
        <StyledBuilding nearest={nearestFloorIndex} currentFloor={currentFloor} floors={floors} elevators={elevators} busy={busy}>
            {buildingFloors}
            {buildingElevators}
        </StyledBuilding>
    );
};

export default Building;