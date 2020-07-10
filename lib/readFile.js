const fs = require('fs');
const creatingArr = require('./creatingArr');
const { resolve } = require('path');
readFile = (path) => {
    return new Promise((resolve, reject)=>{
        fs.readFile(path, 'utf8', (err, data) => {
            creatingArr(err, data)
        });
    });
    
};
module.exports = readFile;
