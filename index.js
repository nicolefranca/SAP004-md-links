const fs = require('fs');
// const fetch = require('node-fetch');
// const { title } = require('process');
  
  const mdLinks = (path) =>{
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8',(err, data)=>{
        const regex = /([^\[\t\n\r]+)\]\(([^#)]+)/g;
        const arr = [];
        const arrayLinks = data.match(regex)
        if (err){
          reject(err.message);
        }else{
        }if (arrayLinks !== null) {
          let separatingArr = arrayLinks.map((fullArr) => {
            let arrayPair = fullArr.split(regex);
            let title = arrayPair.slice(1, -2)[0]
            let href = arrayPair.slice(2, -1)[0]
            arr.push({title, href})
          });
          resolve(separatingArr);
          console.log(arr)
        }else{
          resolve()
        }
      });
    });
  };

  mdLinks('./README.md');