// Regex removes non-alphanumeric characaters and adjacent whitespace characters
export const stripName = (name) => {
  return name
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
};
