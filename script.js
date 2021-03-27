let menuBar = document.getElementById("menubar");
let hamburgerMenu = document.getElementById("icon");
let close = document.getElementById("close");
let home = document.getElementById("homeButton");
let background = document.getElementById("backgroundButton");
let projects = document.getElementById("projectsButton");
let contact = document.getElementById("contactButton");


let menuAppear = function() {
  menuBar.style.left = '0';
  close.style.right = '15px';
}
hamburgerMenu.onclick = menuAppear;

let menuDisappear = function() {
  menuBar.style.left = '-100%';
  close.style.right = '-100%';
}
close.onclick = menuDisappear;
hamburgerMenu.ondblclick = menuDisappear;

home.onclick = menuDisappear;
background.onclick = menuDisappear;
projects.onclick = menuDisappear;
contact.onclick = menuDisappear;
