let bar = document.querySelector(".innerbar");
let btn = document.querySelector("button");
let width = 0;
let percentage = document.querySelector("#percent");
btn.addEventListener("click", function() {

    if (width >= 100) {
        alert("Loading complete!");
        return;
    }
    let interval = setInterval(function() {
        console.log("width: " + width);
        width += 10;
        bar.style.width = width + "%";
        percentage.textContent = width  + "%";
    }, 100);

setTimeout(function(){
    clearInterval(interval);
}, 1000);

});

