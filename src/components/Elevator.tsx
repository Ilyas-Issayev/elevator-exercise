import styled from "styled-components";
import elevatorPng from '../assets/Lift-PNG-HD-2426269193.png';
import React from 'react';

interface StyledElevatorProps {
  position: number;
}

const StyledElevator = styled.div<StyledElevatorProps>`
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  box-sizing: border-box;
  flex-direction: row;
  height: 60px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(-${(props) => props.position}px);
  transition: 1s ease-in-out transform;
`;

interface StyledElevatorCageProps {
  number: number;
}

const StyledElevatorCage = styled.div<StyledElevatorCageProps>`
  margin-left: ${(props) => props.number * 2.5}rem;
  height: 40px;
  width: 30px;
  background-image: url('${elevatorPng}');
  background-size: cover;
  border-radius: 3px;
`;

interface ElevatorProps extends StyledElevatorProps, StyledElevatorCageProps { }

export const Elevator: React.FC<ElevatorProps> = (props) => {
  return (
    <StyledElevator position={props.position}>
      <StyledElevatorCage number={props.number} />
    </StyledElevator>
  );
};
