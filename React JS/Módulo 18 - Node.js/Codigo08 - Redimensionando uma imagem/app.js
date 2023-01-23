// $ npm init - Criar nosso pacote
//          name: imageeditor
//          version: 1.0.0
//          description:
//          entry point: app.js
//          test command:
//          git repository:
//          keywords:
//          author:
//          license: (ISC)

// $ npm install sharp
// $ npm install compress-images --save-dev
// $ npm install pngquant-bin@6.0.1 --save
// $ npm install gifsicle@5.2.1 --save

// $ node app PATH WIDTH

const sharp = require('sharp');
const compress_images = require('compress-images');
const fs = require('fs');

let path = process.argv[2];
let width = Number(process.argv[3]);

function compress(inputPath, outputPath){
    compress_images(
        inputPath, 
        outputPath, 
        { compress_force: false, statistic: true, autoupdate: true }, 
        false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } }, function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");

            fs.unlink(inputPath, (err) => {
                if (err) throw err;
                console.log(inputPath + ' was deleted');
            });
        }
    );
}

function resize(inputPath, outputPath, width){

    sharp(inputPath)
        .resize({width: width})
        .toFile(outputPath, (err) => {
            if (err){
                console.log(err);
            } else {
                console.log('Imagem redimensionada com sucesso!');
                compress(outputPath, './compressed/');
            }
        });
}


resize(path, './temp/output_resize.png', width);




// https://github.com/lovell/sharp
// https://www.npmjs.com/package/compress-images