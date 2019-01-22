var box = document.getElementById('box');
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = "grey";
box.innerText = "Hello, I am a box";

//Simplification

boxStyle = box.style;

boxStyle.border = '1px solid black';
boxStyle.color = "white";
boxStyle.padding = "10px";