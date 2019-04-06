'use strict';

///////////////////////
//  Global Variable  //
///////////////////////


let button = document.getElementsByClassName("button")[0];
let input = document.getElementById('add-item');
let ul = document.getElementsByClassName('TODO-list')[0];
let inputValue = '';

/////////////////
//  functions  //
/////////////////

function getInputValue() {
  inputValue = input.value;
}

function addLiInList() {
  if (inputValue != '') {

    ul.insertAdjacentHTML('beforeEnd', `<li><i class="far fa-times-circle"></i><span>${inputValue[0].toUpperCase() + inputValue.slice(1)}</span><input type="number" value="1" class="form__input-number"</li>`);
    input.value = '';
  }
}

function crossedLi() {
  let spans = document.getElementsByTagName("span");
  for (let span of spans) {
    span.onclick = function() {
      span.classList.toggle('crossed')
    }
  }
}

function removeItem() {
  let icons = document.getElementsByClassName('far fa-times-circle');
  for (let icon of icons) {
    icon.onclick = function() {
      icon.parentElement.outerHTML="";
    }
  }
}

function ulScrollAuto() {
  ul.scrollTop = ul.scrollHeight;
}

/////////////
//  Event  //
/////////////

button.onclick = function() {
  getInputValue();
  addLiInList();
  crossedLi();
  removeItem();
  ulScrollAuto();
};

input.onkeypress = function(event) {
  if (event.which == 13 || event.keyCode == 13) {
    getInputValue();
    addLiInList();
    crossedLi();
    removeItem();
    ulScrollAuto();
  }
  return;
}

