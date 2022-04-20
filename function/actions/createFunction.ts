import { addSplural } from "../addSplural";

export const createFunction = (
  val: string,
  doit: string,
  type: "create" | "get" | "delete" | "update" | "gets" | string
) => {
  console.log(type, val, doit);
  return `
    
export const ${doit}: ${
    doit.charAt(0).toUpperCase() + doit.slice(1)
  } = async ({ set, get }, token = ""
  ${type == "gets" ? ",reset:false" : ""}
  ) => {
    const str = store;
  
    str &&
      str.setState(({ ${val.charAt(0).toLowerCase() + val.slice(1)} }) => {
        ${val.charAt(0).toLowerCase() + val.slice(1)}.loader = true;
      });
  
    try {
      const getData = await satekApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "${val}",
            doit: "${doit}",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_${
        val.charAt(0).toLowerCase() + val.slice(1)
      }_I${val};
  
      str &&
        str.setState(({ ${
          val.charAt(0).toLowerCase() + val.slice(1)
        }, ${addSplural(val.charAt(0).toLowerCase() + val.slice(1))} }) => {
            ${
              type === "create"
                ? addSplural(val.charAt(0).toLowerCase() + val.slice(1)) +
                  ".data.unshift(data)"
                : type === "delete"
                ? addSplural(val.charAt(0).toLowerCase() + val.slice(1)) +
                  ".data.filter(val => val._id !== data._id)"
                : type === "update"
                ? val.charAt(0).toLowerCase() + val.slice(1) + ".data = data"
                : type === "gets"
                ? `reset
                ? (${addSplural(
                  val.charAt(0).toLowerCase() + val.slice(1)
                )}.data = data)
                : ${addSplural(
                  val.charAt(0).toLowerCase() + val.slice(1)
                )}.data.push(...data);`
                : val.charAt(0).toLowerCase() + val.slice(1) + ".data = data"
            };
            ${val.charAt(0).toLowerCase() + val.slice(1)}.loader = false;
            ${val.charAt(0).toLowerCase() + val.slice(1)}.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ ${val.charAt(0).toLowerCase() + val.slice(1)} }) => {
            ${val.charAt(0).toLowerCase() + val.slice(1)}.loader = false;
            ${
              val.charAt(0).toLowerCase() + val.slice(1)
            }.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:${type === "gets" ? "[]" : `single${val}Initial`},
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    `;
};
