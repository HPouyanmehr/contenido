export const getDateString = (dateString: string): string => {
  const date = new Date(dateString);

  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
};
