let menubar = document.getElementById("menubar");
let hamburgermenu = document.getElementById("icon");
let close = document.getElementById("close");
let home = document.getElementById("homeButton");
let background = document.getElementById("backgroundButton");
let projects = document.getElementById("projectsButton");
let contact = document.getElementById("contactButton");


let menuAppear = function() {
  menubar.style.left = '0';
  close.style.right = '15px';
}
hamburgermenu.onclick = menuAppear;

let menuDisappear = function() {
  menubar.style.left = '-100%';
  close.style.right = '-100%';
}
close.onclick = menuDisappear;

home.onclick = menuDisappear;
background.onclick = menuDisappear;
projects.onclick = menuDisappear;
contact.onclick = menuDisappear;
