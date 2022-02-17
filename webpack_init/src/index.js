import helloWorld from './hello.js';

function component() {
  var element = document.createElement('div'); 
  element.innerHTML = helloWorld();
  return element;
}

document.body.appendChild(component());

