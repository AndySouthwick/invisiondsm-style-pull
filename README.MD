# For use with invisions design system manager (DSM)

if you want to use USANA Health Sciences Tokens, run npm i invision-design-tokens.
Or follow along to use your own

make sure to `npm install concurrently` and add the following script to your scripts in your package.json

for angular change your start script to look like this

`"start": "concurrently \"ng serve\" \"node node_modules/invision-design-tokens/index.js\"",`

for react change your start script to look like this

`"start": "concurrently \" \"node node_modules/invision-design-tokens/index.js\"",`
 
 Modify the script and add your URLs from invisions DSM, for sass add your sass url, for  stylus add your stylus URL etc.
 
 `{"url": "<YOUR SCSS URL GOES HERE>",
      "file": "style-params.scss"},
    {"url": "<YOUR LESS URL GOES HERE>",
      "file": "style-params.less"},
    {"url": "<YOUR STYLUS URL GOES HERE>",
      "file": "style-params.styl"},`
 
 run npm start or yarn start in your terminal to start the application.
 
this script will pull the latest from design system.
you can then use your favorite css preprocess sass less or stylus
by using in your code.:
 
 scss: `@import invision-design-tokens/style-params.less`
 
 less: `@import invision-design-tokens/style-params.scss`
 
 stylus: `@import invision-design-tokens/style-params.styl`
 
  
  
  