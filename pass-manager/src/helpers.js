export function getCurrentDate() {
  const date = new Date();
  const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return currentDate;
}
