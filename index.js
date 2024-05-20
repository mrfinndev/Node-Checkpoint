import fs from "fs";

// Task 1
// A function to create a file called hello-world

const createFile = () => {
  // use fs module to create the file
  fs.writeFile(
    "./hello-world.js",
    `console.log("hello world")`,
    (err, data) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

// createFile();
