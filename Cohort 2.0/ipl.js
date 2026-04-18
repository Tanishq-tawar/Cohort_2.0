let btn = document.getElementById("btn");
let box = document.querySelector(".box");   

let main = document.querySelector("main");  
btn.addEventListener("click", function(){
    let arr = [
        {
        name : "CSK",
        owner : "India Cements",
        captain : "MS Dhoni",
        primary : "Yellow" ,
        secondary : "Black"
        },
        {
        name : "RCB",
        owner : "India Cements",
        captain : "MS Dhoni",
        primary : "Red" ,
        secondary : "Golden"
        },
        {
        name : "MI",
        owner : "India Cements",
        captain : "MS Dhoni",
        primary : "Blue" ,
        secondary : "Silver"
        },
        {
        name : "SRH",
        owner : "India Cements",
        captain : "MS Dhoni",
        primary : "Orange" ,
        secondary : "Black"
        },
];

    let team = arr[Math.floor(Math.random() * arr.length)];
    let c1 = team.name;
    let c2 = team.primary;
    let c3 = team.secondary;
  
    box.innerHTML =`
    <h1>IPL 2024</h1>
    <br>
    <p1>Owner : ${team.owner}</p1>
    <br>
    <p2>Captain : ${team.captain}</p2>`;

    let h1 = document.querySelector("h1");
let p1 = document.querySelector("p1");
let p2 = document.querySelector("p2");

     h1.style.color = `${c2}`;
   p1.style.color = `${c2}`;
      p2.style.color = `${c2}`;

    h1.textContent = c1;
    main.style.backgroundColor = `${c2}`;
    box.style.backgroundColor = `${c3}`;
})