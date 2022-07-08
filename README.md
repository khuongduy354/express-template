# Template for express 

A simple but structured template for boostraping Express RestAPI. 
# To add 

Centralized Error handler

# To use 

`npm run dev`: run typescript src/index.ts file. 

`npm run start`: run javascript dist/index.js file.

`npm run build`: build dist folder, transpile all ts to js. 


**To use with PM2:** 
- `npm run build` first, then `npm run monit` , then every time change code just run build.
- Or, for auto rerun: `tsc -w`, then open another terminal `pm2 start dist/index.js --watch`