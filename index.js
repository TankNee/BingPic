const superagent = require("superagent");
const fs = require("fs");
const { FILE } = require("dns");
const { compressPNG } = require("./image");
const API_ENDPOINT =
  "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";
const BING_ENDPOINT = "https://www.bing.com";
function getFormatDate() {
  const date = new Date();
  const month = date.getMonth();
  if (month < 10 && month > 0) {
    month = `0${month}`;
  }
  const day = date.getDate();
  if (day < 10 && day > 0) {
    day = `0${day}`;
  }
  return `${date.getFullYear()}${month}${day}`;
}

async function getPic() {
  const { body: dailyInfo, text } = await superagent.get(API_ENDPOINT);
  const date = getFormatDate();
  const fileFolder = `blob/${date}`;
  if (!fs.existsSync("blob")) fs.mkdirSync("blob");
  if (!fs.existsSync(fileFolder)) {
    fs.mkdirSync(fileFolder);
  }
  fs.writeFileSync(`${fileFolder}/${date}.json`, text);

  if (!fs.existsSync(`${fileFolder}/${date}.png`)) {
    const { body: image } = await superagent.get(
      `${BING_ENDPOINT}/${dailyInfo.images[0].url}`
    );
    fs.writeFileSync(`${fileFolder}/${date}.png`, image);
  }

  const compressFiles = await compressPNG(`${fileFolder}/${date}.png`);
}
getPic();
