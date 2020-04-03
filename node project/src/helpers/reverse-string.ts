const reverseString = (str: string) => {
  if (str) {
    return str
      .trim()
      .split('')
      .reverse()
      .join('');
  }
  return '';
};

export default reverseString;
