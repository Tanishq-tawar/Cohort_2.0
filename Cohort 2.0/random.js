let btn = document.querySelector("button");
let body =document.querySelector("body");
btn.addEventListener("click", function() {
    let x = Math.floor(Math.random() * 90) +1 ; 
    let y = Math.floor(Math.random() * 90) +1 ; 
    let z = Math.floor(Math.random() * 360) +1 ;

    console.log(x);
    console.log(y);
    console.log(z);
let div = document.createElement("div");
div.style.position = "absolute";
div.style.left = x + "%";
div.style.top = y + "%";
div.style.rotate = z + "deg";
div.style.width = "40px";
div.style.height = "40px";
div.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
body.appendChild(div);
});