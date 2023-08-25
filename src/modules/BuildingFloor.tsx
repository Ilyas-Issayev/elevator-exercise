import styled from "styled-components";
import wall from '../assets/pngtree-brick-wall-stonework-rock-wall-vector-png-image_15077466-2655074554.png';
import wall2 from '../assets/wp5414930-2289807079.png'
import React from 'react';


const StyledElevatorShaft = styled.div``;

interface BuildingFloorProps {
  height: number;
}

const StyledBuildingFloor = styled.div<BuildingFloorProps>`
  height: ${(props) => props.height}px;
  padding: 3px;
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  width: 100%;
  background-image: url(${wall});
  background-size: contain;

  ${StyledElevatorShaft} {
    flex: 1 1 auto;
    background-color: #fff;
    background-image: url(${wall2});
  background-size: contain;
  }
`;

const BuildingFloor: React.FC<BuildingFloorProps> = ({ height, ...rest }) => {
  return (
    <StyledBuildingFloor height={height} {...rest}>
      <StyledElevatorShaft />
    </StyledBuildingFloor>
  );
};

export default BuildingFloor;
