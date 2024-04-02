window.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
        case 'w':
        case " ":
            // jump player with gravity
            if(player.velocityY === 0) {
                player.velocityY = -15
            }
            break
        case 'ArrowLeft':
        case 'a':
            // move player to the left
            player.velocityX = -5
            player.sprite.style.backgroundImage = 'url("./assets/robot-izquierda2.png")'
            break
        case 'ArrowRight':
        case 'd':
            //move player to the right
            player.velocityX = 5
            player.sprite.style.backgroundImage = 'url("./assets/robot-derecha2.png")'
            break
    }
    player.gravity = 0.90
})

window.addEventListener('keyup', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
        case 'a':
            if(player.velocityX < 0){
                player.velocityX = 0
            }
            break
        case 'ArrowRight':
        case 'd':
            if(player.velocityX > 0) {
                player.velocityX = 0
            }
            break
    }
    player.gravity = 0.90
})  