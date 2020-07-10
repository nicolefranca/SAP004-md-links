const fs = require('fs');
const path = require('path');
const readFile = require('./readFile');
readDir = (path1) => {
    return new Promise((resolve, reject)=>{
        fs.readdir(path1, 'utf8', (err, data) =>{
            console.log(data)
            if (err){
                reject(err.message);
            }else{
                data.forEach((fileOne) => {
                if (path.extname(fileOne) === ".md") {
                    resolve(readFile(fileOne));
                }});
            };
        });
    });
};
module.exports = readDir;