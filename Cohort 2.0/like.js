let image =document.querySelector('img');
let love = document.querySelector('#love');

image.addEventListener('dblclick',function(){

    let x =Math.floor(Math.random()*100);
    let y =Math.floor(Math.random()*100);
    love.style.opacity = 1;
    love.style.transform ='translate(-50%,-50%) scale(8)';
    setTimeout(function(){
        love.style.left = x + '%';
        love.style.top = y + '%';
        love.style.opacity = 1;
        love.style.transform ='translate(-1000%,-3000%) scale(0) rotate(0deg)';
    },700)

    setTimeout(function(){
        love.style.opacity = 0;
 love.style.transform ='translate(-50%,-50%) scale(0) rotate(80deg)';
    },1000)

})