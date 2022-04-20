export const addSplural = (val: string) => {
  return (
    val.slice(0, val.length - 1) + (val[val.length - 1] === "y" ? "ies" : ( val[val.length - 1]+"s"))
  );
};
