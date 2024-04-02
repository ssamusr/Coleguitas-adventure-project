const board = document.getElementById('container')

let platformArr = [] // --> Nivel uno

platformArr.push(new Platform(865, 340, 40, 40, board));
platformArr.push(new Platform(700, 420, 200, 156, board));
platformArr.push(new Platform(900, 236, 124, 340, board));
platformArr.push(new Platform(0, 480, 180, 96, board));
platformArr.push(new Platform(180, 390, 130, 186, board));
platformArr.push(new Platform(370, 390, 30, 30, board));
platformArr.push(new Platform(600, 390, 30, 30, board));
platformArr.push(new Platform(280, 150, 200, 50, board));
platformArr.push(new Platform(0, 0, 1024, 10, board));
platformArr.push(new Platform(760, 260, 40, 40, board));
platformArr.push(new Platform(660, 130, 40, 40, board));
platformArr.push(new Platform(0, 236, 200, 40, board));
platformArr.push(new Platform(200, 0, 100, 276, board));
platformArr.push(new Platform(560, 80, 20, 20, board));
platformArr.push(new Platform(0, 236, 10, 300, board));
platformArr.push(new Platform(480, 290, 30, 30, board));


const finalGoal = new FinalGoal(370, 80, 70, 70, board)


//const player = new Player(660, 50, board)
const player = new Player(20, 400, board)
const respawnFloor = new RespawnFloor(200, 530, 500, 46, board, 'respawnFloor')
const respawnTrap = new RespawnFloor(70, 186, 50, 50, board, 'respawnTrap')
const countdown = new Countdown(20)

function startGame() {
    //console.log('aqui')
    platformArr.forEach(platform => {
        platform.drawPlatform();
    });
    
    player.drawPlayer()
    finalGoal.drawFinalGoal()
    respawnFloor.drawRespawn()
    respawnTrap.drawRespawn()
    respawnTrap.sprite.style.display = 'block'
    countdownTimeId = setInterval(countdownTime, 1000)
    playerTimeId = setInterval(playerMove, 20)   
}

function playerMove() {
    player.move()
}

function countdownTime() {
    countdown.countdownTime()
}

//startGame()

