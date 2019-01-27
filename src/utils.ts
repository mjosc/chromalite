
export const removeAtIndex = (array: any[], index: number) => (
  array.filter((val, idx) => idx !== index)
);
