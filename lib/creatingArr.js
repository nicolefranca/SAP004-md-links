const validate = require('./validate')
creatingArr = (err, data, option=[]) =>{
    return new Promise((resolve, reject)=>{
    const regex = /([^\[\t\n\r]+)\]\(([^#)]+)/g;
    const arrayLinks = data.match(regex);
        if (err) {
            reject(err.message);
        } else {
            if (arrayLinks !== null) {
                let separatingArr = arrayLinks.map((fullArr) => {
                    let arrayPair = fullArr.split(regex);
                    let title = arrayPair.slice(1, -2)[0];
                    let href = arrayPair.slice(2, -1)[0];
                    return option.includes('--validate') ? validate({title, href}) : {title, href}
                });
                Promise.all(separatingArr).then(result =>{
                    resolve(result)
                });
                return option.includes('--validate') ? Promise.all(separatingArr) : separatingArr
            };                
        };
    });
};
module.exports = creatingArr;