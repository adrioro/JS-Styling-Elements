var box = document.getElementById('box');
/*

//Set individual properties.

box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = "grey";
box.style.border = '1px solid black';
box.innerText = "Hello, I am a box";
box.style.color = "white";
box.style.padding = "10px";
*/

//Another way to do it:
//Simplifying the box.style
/*
var boxStyle = box.style

boxStyle.width = '100px';
boxStyle.height = '100px';
boxStyle.backgroundColor = "grey";


//Another way to do it:
//Set using an attribute.

box.setAttibute('style', 'width:100px;height:100px;background-color:slategrey;');
ERROR MESSAGE: box.getattribute is not a function

*/

//Event handler.

box.onclick = function () {
    box.style.border = '1px solid black';
}