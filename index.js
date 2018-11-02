const rp = require('request-promise');
const fs = require('fs');
const dataArray = [
  {"url": "<YOUR SCSS URL GOES HERE>",
    "location": "<WHERE YOU WANT YOUR SCSS TO GO>/style-params.scss"},
  {"url": "<YOUR LESS URL GOES HERE>",
    "location": "<WHERE YOU WANT YOUR LESS TO GO>/style-params.less"},
  {"url": "<YOUR STYLUS URL GOES HERE>",
    "location": "<WHERE YOU WANT YOUR STYLUS TO GO>/style-params.styl"},
]
 module.exports.renderStyles = async () => {
  await dataArray.map(async data => {
    const e = await rp(data.url)
        let options = {encoding: 'UTF8'};
        let writeStream = fs.createWriteStream(data.location, options);
        writeStream.write(String(e))
        writeStream.on('finish', () => {
        })
  })
}
this.renderStyles()
