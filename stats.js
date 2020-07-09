const fs = require('fs');
stats = (path) =>{
    fs.stat(path, (err, stats)=>{
        if (err) {
            return err.message
        } else {
            if (stats.isDirectory() === true) {
                readDir(path);
                console.log(path)
            } else {
                readFile(path);    
            };
        };
    });
};

module.exports = stats;