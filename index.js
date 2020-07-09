const readFile = require('./readFile');
const readDir = require('./readDir');
const stats = require('./stats');
const fs = require('fs');
// const fetch = require('node-fetch');
// const { title } = require('process');
  
  const mdLinks = (path) =>{
    stats(path)
  };

  mdLinks('./');
  module.exports = mdLinks;
  
