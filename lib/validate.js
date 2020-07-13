const fetch = require('node-fetch');

validate = (validateArr) =>{
    return fetch (validateArr.href).then(a => {
        return{title: validateArr.title, href: validateArr.href, statusCode: a.status, statusText: a.statusText}
    });
    
};

module.exports = validate;