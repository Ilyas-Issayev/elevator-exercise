import findNearestFloorIndex from '../helpers/findNearestFloorIndex';
describe('findNearestFloorIndex function', () => {
  it('returns the correct index when the value exists in the array', () => {
    const value = 5;
    const array = [2, 5, 8, 12];
    const busyElevators = [false, false, false, false];
    const result = findNearestFloorIndex(value, array, busyElevators);
    expect(result).toBe(1);
  });

  it('returns the nearest index when the value is not in the array', () => {
    const value = 6;
    const array = [2, 5, 8, 12];
    const busyElevators = [false, false, false, false];
    const result = findNearestFloorIndex(value, array, busyElevators);
    expect(result).toBe(1); // The nearest index is 1 (value 5)
  });

  it('returns the nearest index while considering busy elevators', () => {
    const value = 6;
    const array = [2, 5, 8, 12];
    const busyElevators = [false, true, false, false];
    const result = findNearestFloorIndex(value, array, busyElevators);
    expect(result).toBe(2); // The nearest index is 2 (value 8) because elevator at index 1 is busy
  });
});
