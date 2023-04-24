export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export const parseJson = (str) => {
  try {
    const json = JSON.parse(str);
    return json;
  } catch (error) {
    throw new ParseError('Invalid JSON string');
  }
};
// END
