let sound=[
    A={
        key : 'A' ,
        aud : new Audio("piano/key01.mp3")
    },
    B={
        key : 'B' ,
        aud : new Audio("piano/key02.mp3")
    },
    C={
        key : 'C' ,
        aud : new Audio("piano/key03.mp3")
    },
    D={
        key : 'D' ,
        aud : new Audio("piano/key04.mp3")
    },
    E={
        key : 'E' ,
       aud : new Audio("piano/key05.mp3")
    },
    F={
        key : 'F' ,
        aud : new Audio("piano/key06.mp3")
    },
    G={
        key : 'G' ,
        aud : new Audio("piano/key07.mp3")
    },
    H={
        key : 'H' ,
        aud : new Audio("piano/key08.mp3")
    },
    I={
        key : 'I' ,
        aud : new Audio("piano/key09.mp3")
    },
    J={
        key : 'J' ,
       aud : new Audio("piano/key10.mp3")
    },
    K={
        key : 'K' ,
        aud : new Audio("piano/key11.mp3")
    },
    L={
        key : 'L' ,
       aud : new Audio("piano/key12.mp3")
    },
    M={
        key : 'M' ,
       aud : new Audio("piano/key13.mp3")
    },
    N={
        key : 'N' ,
        aud : new Audio("piano/key14.mp3")
    },
    O={
        key : 'O' ,
        aud : new Audio("piano/key15.mp3")
    },
    P={
        key : 'P' ,
       aud : new Audio("piano/key16.mp3")
    },
    Q={
        key : 'Q' ,
        aud : new Audio("piano/key17.mp3")
    },
    R={
        key : 'R' ,
        aud : new Audio("piano/key18.mp3")
    },
    S={
        key : 'S' ,
       aud : new Audio("piano/key19.mp3")
    },
    T={
        key : 'T' ,
        aud : new Audio("piano/key20.mp3")
    },
    U={
        key : 'U' ,
        aud : new Audio("piano/key21.mp3")
    },
    V={
        key : 'V' ,
       aud : new Audio("piano/key22.mp3")
    },
    W={
        key : 'W' ,
        aud : new Audio("piano/key23.mp3")
    },
    X={
        key : 'X' ,
        aud : new Audio("piano/key24.mp3")
    },
    Y={
        key : 'Y' ,
        aud : new Audio("piano/key01.mp3")
    },
    Z={
        key : 'Z' ,
        aud : new Audio("piano/key02.mp3")
    },


];


let main =document.querySelector('.main');
let keys = document.querySelector('.key');

let sum ="" ;

sound.forEach(function(val){
         sum +=  `<div class="key">
            <h2>${val.key}</h2>
        </div>` ;
        
       
});

function playsound(letter){
sound.forEach(function(val){
        if(val.key === letter){
            
            val.aud.currentTime = 0;
            val.aud.play();
        }
    });
}
        
 document.addEventListener('keydown', function(e){
    let pressed = e.key.toUpperCase();
    playsound(pressed);
});

keys.addEventListener('click', function(){
    let pressed = e.key.toUpperCase();

    sound.forEach(function(val){
        if(val.key === pressed){
            
            val.aud.currentTime = 0;
            val.aud.play();
        }
    });
});

    
    main.innerHTML = sum;



    





