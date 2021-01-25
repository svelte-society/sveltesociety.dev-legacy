#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
require("dotenv").config();

const pathToData = path.join(
  __dirname,
  "/src/pages/components/components.json"
);
const components = JSON.parse(fs.readFileSync(pathToData));

(async function () {
  for (component of components) {
    let { url } = component;

    if (url.includes("https://github.com")) {
      const splitURL = url.split("/");
      const user = splitURL[3];
      const repo = splitURL[4];

      await fetch(`https://api.github.com/repos/${user}/${repo}`, {
        headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` },
      })
        .then((res) => res.json())
        .then(({ stargazers_count }) => {
          if (stargazers_count) {
            component.stars = stargazers_count;
          }
        });
    }
  }

  fs.writeFileSync(
    path.resolve(pathToData),
    JSON.stringify(components, null, 2)
  );
})();
