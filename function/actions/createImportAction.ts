export const createImportAction = (val: string) => {
  return `
    import { FunQLRequest } from "../../../../declarations/request/schema";
    import { FQl_response_${
      val.charAt(0).toLowerCase() + val.slice(1)
    }_I${val} } from "../../../../declarations/response/schema";
    import {
  satekApi,
  Response,
  single${val}Initial,
  store,
} from "../../../../index";
    `;
};
