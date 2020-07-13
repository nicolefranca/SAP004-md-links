#!/usr/bin/env node
const mdLinks = require("./lib/index.js");
const path = process.argv[2];
const option = process.argv[3];

mdLinks(path, option)
    .then((result) => {
        console.log(result)
        // result.then(console.log).catch(console.log)
        // Promise.all(result).then(console.log).catch(console.log)
        // result.forEach(link => {
        //     console.log(link.href, link.text.substring(0, 50));
        // })
    })
    .catch(console.error)
