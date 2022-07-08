const fs = require("fs");
const path = require("path");

// first of all, we need to find all the markdown files in the root folder
const files = fs.readdirSync(path.join(__dirname, "../"));
const markdownFiles = files.filter((file) => file.endsWith(".md"));

// then, we need to read each file and extract the "{btn}" text
markdownFiles.map((file) => {
  const content = fs.readFileSync(path.join(__dirname, "../", file), "utf8");
  const newContent = content.replace(/\{btn\}/g, "<button>click!</button>");
  fs.writeFileSync(path.join(__dirname, "../", file), newContent);
});

// Console log the buttons and the name of the file that contains the button
console.log(markdownFiles);

// now we need to close the process
process.exit(0);
