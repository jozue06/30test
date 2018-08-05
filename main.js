import React from 'react';
import ReactDom from 'react-dom';
import App from './src/components/app.js';

let root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(<App />, root);