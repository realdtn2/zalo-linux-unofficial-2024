const za_sharp = require("./lib/sharp");
const fs = require("fs");

const images = fs.readdirSync("./jxl");

const func = async () => {
  for (const image of images) {
    try {
      const buffer = fs.readFileSync(`./image.jpg`);
      const result = await za_sharp.thumbnail({
        buffer,
        width: 720,
        height: 392,
        format: "jpeg",
      });
      const end = Date.now();
      console.log(`Image ${image} took ${end - start}ms`);
    } catch (e) {
      console.log(`Image ${image} failed`, e);
    }
  }
}

func();