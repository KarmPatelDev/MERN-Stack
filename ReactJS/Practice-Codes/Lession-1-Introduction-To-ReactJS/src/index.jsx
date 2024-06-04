/*

About React -:

- Component Based Approach
- Uses a Declarative Approach
- DOM Updates are handled gracefully
- Reusable Code

Why React -:

- Created and maintained by fb 
- It has a huf=ge community on GitHub
- Component Based Architecture

React Installation -:

- Install node and npm
- Install Text Editor
- Install React from Terminal
  - npm install -g create-react-app
  - create-react-app -version
  - create-react-app <project_name>

Single Page Advantages -:

- Save Bandwidth
- Save Mobile Data
- Save Data Transportation
- Less Load To Server

Node_Modules Folder -:

- node_modules folder is the repository of modules/library which you are using inside your project.
- what ever you are importing in your project that module or library should present inside the node_modules folder.
- when you do npm install that time that module or library install inside the node_modules folder ans one entry added in package.json file.

Package.json -: For MetaData and Package Info

manifest.json -: For Providing the Application Information(json form)

*/





// var React = require('react');
// var ReactDom = require('react-dom');

//we can use above or below it is same but don't use both

import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(<h1> Hello World! </h1>, document.getElementById('root'));

// Above Line Compile Like Below in Babel JS Compiler

// ReactDOM.render(React.createElement("h2", null, " Hello World! "), document.getElementById('root'));
// =>  if we use above two tag same time then the compiled tag run only other output not show


var tag = document.createElement("h1");
tag.innerText = " Hello World! ";
document.getElementById("root").appendChild(tag);

// All Three Above Print Same
