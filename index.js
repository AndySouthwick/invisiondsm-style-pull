const rp = require('request-promise');
const fs = require('fs');
const dataArray = [
  {"url": "https://projects.invisionapp.com/dsm-export/usana-dsm/tokens-practice/_style-params.scss?key=ryxgajmLh7",
    "file": "node_modules/usanadesigntokens/style-params.scss"},
  {"url": "https://projects.invisionapp.com/dsm-export/usana-dsm/tokens-practice/style-params.less?key=ryxgajmLh7",
    "file": "node_modules/usanadesigntokens/style-params.less"},
  {"url": "https://projects.invisionapp.com/dsm-export/usana-dsm/tokens-practice/style-params.styl?key=ryxgajmLh7",
    "file": "node_modules/usanadesigntokens/style-params.styl"},
]
// module.exports.renderStyles = () => {
//   dataArray.map(data => {
//     rp(data.url)
//       .then(e => {
//         console.log(String(e))
//         let options = {encoding: 'UTF8'};
//         let writeStream = fs.createWriteStream(data.file, options);
//         writeStream.write(String(e))
//         writeStream.on('finish', () => {
//           console.log('wrote all data to file')
//         })
//       })
//   })
// }
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