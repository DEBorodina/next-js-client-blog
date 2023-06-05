export const checkStringMatch = (beginning: string, checkString: string) => {
  if (beginning.length > checkString.length) {
    return false;
  }

  const checkStringBeginning = checkString.slice(0, beginning.length);
  return (
    checkStringBeginning.toLocaleLowerCase() === beginning.toLocaleLowerCase()
  );
};
