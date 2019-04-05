'use strict';

///////////////////////
//  Global Variable  //
///////////////////////


let button = document.getElementsByClassName("button")[0];
let input = document.getElementById('add-item');
let spans;
let inputValue = '';
let icons;

/////////////////
//  functions  //
/////////////////

function getInputValue() {
  inputValue = input.value;
}

function addLiInList() {
  if (inputValue != '') {
    let ul = document.getElementsByClassName('TODO-list')[0];
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

  // function countItem() {
  //   spans = document.getElementsByTagName("span");
  //   let map = new Map();

  //   for (let span of spans) {
  //     if (map.has(span.innerHTML)) {
  //       map.set(span.innerHTML, map.get(span.innerHTML) + 1);
  //     }
  //     else {
  //       map.set(span.innerHTML, 1);
  //     }
  //   }
  //     console.log(map.get(i);
  // }


/////////////
//  Event  //
/////////////

button.onclick = function() {
  getInputValue();
  addLiInList();
  crossedLi();
  removeItem();
  countItem();
};

input.onkeypress = function(event) {
  getInputValue();
  if (event.which == 13 || event.keyCode == 13) {
    addLiInList();
    crossedLi();
    removeItem();
    countItem();
  }
  return;
}

