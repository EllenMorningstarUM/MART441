/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/

var myImage = new Image (500, 800);
myImage.src = "../HW-6/images/picture.jpg"

//body
let body = document.body;
body.innerText = "";
body.style.background = "rgb(0, 102, 153)";

let el = document.createElement("div");
let el1 = document.createElement("h1");
let el2 = document.createElement("p");
let el3 = document.createElement("p");
let el4 = document.createElement("p");
let el5 = document.createElement("a");

el1.innerText = "Ellen's Homework 6 JavaScript";
el2.innerText = "Finally able to sit back down and get into the swing of things this week.";
el3.innerText = "I had to travel from New Mexico to Montana last week to film a wedding and I ended up getting stuck in Billings for two extra days!"
el4.innerText = "Below is a picture of the bride I took, I actually just finished their film yesterday morning! There's a link to the film below the picture if anyone is interested!"
el5.innerText = "Ugly Horse Art - Wedding Cinematography";

el.setAttribute("style", "text-align:center");
el1.setAttribute("style", "padding:0.5em; margin:0; text-align:center; color:#ffffff");
el2.setAttribute("style", "padding:0em; margin:0; font-style:italic; text-align:center; color:#ffffff");
el3.setAttribute("style", "padding:0em; margin:0; font-style:bold; text-align:center; color:#ffffff");
el4.setAttribute("style", "padding:0em; margin:0; font-style:bold; text-align:center; color:#ffffff");
el5.setAttribute("href", "https://vimeo.com/259734310");
el5.setAttribute("style", "padding:0em; margin:0; font-style:italic; text-align:center; color:#ffffff");

myImage.setAttribute("style", "padding:0em; margin:100px");

el.appendChild(el1);
el.appendChild(el2);
el.appendChild(el3);
el.appendChild(el4);
el.appendChild(myImage);
el.appendChild(el5);

body.appendChild(el);
