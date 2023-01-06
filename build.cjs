const path = require("path");
const fs = require("fs");

const dist_dir = path.join(__dirname, "gallery");
const templatePath = path.join(__dirname, "template.html");
const indexPath = path.join(dist_dir, "index.html");

//src
const appJs_path = path.join(__dirname, "app.js");
const dataJs_path = path.join(__dirname, "data.js");
const outputCss_path = path.join(__dirname, "output.css");
const templateContent = fs.readFileSync(templatePath).toString();
const appContent = fs.readFileSync(appJs_path).toString();
const dataContent = fs.readFileSync(dataJs_path).toString();
const outputContent = fs.readFileSync(outputCss_path).toString();

fs.rmdirSync(dist_dir, {
  recursive: true,
  force: true,
});
fs.mkdirSync(dist_dir);

const newId = Date.now();
//dest
const appJs_dist_path = path.join(dist_dir, `app.${newId}.js`);
const dataJs_dist_path = path.join(dist_dir, `data.${newId}.js`);
const outputCss_dist_path = path.join(dist_dir, `output.${newId}.css`);

fs.writeFileSync(indexPath, templateContent.replace(/\[id\]/g, newId));
fs.writeFileSync(appJs_dist_path, appContent);
fs.writeFileSync(dataJs_dist_path, dataContent);
fs.writeFileSync(outputCss_dist_path, outputContent);
