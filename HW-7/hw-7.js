/* Defining variable */
let body = document.body;

/* Div, header and paragraph elements */
let form1 = document.createElement("div");

/* container variables and selectors */
let btcinema = document.querySelector("#bcinema");
let btphoto = document.querySelector("#bphoto");
let elchild1 = document.querySelector(".intro");
let elchild2 = document.querySelector(".cinema");
let elchild3 = document.querySelector(".photo");
let div8= document.querySelector(".storageDiv");
let form8 = document.querySelector(".inputForm");
//let reset = document.querySelector("#reset");

/* background style and elements */
body.style.background = "#696969";

/* Adding buttons for selections */
btcinema.addEventListener("click", showHideText_cinema);
btphoto.addEventListener("click", showHideText_photo);

/* creating input function forms */
function grabText(){
    let textIn;
    textIn = document.querySelector("textIn1").value;
    if( textIn.length < 1){ alert("Enter Your Name"); return }

    let textToAdd = document.createTextNode("Howdy "+textIn+", how to choose the best for your memories");

    let p1 = document.createElement("p");
    p1.appendChild(textToAdd);

    let storage = document.querySelector("#storageDiv");
    storage.appendChild(p1);

}

/* second option event button */
document.querySelector("useButton").addEventListener('click', grabText);

/* cinema button */

function showHideText_elchild2(){
  if(elchild2.hidden){
    btcinema.hidden = true;
    elchild1.hidden = false;
    form8.hidden = true;
    elchild2.hidden = false;
    elchild3.hidden = true;
    btphoto.hidden = true;
    // reset.hidden = false;
    form1.hidden = true;
  }
}

body.style.background = "#696969";

/* affirmation function */
function alertOpen1(){
  alert("Good Choice");
}

setTimeout( alertOpen1, 800 );

  } else {
    btcinema.hidden = false;
    elchild1.hidden = false;
    form8.hidden = false;
    elchild2.hidden = true;
    elchild3.hidden = true;
    btphoto.hidden = false;
    // reset.hidden = true;
    form1.hidden = false;
  }
}

/* photo button */
function showHideText_elchild3(){
  if(elchild3.hidden){
    btphoto.hidden = true;
    elchild1.hidden = false;
    form8.hidden = true;
    elchild2.hidden = true;
    elchild3.hidden = false;
    btcinema.hidden = true;
    // reset.hidden = false;
    form1.hidden = true;
  }
}

/* second affirmation function */
function alertOpen2(){
  alert("Not a bad option, but photos can't tell your story");
}

setTimeout( alertOpen2, 800 );

  } else {
    btphoto.hidden = false;
    elchild1.hidden = false;
    from8.hidden = false;
    elchild2.hidden = true;
    elchild3.hidden = true;
    btcinema.hidden = false;
    // reset.hidden = true;
    form1.hidden = false;
  }
}

body.appendChild(form1);
