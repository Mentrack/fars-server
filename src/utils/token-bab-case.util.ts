export const toKebabCase = (input: string): string => {
  return input
    .trim() // remove leading/trailing spaces
    .split(/\s+/) // split by one or more spaces
    .map((word) => word.toLowerCase()) // lowercase each word
    .join('-'); // join with hyphens
};
