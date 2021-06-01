// 抓取图标
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
// ![](https://img.shields.io/badge/-Java-007396?logo=java&logoColor=white)
request.get("https://simpleicons.org/", (err, res, body) => {
  console.log(err)
  let $ = cheerio.load(body);
  let str = "";
  $(".main .grid .grid-item").each((i, item) => {
    // console.log(item)
    let title = $(item).find(".grid-item__title").text().replace(/\s/g, "%20").replace(/\-/g, "%20");
    let color = $(item).find(".grid-item__footer .grid-item__color").text().replace("#", "");
    console.log(title,color)
    str+=`![](https://img.shields.io/badge/-${title}-${color}?logo=${title}&logoColor=white)\n`
  })
  fs.writeFileSync("readme1.md", str)
})
// readme1.md