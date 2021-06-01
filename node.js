// 抓取logo数据
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
// ![](https://img.shields.io/badge/-Apple-000000?logo=Apple&logoColor=FFFFFF)
request.get("https://simpleicons.org/", (err, res, body) => {
  let $ = cheerio.load(body);
  let str = "<style>h1{display:none;}</style>\n\n## 图标logo\n\n";
  $(".main .grid .grid-item").each((i, item) => {
    let title = $(item).find(".grid-item__title").text().replace(/\s/g, "%20").replace(/\-/g, "%20");
    let color = $(item).find(".grid-item__footer .grid-item__color").text().replace("#", "");
    let color1 = isLight(color) ? "333333" : "FFFFFF";
    function isLight(color) {
      let r = parseInt("0x" + color.slice(0, 2))
      let g = parseInt("0x" + color.slice(2, 4))
      let b = parseInt("0x" + color.slice(4, 6))
      return (
        0.213 * r + 0.715 * g + 0.072 * b > 255 / 1.38
      );
    };
    str += `![](https://img.shields.io/badge/-${title}-${color}?logo=${title}&logoColor=${color1})\n`
  })
  fs.writeFileSync("logo.md", str)
  console.log("success")
})