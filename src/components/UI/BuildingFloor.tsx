import styled from "styled-components";
import wall from '../../assets/brick.png';

const StyledElevatorShaft = styled.div``;

interface BuildingFloorProps { height: number }

const StyledBuildingFloor = styled.div<BuildingFloorProps>`
  height: ${(props) => props.height}px;
  padding: 5px;
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  background-image: url(${wall});
  background-size: contain;

  ${StyledElevatorShaft} {
    flex: 1 1 auto;
    background-color: #fff;
  }
`;

const BuildingFloor: React.FC<BuildingFloorProps> = ({ height, ...rest }) => {
  return (
    <StyledBuildingFloor data-testid="building-floor" height={height} {...rest}>
      <StyledElevatorShaft data-testid="elevator-shaft" />
    </StyledBuildingFloor>
  );
};

export default BuildingFloor;
