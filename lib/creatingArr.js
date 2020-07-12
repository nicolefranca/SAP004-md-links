const validate = require('./validate')
const fetch = require('node-fetch')
creatingArr = (err, data, option=[]) =>{
    return new Promise((resolve, reject)=>{
        const regex = /([^\[\t\n\r]+)\]\(([^#)]+)/g;
        const arrayLinks = data.match(regex);
            if (err) {
                reject(err.message);
            } else {
                if (arrayLinks !== null ) {
                    let separatingArr = arrayLinks.map((fullArr) => {
                        let arrayPair = fullArr.split(regex);
                        let title = arrayPair.slice(1, -2)[0];
                        let href = arrayPair.slice(2, -1)[0];
                        return process.argv.includes('--validate') ? validate({title, href}) : {title, href}
                    });
                    // Promise.all(separatingArr).then(console.log)
                    return process.argv.includes('--validate') ? Promise.all(separatingArr) : separatingArr
                }
                    // Promise.all(result.map(links=>{
                    //     return new Promise(()=>{
                    //         fetch (links.href)
                    //         .then((res)=>{
                    //             resolve({
                    //                 ...separatingArr,
                    //                 status: res.status
                    //             })
                    //         })
                    //     })
                    // }))
                
            };
    });
};
module.exports = creatingArr;