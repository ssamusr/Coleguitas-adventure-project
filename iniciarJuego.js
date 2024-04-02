function iniciarJuego() {
    var element = document.getElementById('container');
    element.style.display = 'flex'
    var element = document.getElementById('timer')
    element.style.display = 'block'
    var element = document.getElementById('conEnt');
    element.style.display = 'none'
    var element = document.getElementById('boton')
    element.style.display = 'none'
    var modal = document.querySelector('.modal')
    modal.style.display = 'none'

    player.x = 50
    player.y = 300

    player.gravity = 0.9

    startGame()
}