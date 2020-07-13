const stats = require('./stats');
  
  const mdLinks = (path, option) =>{
    return new Promise((resolve)=>{
      resolve(stats(path, option))
    });
  };


  module.exports = mdLinks;
  
