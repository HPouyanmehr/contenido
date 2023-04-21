export const getDateString = (dateString: string): string => {
  const date = new Date(dateString);

  return `${date.getFullYear()}-${date.getUTCMonth() + 1}-${date.getDate()}`;
};
