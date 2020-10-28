const images = require("images");
async function compressPNG(filePath) {
  await images(filePath).size(1920, 1080).save(filePath.replace("png", "jpg"), {
    quality: 50,
  });
}

module.exports.compressPNG = compressPNG;
