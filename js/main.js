'use strict';

///////////////////////
//  Global Variable  //
///////////////////////


let button = document.getElementsByClassName("form__button")[0];
let input = document.getElementById('add-item');
let ul = document.getElementsByClassName('TODO-list')[0];
let divDarkModeOn = document.getElementsByClassName('button-dark-mode--on')[0];
let divDarkModeOff = document.getElementsByClassName('button-dark-mode--off')[0];
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

function darkModeOn() {
  
}

function darkModeOff() {
  
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
};

divDarkModeOn.onclick = function () {
  divDarkModeOn.style.backgroundColor = "#4c4c4c";
  divDarkModeOff.style.backgroundColor = "#454545";
};

divDarkModeOff.onclick = function() {
  divDarkModeOff.style.backgroundColor = "#4c4c4c";
  divDarkModeOn.style.backgroundColor = "#454545";
};
