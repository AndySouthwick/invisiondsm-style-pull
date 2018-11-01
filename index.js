const rp = require('request-promise');
const fs = require('fs');
const dataArray = [
  {"url": "https://projects.invisionapp.com/dsm-export/usana-dsm/usana-design-system/_style-params.scss?key=Sye_KlJfCf",
    "file": "node_modules/invision-design-tokens/style-params.scss"},
  {"url": "https://projects.invisionapp.com/dsm-export/usana-dsm/usana-design-system/style-params.less?key=Sye_KlJfCf",
    "file": "node_modules/invision-design-tokens/style-params.less"},
  {"url": "https://projects.invisionapp.com/dsm-export/usana-dsm/usana-design-system/style-params.styl?key=Sye_KlJfCf",
    "file": "node_modules/invision-design-tokens/style-params.styl"},
]
 module.exports.renderStyles = async () => {
  await dataArray.map(async data => {
    const e = await rp(data.url)
        console.log(String(e))
        let options = {encoding: 'UTF8'};
        let writeStream = fs.createWriteStream(data.file, options);
        writeStream.write(String(e))
        writeStream.on('finish', () => {
          console.log('wrote all data to file')
        })
  })
}
this.renderStyles()