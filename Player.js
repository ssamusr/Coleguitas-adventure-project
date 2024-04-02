function Player(x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 30
    this.height = 50
    this.velocityX = 0
    this.velocityY = 1
    this.gravity = 0.90
    this.sprite = document.createElement('div')
    this.visible = true
    this.isPlayerImmobilized = true

    this.drawPlayer = function () {
        self.sprite.setAttribute('id', 'player')
        self.sprite.style.left = self.x + 'px'
        self.sprite.style.top = self.y + 'px'
        board.appendChild(self.sprite)
    }

    this.move = function () {
        self.x += self.velocityX
        let sides = self.x

        self.y += self.velocityY
        let sideBottom = self.y

        // posicion + velocidad porque si no se queda el personaje despegazo del limite               
        if (sideBottom + self.velocityY < 526) {
            self.velocityY += self.gravity
            self.sprite.style.top = self.y + 'px'
        } else {
            self.velocityY = 0
        }

        if (sides < 994 && sides > 0) {
            self.sprite.style.left = self.x + 'px'
        } else if (sides <= 0) {
            self.x = 980
            self.sprite.style.left = self.x + "px"
        } else if (sides >= 980) {
            self.x = 0
            self.sprite.style.left = self.x + "px"
        }

        for (let i = 0; i < platformArr.length; i++) {
            const currentPlatform = platformArr[i]

            if (this.x < currentPlatform.x + currentPlatform.width &&
                this.x + this.width > currentPlatform.x &&
                this.y < currentPlatform.y + currentPlatform.height &&
                this.y + this.height > currentPlatform.y) {

                // Verifica si el personaje está tocando el vértice superior de la plataforma
                if (this.y + this.height > currentPlatform.y && this.y + this.height < currentPlatform.y + this.velocityY) {
                    console.log(this.y + this.height)
                    console.log(this.velocityY)
                    
                    // Si el personaje está tocando el vértice superior de la plataforma, ajusta su posición y velocidad en consecuencia
                    this.y = currentPlatform.y - this.height;
                    this.velocityY = 0;
                    this.gravity = 0;
                }
                // Verifica si el personaje está tocando los lados de la plataforma
                else {
                    // Verifica si el personaje está chocando con el lado izquierdo de la plataforma
                    if (this.x + this.width > currentPlatform.x && this.x < currentPlatform.x) {
                        // Si el personaje está chocando con el lado izquierdo de la plataforma, ajusta su posición en consecuencia
                        this.x = currentPlatform.x - this.width;

                    }
                    // Verifica si el personaje está chocando con el lado derecho de la plataforma
                    else if (this.x < currentPlatform.x + currentPlatform.width && this.x + this.width > currentPlatform.x + currentPlatform.width) {
                        // Si el personaje está chocando con el lado derecho de la plataforma, ajusta su posición en consecuencia
                        this.x = currentPlatform.x + currentPlatform.width;

                    }
                    // Verifica si el personaje está chocando con el lado inferior de la plataforma
                    else if (this.y < currentPlatform.y + currentPlatform.height && this.y > currentPlatform.y) {
                        // Si el personaje está chocando con el lado inferior de la plataforma, ajusta su posición y velocidad en consecuencia
                        this.y = currentPlatform.y + currentPlatform.height;
                        this.velocityY = 0;
                    }

                }
            }
        }

        // Condition collision floor
        if (player.y < respawnFloor.y + respawnFloor.height &&
            player.height + player.y > respawnFloor.y) {
            this.x = x
            this.y = y

            if (this.x === x && this.y === y) {
                let blinking = setInterval(() => {
                    this.visible = !this.visible
                    if (!this.visible) {
                        this.sprite.style.opacity = 0
                    } else {
                        this.sprite.style.opacity = 1
                    }
                }, 200)

                setTimeout(() => {
                    clearInterval(blinking)
                    this.sprite.style.opacity = 1
                    this.velocityX = 0
                }, 1500)
            }
        }

        //Condition collision trap
        if (player.x < respawnTrap.x + respawnTrap.width &&
            player.x + player.width > respawnTrap.x &&
            player.y < respawnTrap.y + respawnTrap.height &&
            player.height + player.y > respawnTrap.y &&
            respawnTrap.sprite.style.display !== 'none') {
            this.x = x
            this.y = y

            if (this.x === x && this.y === y) {
                let blinking = setInterval(() => {
                    this.visible = !this.visible
                    if (!this.visible) {
                        this.sprite.style.opacity = 0
                    } else {
                        this.sprite.style.opacity = 1
                    }
                }, 200)

                setTimeout(() => {
                    clearInterval(blinking)
                    this.sprite.style.opacity = 1
                    this.velocityX = 0
                }, 1500)
            }

            respawnTrap.sprite.style.display = 'none'

            let textElement = document.createElement('div')
            textElement.style.position = 'absolute';
            textElement.style.color = 'white'
            textElement.style.fontWeight = 'bold'
            textElement.style.textTransform = 'uppercase'
            textElement.style.family = "Pixelify Sans"
            textElement.style.letterSpacing = '6px'
            textElement.style.left = (respawnTrap.x - 25) + 'px';
            textElement.style.top = (respawnTrap.y - 10) + 'px';
            textElement.style.transform = "rotate(0deg)"
            textElement.textContent = 'undefined';
            board.appendChild(textElement);

            let textAnimationId = setInterval(() => {
                let currentTextPositionY = parseInt(textElement.style.top)
                let currentTextPositionX = parseInt(textElement.style.left)
                let currentOpacity = 1
                if (currentTextPositionY < window.innerHeight) {
                    textElement.style.top = (currentTextPositionY - 1) + 'px'
                    //textElement.style.left = (currentTextPositionX - 1) + 'px'

                }
            }, 30)

            setTimeout(() => {
                clearInterval(textAnimationId)
                textElement.style.display = 'none'
            }, 5000)
        }
    }
}