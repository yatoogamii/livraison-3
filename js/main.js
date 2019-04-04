
'use strict';

///////////////////////
//  Global Variable  //
///////////////////////


let button = document.getElementsByClassName("button")[0];
let ul = document.getElementsByClassName('TODO-list')[0];
let input = document.getElementById('add-item');
let spans;
let inputValue = '';
let icons;

console.log(ul);
/////////////////
//  functions  //
/////////////////

function getInputValue() {
  inputValue = input.value;
}

function checkInputEmptyValue() {
  if (inputValue == '') {
    return;
  }
}

function addLiInList() {
  if (inputValue != '') {
    ul.insertAdjacentHTML('beforeEnd', `<li><i class="far fa-times-circle"></i><span>${inputValue[0].toUpperCase() + inputValue.slice(1)}</span></li>`);
    input.value = '';
  }
}

function crossedLi() {
  spans = document.getElementsByTagName("span");
  for (let span of spans) {
    span.onclick = function() {
      span.classList.toggle('crossed')
      
    }
  }
}

function removeItem() {
  icons = document.getElementsByClassName('far fa-times-circle');
  for (let icon of icons) {
    icon.onclick = function() {
      icon.parentElement.outerHTML="";
    }
  }
}

button.onclick = function() {
  getInputValue();
  checkInputEmptyValue();
  addLiInList();
  crossedLi();
  removeItem();
};

input.onkeypress = function(event) {
  getInputValue();
  if (event.which == 13 || event.keyCode == 13) {
    checkInputEmptyValue();
    addLiInList();
    crossedLi();
    removeItem();
  }
  return;
}


