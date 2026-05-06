let ground = document.querySelector('.ground')
ground.addEventListener('mousemove', function(e){
    x = e.offsetX
    y = e.offsetY
    // console.log(`${x}, ${y}`)

    ground.style.setProperty('--x', x + 'px')
    ground.style.setProperty('--y', y + 'px')
})