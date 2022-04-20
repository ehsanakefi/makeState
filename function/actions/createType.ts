export const createType = (val: string, doit: string) => {
  return `
    export type ${doit.charAt(0).toUpperCase() + doit.slice(1)}Details =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["${val}"]["doits"]["${doit}"]["details"];

type  ${doit.charAt(0).toLocaleUpperCase() + doit.slice(1)} = (
  {}: ${doit.charAt(0).toLocaleUpperCase() + doit.slice(1)}Details,
  token: string,
) => Promise<Response<FQl_response_${
    val.charAt(0).toLowerCase() + val.slice(1)
  }_I${val}>>;
    `;
};
