export const concater = (string: string) => {
  return string && string.trim().split(' ').join('-').toLowerCase();
};
