export const createImport = (val: string) => {
  return `
  import { FQl_response_${
    val.charAt(0).toLowerCase() + val.slice(1)
  }_I${val} } from "../../../declarations/response/schema";
  import {  Response } from "../../../index";
      `;
};
