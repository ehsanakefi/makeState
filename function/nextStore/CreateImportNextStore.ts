export const createImportNextStore = (val: string[]) => {
  return `
  import createContext, { UseContextStore } from "zustand/context";
  import { devtools } from "zustand/middleware";
import { useLayoutEffect } from "react";
import create, { UseBoundStore } from "zustand";  
    import {${val.map(
      (val) =>
        val + "\n ," + val.charAt(0).toLowerCase() + val.slice(1) + "Initials"
    )} } from "../index";
       `;
};
