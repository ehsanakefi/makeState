const fs = require("fs");

export const createSingleEntity = (val: string) => {
  return `export const single${val}Initial:FQl_response_${
    val.charAt(0).toLowerCase() + val.slice(1)
  }_I${val} ={

      };
      `;
};
