const fs = require('fs');
const creatingArr = require('./creatingArr');
const { resolve } = require('path');
readFile = (path, option) => {
    return new Promise((resolve)=>{
        fs.readFile(path, 'utf8', (err, data) => {
            return resolve(creatingArr(err, data, option));
        });
    });
    
};
module.exports = readFile;
