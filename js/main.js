'use strict';

///////////////////////
//  Global Variable  //
///////////////////////


let button = document.getElementsByClassName("form__button")[0];
let input = document.getElementById('add-item');
let ul = document.getElementsByClassName('TODO-list')[0];
let inputValue = '';
let spans;

/////////////////
//  functions  //
/////////////////

function getInputValue() {
  inputValue = input.value;
}

function addLiInList() {
  if (inputValue != '') {
    if (checkIfItemAlreadyExist()) {
      input.value = '';
    }
    else {
      ul.insertAdjacentHTML('beforeEnd', `<li><i class="far fa-times-circle"></i><span>${valueCapitalize()}</span><input type="number" value="1" class="ul__input-number"</li>`);
      input.value = '';
      ulScrollAuto();
    }
  }
}

function valueCapitalize() {
  return inputValue[0].toUpperCase() + inputValue.slice(1).toLowerCase();
}

function crossedLi() {
  spans = document.getElementsByTagName("span");
  for (let span of spans) {
    span.onclick = function() {
      span.classList.toggle('li__span--crossed')
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

function checkIfItemAlreadyExist() {
  spans = document.getElementsByTagName("span");
  let arrSpans = [];
  for (let i = 0; i < spans.length; i++) {
    arrSpans.push(spans[i].innerHTML);
  }
  return (arrSpans.includes(valueCapitalize())) ? true : false;
}

/////////////
//  Event  //
/////////////

button.onclick = function() {
  getInputValue();
  addLiInList();
  crossedLi();
  removeItem();
};

input.onkeypress = function(event) {
  if (event.which == 13 || event.keyCode == 13) {
    getInputValue();
    addLiInList();
    crossedLi();
    removeItem();
  }
  return;
}

