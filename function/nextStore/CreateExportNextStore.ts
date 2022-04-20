export const createExportNextStore = (val: string[]) => {
  return `
    export interface InitialState extends ${val.map((value) => value + "\n")}{}
    export let store: UseBoundStore<InitialState> | undefined;

    const zustandContext = createContext<InitialState>();
    export const Provider = zustandContext.Provider;
    export const useStore: UseContextStore<InitialState> = zustandContext.useStore;
  `;
};
