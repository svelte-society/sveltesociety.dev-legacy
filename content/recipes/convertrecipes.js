const jdown = require("jdown");
const fs = require("fs");
(async function () {
  const content = await jdown(".");
  fs.writeFileSync("recipes.json", JSON.stringify(content, null, 2));
})();
