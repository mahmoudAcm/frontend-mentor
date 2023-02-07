const path = require("path");
const fs = require("fs");

const dist_dir = path.join(__dirname, "gallery");

fs.rmdirSync(dist_dir, {
  recursive: true,
  force: true,
});
fs.mkdirSync(dist_dir);

const newId = Date.now();
const files_to_transform = [
  "app.[id].js",
  "components.[id].css",
  "data.[id].js",
  "output.[id].css",
  "links.[id].js",
];

const indexFileContent = fs
  .readFileSync(path.join(__dirname, "index.html"))
  .toString();
fs.writeFileSync(
  path.join(dist_dir, "index.html"),
  indexFileContent.replace(/\[id\]/g, newId)
);

for (const file of files_to_transform) {
  const content = fs.readFileSync(path.join(__dirname, file)).toString();
  fs.writeFileSync(path.join(dist_dir, file.replace("[id]", newId)), content);
}
