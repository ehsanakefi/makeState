export const createMainIndex = () => {
  return `
  import { funreq } from "@hemedani/funreq";
  import { FunQLRequest } from "./declarations/request/schema";
  import { FunQLResponseWithDetails } from "./declarations/response/schema";
  
  export const SatekApi = funreq<FunQLRequest, FunQLResponseWithDetails>();
  
  const url =
    typeof window === "undefined" ? "http://127.0.0.1:8000/funql" : "/satekapi";
  
  export const apiSetting = { url };
  SatekApi.setup(apiSetting);
  
  export interface Response<T> {
    error: string | null;
    data: T;
    loader: boolean;
  }
  
  export type PartialDeep<T> = {
    [P in keyof T]?: PartialDeep<T[P]>;
  };
  
  export * from "./declarations/request/schema";
  export * from "./declarations/response/schema";
  export * from "./src";
  
       `;
};
