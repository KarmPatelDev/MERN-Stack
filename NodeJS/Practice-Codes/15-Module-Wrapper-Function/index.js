/* Grouping Operator and in that anonymous function 
  When we run all the code is wrape in this grouping that's why the codes variables and functions are private
  // all parameters are local 
*/

const a = require("a");
const name = "Karm";
console.log(name); 


// above code change in below code when we run

// now this are private
// (function(exports, require, module, __filename, __dirname){
//     const a = require("a");
//     const name = "Karm";
//     console.log(name); 
// });



// if we want to run directly
(function(){
    const name = "Karm";
    console.log(name); 
})();


// below is show error
// (function(){
//     const name = "Karm"; 
// })();
// console.log(name);
