class Graduate {
    constructor(ctx, name, img_url) {
        this.ctx = ctx
        this.name = name
        this.img_url = new Image()
        this.img_url.src = img_url
    }

    drawGraduate(ceremony,i,startingPosition){
        let spriteSize = [50, 50]
        let runningSprites = [[150, 0], [200, 0], [250, 0]]
        let jumpSprite = [300, 100] //might get to use this later

        this.ctx.clearRect(0, 0, 1000, 1000)

        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);
        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)
        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)

        this.ctx.drawImage(ceremony.diploma, 440, 230, 20, 20);

        this.ctx.drawImage(ceremony.megamanSpriteSheet,
            runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],
            spriteSize[0], spriteSize[1],
            startingPosition[0], startingPosition[1],
            // spriteSize[0], spriteSize[1])
            80, 80)
        
        this.ctx.drawImage(this.img_url, 360, 65, 180, 150)

    }

    moveAcrossScreen(ceremony,button) {
        let startingPosition = [80, 245]
        let jumpSprite = [300, 100] //might get to use this later
        let studentName = document.querySelector("#student")
        studentName.innerHTML = this.name
        let i = 0;
        let interval = setInterval(() => {
            startingPosition[0] += 20
            i++

            this.drawGraduate(ceremony,i, startingPosition)

            if (startingPosition[0] >= 800) {
                clearInterval(interval)
                this.ctx.clearRect(0, 0, 1000, 1000)
                ceremony.constructStage()
                button.disabled = false
                studentName.innerHTML  = ""
            }
        }, 100)
    }

    jumpAndGrabDiploma() {

    }
}

export { Graduate };