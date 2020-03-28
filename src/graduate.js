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

        this.ctx.drawImage(ceremony.stage, 20, 50, 450, 300);
        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 450, 70)
        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 450, 130)

        this.ctx.drawImage(ceremony.megamanSpriteSheet,
            runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],
            spriteSize[0], spriteSize[1],
            startingPosition[0], startingPosition[1],
            spriteSize[0], spriteSize[1])
        
        this.ctx.drawImage(this.img_url, 170, 100, 150, 150)

    }

    moveAcrossScreen(ceremony,button) {
        let startingPosition = [50, 250]
        let jumpSprite = [300, 100] //might get to use this later
        let studentName = document.querySelector("h1")
        studentName.innerHTML = this.name
        let i = 0;
        let interval = setInterval(() => {
            startingPosition[0] += 10
            i++

            this.drawGraduate(ceremony,i, startingPosition)

            if (startingPosition[0] === 420) {
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