export const sortByDate = <T extends { date: string }[]>(data: T): T => {
  return data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
