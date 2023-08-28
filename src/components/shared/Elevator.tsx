import styled from "styled-components";
import { useState, useEffect } from 'react';
import elevatorPng from '../../assets/elevator.png';

const StyledElevator = styled.div<{ position: number, floor: number }>`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-direction: row;
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: ${(props) => props.floor}s ease-in-out transform;
  transform: translateY(-${(props) => props.position}px);
  `;

const StyledElevatorCage = styled.div<{ number: number }>`
  margin-left: ${(props) => props.number * 3}rem;
  height: 60px;
  width: 50px;
  color:white;
  display: flex;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  background-image: url('${elevatorPng}');
  background-size: cover;
  background-position: center;
`;

interface ElevatorProps {
  position: number;
  number: number;
  distance: number;
  aim: number;
  setElevatorInfo: (data: { aim: number[], start: number }[]) => void;
  currentFloors: { aim: number[], start: number }[]
}

const Elevator: React.FC<ElevatorProps> = ({ position, number, distance, aim, currentFloors, setElevatorInfo }) => {
  const [currentFloor, setCurrentFloor] = useState(1);

  useEffect(() => {
    let isMounted = true;
    let targetFloor = currentFloor;

    const interval = setInterval(() => {
      if ((currentFloor === aim)) return;
      targetFloor === aim ? clearInterval(interval) : targetFloor > aim ? targetFloor-- : targetFloor < aim ? targetFloor++ : "";

      if (isMounted && targetFloor !== currentFloor) {
        setCurrentFloor(targetFloor);
        if (targetFloor === aim) {
          const updatedCurrentFloors = [...currentFloors];
          updatedCurrentFloors[number].start = updatedCurrentFloors[number].aim[0];
          updatedCurrentFloors[number].aim.shift()
          setElevatorInfo(updatedCurrentFloors);
        }
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [aim, currentFloor, currentFloors, number, setElevatorInfo]);

  return (
    <StyledElevator position={position} floor={distance} data-testid="elevator">
      <StyledElevatorCage number={number} data-testid="elevator-cage">
        {distance > 0 ? currentFloor : currentFloors[number].start + 1}
      </StyledElevatorCage>
    </StyledElevator>
  );
};


export default Elevator;
