const path = require("path");

function resolve(relativePath) {  
  return path.join(__dirname, relativePath);
}

module.exports = {  
  entry: resolve("src/fbVsCodeExt.fsproj"),
  outDir: resolve("out"),
  allFiles: true
};
