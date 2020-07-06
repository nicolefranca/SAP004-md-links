const fs = require('fs');
  
  const mdLinks = (path) =>{
      fs.readFile(path, 'utf8',(error, file)=>{
        console.log(file);
      });
  };

  mdLinks('./README.md');
