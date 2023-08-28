const findNearestFloorIndex = (
  value: number,
  array: number[],
  busyElevators: boolean[]
) => {
  let nearestIndex = 0;
  let nearestDifference = Infinity;
  console.log(value)
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  for (let i = 0; i < array.length; i++) {
    if (!busyElevators[i]) {
      const difference = Math.abs(array[i] - value);

      if (difference < nearestDifference || (difference === nearestDifference && i < nearestIndex)) {
        nearestIndex = i;
        nearestDifference = difference;
      }
    }
  }

  return nearestIndex;
};

export default findNearestFloorIndex;