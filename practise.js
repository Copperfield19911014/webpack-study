const babel = require('@babel/core');

const result = babel.transform("const result = 1 + 6;console.log(112312);alert(123233)",{
  plugins:[
    require("./index")
  ]
});

console.log(result.code);