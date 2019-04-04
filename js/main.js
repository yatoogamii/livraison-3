
'use strict';

///////////////////////
//  Global Variable  //
///////////////////////


let button = document.getElementsByClassName("button")[0];
let ul = document.getElementsByClassName('TODO-list')[0];


/////////////////
//  functions  //
/////////////////

button.onclick = function() {

  let newLi = document.createElement('li');
  let inputValue = document.getElementById('add-item').value;
  newLi.innerHTML = inputValue;
  ul.insertAdjacentHTML('beforeEnd', `<li> ${inputValue} </li>`);

};

