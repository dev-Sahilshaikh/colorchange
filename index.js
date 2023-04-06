
let h1= document.getElementById("sahil");

let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
let pink = document.getElementById('pink');
let orange = document.getElementById('orange');

red.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
    h1.innerHTML = "background is red";
})


blue.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
    h1.innerHTML = "background is blue";
})


green.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
    h1.innerHTML = "background is green";
})


yellow.addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow";
    h1.innerHTML = "background is yellow";
})


pink.addEventListener("click", function(){
    document.body.style.backgroundColor = "pink";
    h1.innerHTML = "background is pink";
})


orange.addEventListener("click", function(){
    document.body.style.backgroundColor = "orange";
    h1.innerHTML = "background is orange";
})