const rp = require('request-promise');
const fs = require('fs');
const dataArray = [
  {"url": "<YOUR SCSS URL GOES HERE>",
    "location": "style-params.scss"},
  {"url": "<YOUR LESS URL GOES HERE>",
    "location": "style-params.less"},
  {"url": "<YOUR STYLUS URL GOES HERE>",
    "location": "style-params.styl"},
]
 module.exports.renderStyles = async () => {
  await dataArray.map(async data => {
    const e = await rp(data.url)
        console.log(String(e))
        let options = {encoding: 'UTF8'};
        let writeStream = fs.createWriteStream(data.location, options);
        writeStream.write(String(e))
        writeStream.on('finish', () => {
          console.log('wrote all data to file')
        })
  })
}
this.renderStyles()
