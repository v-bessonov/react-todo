var React = require('react');
var ReactDOM = require('react-dom');
//var {Route, Router, IndexRoute} = require('react-router');




//Load foundation-sites

//require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//App css
//require('style-loader!css-loader!sass-loader!applicationStyles');
require('applicationStyles');

// var objOne = {
//   name : 'Andrew',
//   location: 'Moscow'
// };
//
// var objTwo = {
//   age: 25,
//   ...objOne
// };
//console.log(objTwo);

ReactDOM.render(
<p>Bolilerplate 3 project</p>,


  document.getElementById('app')
);
