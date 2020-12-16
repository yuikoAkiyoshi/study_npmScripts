//For images minimize script
const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
imagemin(['public/assets/**/*.{jpg,png,gif,svg}'], {
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.65,0.80], speed: 1}),
    imageminGifsicle(),
    imageminSvgo()
  ]
}).then(files => {
  console.log(files);
  console.log(`Images optimized`);
});