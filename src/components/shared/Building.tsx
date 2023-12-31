import styled from "styled-components";
import Elevator from "./Elevator";
import BuildingFloor from "../UI/BuildingFloor";

const FLOOR_HEIGHT = 70;
const ELEVATOR_WIDTH = 50;

interface IBuilding {
  currentFloors: { aim: number[]; start: number }[];
  floors: number;
  elevators: number;
  setElevatorInfo: (data: { aim: number[], start: number }[]) => void;
}

const StyledBuilding = styled.div<{ elevator: number }>`
    min-width: 180px;
    width: ${(props) => props.elevator * ELEVATOR_WIDTH}px;
    background: gray;
    position: relative;
};
`

const Building = ({ currentFloors, floors, elevators, setElevatorInfo }: IBuilding) => {
  const renderBuildingFloors = () => {
    return Array.from({ length: floors }, (_, index) => (
      <BuildingFloor key={index} height={FLOOR_HEIGHT} />
    ));
  }

  const renderBuildingElevators = currentFloors.map((floor, index) => {
    const positionAim = floor.aim.length > 0 ? floor.aim?.[0] : floor.start;
    const position = positionAim * FLOOR_HEIGHT;
    const distance = Math.abs(floor.aim?.[0] - floor.start) || 0;

    return (
      <Elevator
        currentFloors={currentFloors}
        key={index}
        setElevatorInfo={setElevatorInfo}
        number={index}
        position={position}
        distance={distance}
        aim={floor.aim[0] + 1}
      />
    );
  });

  return (
    <StyledBuilding data-testid="building" elevator={elevators} >
      {renderBuildingFloors()}
      {renderBuildingElevators}
    </StyledBuilding>
  );
};

export default Building;