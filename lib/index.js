const readFile = require('./readFile');
const readDir = require('./readDir');
const stats = require('./stats');
const fs = require('fs');
// const fetch = require('node-fetch');
// const { title } = require('process');
  
  const mdLinks = (path, option) =>{
    return new Promise((resolve)=>{
      resolve(stats(path, option))
    });
  };


  module.exports = mdLinks;
  
