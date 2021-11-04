import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const s = 'codeleet';
const indice = [4, 5, 6, 7, 0, 2, 1, 3];

function res() {
  var arr = new Object();
  for (let i = 0; i < s.length; i++) {
    arr.s[i] = 1;
  }
  return arr;
}
console.log(res());

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(1);

