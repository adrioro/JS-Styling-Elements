var myBox = document.getElementById('box');
/*
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = "grey";
box.style.border = '1px solid black';
box.innerText = "Hello, I am a box";
box.style.color = "white";
box.style.padding = "10px";
*/

//Another way to do it:

/*
var boxStyle = box.style

boxStyle.width = '100px';
boxStyle.height = '100px';
boxStyle.backgroundColor = "grey";
*/

//Another way to do it:

myBox.setAttibute('style', 'width:150px;height:150px;background-color:red;');