// const CreateTypes = (val: string) => {
//   fs.writeFile(
//     `./${val}/type.ts`,
//     `

//     export const ${val.toLocaleLowerCase()}Initial: ${val} = {
//       ${val.toLocaleLowerCase()}: {
//         error: "",
//         data: singleWareInitial,
//         loader: false,
//       },
//       ${val.toLocaleLowerCase()}s: {
//         error: "",
//         data: [],
//         loader: false,
//       },
//     };

//     `,
//     function (err) {
//       if (err) throw err;
//       // console.log(`File is created ${val} type successfully.`);
//     }
//   );
// };
