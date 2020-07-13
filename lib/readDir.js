const fs = require('fs');
const readFile = require('./readFile');

readDir = (path, option) => {
    return new Promise((resolve, reject)=>{
        fs.readdir(path, 'utf8', (err, data) =>{
            if (err){
                reject(err.message);
            }else{
                data.forEach((fileOne) => {
                if (path.extname(fileOne) === ".md") {
                    console.log(readFile(fileOne, option));
                }});
            };
        });
    });
};
module.exports = readDir;