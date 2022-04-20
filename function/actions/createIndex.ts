export const createIndex = (doit: string) => {
  return `export * from "./${doit}";\n`;
};
