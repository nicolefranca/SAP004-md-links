const mdLinks = require('../index.js');

const simpleArr = [
  { title: 'Chrome' ,
    href: 'https://developers.google.com/v8/'
  },
  { title: '`import`' ,
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import'
  },
  { title: '`export`', 
    href:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export'
  }
]

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(mdLinks()).toBe('function')
    console.log('');
  });
  // it('Should return 3 links', ()=>{
  //   expect(separatingArr).toEqual(simpleArr)
  // })

});
