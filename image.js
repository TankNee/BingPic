const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");
const imageminJpegtran = require("imagemin-jpegtran");
const images = require("images");
/**
 * compress image
 * @param {string[]} filePath
 * @param {string} folderPath
 * @param {{}} options
 */
// async function compressPNG(filePaths, folderPath, options = {}) {
//   const defaults = {
//     destination: `${folderPath}`,
//     plugins: [
//       imageminJpegtran(),
//       imageminPngquant({
//         quality: [0.6, 0.8],
//       }),
//     ],
//   };
//   Object.assign(defaults, options);

//   const files = await imagemin(filePaths, defaults);

//   return files;
// }
async function compressPNG(filePath) {
  await images(filePath).size(1920, 1080).save(filePath.replace("png", "jpg"), {
    quality: 50,
  });
}

module.exports.compressPNG = compressPNG;
