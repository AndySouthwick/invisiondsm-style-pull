# Get the latest design tokens from USANA's Design System

run npm i usanadesigntokens

make sure to npm install concurrently and add the script to your scripts in your package.json

for angular change your start script to look like this

`"start": "concurrently \"ng serve\" \"node node_modules/usanadesigntokens/index.js\"",`
  
this will pull the latest from the design system.
you can then use your favorite css preprocess sass less or stylus
by using:
 
 scss: `@import usanadesigntokens/style-params.less`
 
 less: `@import usanadesigntokens/style-params.scss`
 
 stylus: `@import usanadesigntokens/style-params.styl`
 
  
  
  