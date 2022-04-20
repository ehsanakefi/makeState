import fs from "fs";
import { createFunction } from "./function/actions/createFunction";
import { createImportAction } from "./function/actions/createImportAction";
import { createIndex } from "./function/actions/createIndex";
import { createType } from "./function/actions/createType";
import { createExport } from "./function/index/createExport";
import { createMainIndex } from "./function/mainIndex/MainIndex";
import { createExportNextStore } from "./function/nextStore/CreateExportNextStore";
import { createImportNextStore } from "./function/nextStore/CreateImportNextStore";
import { createInitializeStore } from "./function/nextStore/CreateInitializeStore";
import { CreateStore } from "./function/nextStore/CreateStore";
import { createImport } from "./function/type/createImport";
import { createInitials } from "./function/type/createInitials";
import { createInterface } from "./function/type/createinterface";
import { createSingleEntity } from "./function/type/createSingleEntity";

const data = fs.readFileSync("schema.json", { encoding: "utf8", flag: "r" });
const models = JSON.parse(data).schema.contents.dynamic.models;
if (!fs.existsSync(`./state`)) {
  fs.mkdirSync(`./state`);
  fs.mkdirSync(`./state/src`);
}
fs.writeFile("./state/index.ts", `${createMainIndex()}`, (err) =>
  console.log(err)
);
fs.writeFile(
  "./state/src/index.ts",
  ` export * from "./dynamic";
    export * from "./nextStore"; 
`,
  (err) => console.log(err)
);
const modelText = Object.keys(models).map((val) => val);

fs.writeFile(
  "./state/src/nextStore.ts",
  `
${createImportNextStore(modelText)}
${createExportNextStore(modelText)}
${createInitializeStore(modelText)}
${CreateStore()}

`,
  (err) => console.log(err)
);

Object.keys(models).map((val) => {
  if (!fs.existsSync(`./state/src/dynamic`)) {
    fs.mkdirSync(`./state/src/dynamic`);
  }
  var dir = `./state/src/dynamic/${val.charAt(0).toLowerCase() + val.slice(1)}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile(
    `${dir}/type.ts`,
    `${createImport(val)}
     ${createInterface(val)}
     ${createSingleEntity(val)}
     ${createInitials(val)}`,
    function (err) {
      if (err) throw err;
    }
  );

  fs.writeFile(`${dir}/index.ts`, ` ${createExport()} `, function (err) {
    if (err) throw err;
  });

  if (!fs.existsSync(`${dir}/actions`)) {
    fs.mkdirSync(`${dir}/actions`);
  }

  models[val].doits &&
    Object.keys(models[val].doits).map((value) => {
      fs.writeFile(
        `${dir}/actions/${value}.ts`,
        ` ${createImportAction(val)}
          ${createType(val, value)}
          ${createFunction(
            val,
            value,
            value.split(val).length === 2 ? value.split(val)[0] : "gets"
          )}
  `,
        function (err) {
          if (err) throw err;
        }
      );
      fs.appendFile(
        `${dir}/actions/index.ts`,
        ` ${createIndex(value)}`,
        function (err) {
          if (err) throw err;
        }
      );
    });
});
fs.writeFile(
  "./state/src/dynamic/index.ts",
  `
${modelText.map(
  (value) =>
    `export * from "./${value.charAt(0).toLowerCase() + value.slice(1)}"; \n`
)}
`,
  (err) => console.log(err)
);
