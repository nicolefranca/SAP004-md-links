const fs = require('fs');
const readFile = require('./readFile');
const readDir = require('./readDir');
stats = (path) =>{
    return new Promise ((resolve, reject)=>{
        fs.stat(path, (err, stats)=>{
            if (err) {
                reject(err.message)
            } else {
                if (stats.isDirectory() === true) {
                    resolve(readDir(path));
                } else {
                    resolve(readFile(path));    
                };
            };
        });
    })
       
};

module.exports = stats;