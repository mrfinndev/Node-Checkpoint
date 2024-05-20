import fs from "fs";

// const createWelcome = () => {
//   fs.writeFile("./welcome.txt", `"hello world"`, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// };
// createWelcome();

const readWelcome = () => {
  fs.readFile("./welcome.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
};
readWelcome();
