export const createInitializeStore = (val: string[]) => {
  return `
  export const initializeStore = (preloadedState = {}) =>
  create<InitialState>(
      devtools(
          () => (
              {
                ${val.map(
                  (val) =>
                    "..." +
                    val.charAt(0).toLowerCase() +
                    val.slice(1) +
                    "Initials" +
                    "\n"
                )}
              }
          ),
      ),
  );
  `;
};
