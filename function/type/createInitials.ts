import { addSplural } from "../addSplural";

export const createInitials = (val: string) => {
  return `export const ${
    val.charAt(0).toLowerCase() + val.slice(1)
  }Initials:${val} ={
    ${val.charAt(0).toLowerCase() + val.slice(1)}: {
        error: "",
        data: single${val}Initial,
        loader: false,
      },
      ${addSplural(val.charAt(0).toLowerCase() + val.slice(1))}: {
        error: "",
        data: [],
        loader: false,
      }};
      `;
};
