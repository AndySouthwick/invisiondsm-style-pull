# Get the latest design tokens from USANA's Design System

run npm i invision-design-tokens

make sure to npm install concurrently and add the script to your scripts in your package.json

for angular change your start script to look like this

`"start": "concurrently \"ng serve\" \"node node_modules/invision-design-tokens/index.js\"",`
  
this will pull the latest from the design system.
you can then use your favorite css preprocess sass less or stylus
by using:
 
 scss: `@import invision-design-tokens/style-params.less`
 
 less: `@import invision-design-tokens/style-params.scss`
 
 stylus: `@import invision-design-tokens/style-params.styl`
 
  
  
  