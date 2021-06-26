'use strict';

//for the header images slieshow :
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}

//for the first text slideshow on the images slideshow :
let myIndex1 = 0;
carousel1();

function carousel1() {
  let i;
  let y = document.getElementsByClassName("city");
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }
  myIndex1++;
  if (myIndex1 > y.length) {myIndex1 = 1}    
  y[myIndex1-1].style.display = "block";  
  setTimeout(carousel1, 2000); 
}

//for the second text slideshow on the images slideshow :

let myIndex2 = 0;
carousel2();

function carousel2() {
  let i;
  let z = document.getElementsByClassName("text");
  for (i = 0; i < z.length; i++) {
    z[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > z.length) {myIndex2 = 1}    
  z[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 2000); 
}



// document.getElementsByClassName("open").addEventListener("click", showForm());


// document.getElementsByClassName("close").addEventListener("click" , closeForm());


