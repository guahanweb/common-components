const path = require("path");
const rimraf = require("rimraf");
const { argv } = require("yargs");

// all paths passed to the clean script
const paths = argv._;

function cleanPath(cleanPath) {
  if (!cleanPath) {
    console.error("no path specified.");
    process.exit(1);
  }
  const removePath = path.resolve(process.cwd(), cleanPath);

  rimraf(removePath, () => {
    console.log(removePath, "cleaned");
  });
}

// clean all paths
if (Array.isArray(paths)) {
  paths.forEach(cleanPath);
}
