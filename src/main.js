require('@babel/runtime/regenerator');
require('webpack-hot-middleware/client?reload=true');
require('./main.css');
require('./images/link.jpg');
require('./index.html');

var a = async args => {
  const { a, b } = args;
  await console.log('Hello from the future!');
  console.log('Done!');
};

a({ a: 1, b: 2 });
