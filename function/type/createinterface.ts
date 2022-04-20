import { addSplural } from "../addSplural";

export const createInterface = (val: string) => {
  console.log(val);
  return `export interface ${val} {
        ${val.charAt(0).toLowerCase() + val.slice(1)}: Response<FQl_response_${
    val.charAt(0).toLowerCase() + val.slice(1)
  }_I${val}>;
        ${addSplural(
          val.charAt(0).toLowerCase() + val.slice(1)
        )}: Response<FQl_response_${
    val.charAt(0).toLowerCase() + val.slice(1)
  }_I${val}[]>;
      }
     `;
};
