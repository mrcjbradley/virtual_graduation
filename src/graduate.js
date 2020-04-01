class Graduate {
    constructor(ctx, name, img_url) {
        this.ctx = ctx
        this.name = name
        this.img_url = new Image()
        this.img_url.src = img_url
    }

    drawGraduate(ceremony,i,startingPosition, jumpHeight){
        let spriteSize = [50, 50]
        let runningSprites = [[150, 0], [200, 0], [250, 0]];
        let dashSprites = [[350, 250], [400, 250], [450, 250]];
        let jumpSprite = [300, 150]

        this.ctx.clearRect(0, 0, 1000, 1000)

        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);
        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)
        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)

        if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {
            if (startingPosition[0] <= 420) {
                jumpHeight[0] = jumpHeight[0] + 11;
            } else {
                jumpHeight[0] = jumpHeight[0] - 11;
            }

            this.ctx.drawImage(ceremony.megamanSpriteSheet,
                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],
                jumpSprite[0], jumpSprite[1],
                spriteSize[0], spriteSize[1],
                startingPosition[0], startingPosition[1] - jumpHeight,
                80, 80)
        } else if (startingPosition[0] > 490) { // after landing from diploma catch
            this.ctx.drawImage(ceremony.megamanSpriteSheet,
                dashSprites[i % dashSprites.length][0], dashSprites[i % runningSprites.length][1],
                spriteSize[0], spriteSize[1],
                startingPosition[0], startingPosition[1] - 40,
                130, 130)
        } else {
            this.ctx.drawImage(ceremony.megamanSpriteSheet,
                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],
                spriteSize[0], spriteSize[1],
                startingPosition[0], startingPosition[1],
                80, 80)
        }

        let photoHeight = 170;
        let photoWidth = 150;

        this.ctx.drawImage(this.img_url, 375, 55, photoWidth, photoHeight);

        if (startingPosition[0] < 440) {
            this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma
        } else if (startingPosition[0] === 440) {
            ceremony.sound.play();
        } else {
            this.ctx.drawImage(ceremony.aalogo, 375, 55, 150, 150);
        }
    }

    moveAcrossScreen(ceremony,button) {
        clearInterval(ceremony.interval);
        let startingPosition = [80, 245]
        let jumpSprite = [300, 100] //might get to use this later
        let studentName = document.querySelector("#student")
        studentName.innerHTML = this.name
        let i = 0;
        let jumpHeight = [0];

        let interval = setInterval(() => {
            startingPosition[0] += 20
            i++

            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)

            if (startingPosition[0] >= 740) {
                clearInterval(interval)
                this.ctx.clearRect(0, 0, 1000, 1000)
                ceremony.constructStage()
                button.disabled = false
                studentName.innerHTML  = ""
            }
        }, 100)
    }

    jumpAndGrabDiploma(ceremony, i, startingPosition) {

    }
}

export { Graduate };