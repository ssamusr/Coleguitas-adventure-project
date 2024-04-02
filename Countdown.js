const Countdown = function(time) {
  this.time = time
  
  this.countdownTime = function() {
    document.getElementById('timer').innerHTML = this.time
    
    this.time--
      
    if (player.x < finalGoal.x + finalGoal.width &&
        player.x + player.width > finalGoal.x &&
        player.y < finalGoal.y + finalGoal.height &&
        player.height + player.y > finalGoal.y) {
          clearInterval(countdownTimeId)
          clearInterval(playerTimeId)
          document.getElementById('result').innerHTML = 'WINNER'
          document.getElementById('boton').style.display ='block'
          document.getElementById('boton').innerHTML = 'New Game'
          document.querySelector('.modal').style.display = 'flex'
          document.querySelector('.modal').style.background = 'rgba(209, 209, 209, 0.1)'
          document.querySelector('.modal').style.boxShadow = '0px 20px 15px rgba(0, 0, 0, 0.150)'
          document.querySelector('.modal').style.borderRadius = '12px'
          countdown.time = 20
    }
    + Math.abs(this.velocityY)
    if(this.time < 0) {
        clearInterval(countdownTimeId)
        clearInterval(playerTimeId)
        document.getElementById('result').innerHTML = 'GAME OVER'
        document.getElementById('boton').style.display ='block'
        document.getElementById('boton').innerHTML = 'Restart Game'
        document.querySelector('.modal').style.display = 'flex'
        document.querySelector('.modal').style.background = 'rgba(209, 209, 209, 0.1)'
        document.querySelector('.modal').style.boxShadow = '0px 20px 15px rgba(0, 0, 0, 0.150)'
        document.querySelector('.modal').style.borderRadius = '12px'
        countdown.time = 20
    }
  }
}