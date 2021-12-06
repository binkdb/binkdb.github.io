let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/supra-logo-black.jpeg') {
      myImage.setAttribute('src','images/supra-logo-blank.jpeg');
    } else {
      myImage.setAttribute('src','images/supra-logo-black.jpeg');
    }
}

let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
let myHeading = document.getElementById('myHeading');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
//    myHeading.textContent = 'Mozilla is cool, ' + myName;
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
