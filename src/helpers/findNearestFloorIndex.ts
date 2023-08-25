/**
 * 
 * @param value 
 * @param array 
 * @returns 
 */
const findNearestFloorIndex = (value: number, array: number[], busy: boolean[]) => {
  let nearestIndex = 0;
  let nearestDifference = Math.abs(array[0] - value);

  for (let i = 1; i < array.length; i++) {
    if (!busy[i]) {
      const difference = Math.abs(array[i] - value);
      if (difference < nearestDifference) {
        nearestIndex = i;
        nearestDifference = difference;
      }
    }
  }

  return nearestIndex;
};

export default findNearestFloorIndex;
