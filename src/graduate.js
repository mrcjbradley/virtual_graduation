class Graduate {
    constructor(ctx, name, img_url) {
        this.ctx = ctx
        this.name = name
        this.img_url = new Image()
        this.img_url.src = img_url
    }

    drawGraduate(ceremony, i, startingPosition, jumpHeight){
      // potat
      // let spriteSize = [375, 500]
      // let runningSprites = [[0, 0], [375, 0], [0, 0]];
      // let dashSprites = [[0, 0], [375, 0], [0, 0]];
      // let jumpSprite = [1125, 0];
      // let grabSprite = [0, 500];

      // megaman
      // let spriteSize = [50, 50]
      // let runningSprites = [[150, 0], [200, 0], [250, 0]];
      // let dashSprites = [[350, 250], [400, 250], [450, 250]];
      // let jumpSprite = [300, 150]

      // bananacat
      let spriteSize = [350, 400];
      let runningSprites = [[-80, -150], [650,-120], [-80,-150]];
      let dashSprites = [[-80, -150], [650, -120], [-80, -150]];
      let flipSprites = [[900,40], [1200,-100], [1500,-100], [1780,-100], [2000, 0], [2300,-100], [2600,-100]]

      this.ctx.clearRect(0, 0, 1000, 1000);

      this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);
      this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70);
      this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130);

      // this.scaleGraduateImg();

      if (startingPosition[0] >= 390 && startingPosition[0] <= 490) {
        // grabbing diploma
        if (startingPosition[0] <= 420) {
          jumpHeight[0] = jumpHeight[0]; // + 11 for megaman, +5 for potat 
        } else {
          jumpHeight[0] = jumpHeight[0]-10; // -5 for potat, -11 for megaman
        }
        this.ctx.drawImage(
          ceremony.bananacatSpriteSheet,
          // grabSprite[0],
          // grabSprite[1], // potat
          // jumpSprite[0], jumpSprite[1], // megaman
          flipSprites[0][0], //banancat
          flipSprites[0][1], //banancat
          spriteSize[0],
          spriteSize[1],
          startingPosition[0],
          startingPosition[1] - jumpHeight,
          80,
          80
        );
      } else if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {
        if (startingPosition[0] <= 420) {
          jumpHeight[0] = jumpHeight[0];
        } else {
          jumpHeight[0] = jumpHeight[0];
        }

        this.ctx.drawImage(
          ceremony.bananacatSpriteSheet,
          // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],
          flipSprites[4][0], //bananacat
          flipSprites[4][1], //bananacat
          spriteSize[0],
          spriteSize[1],
          startingPosition[0],
          startingPosition[1] - jumpHeight,
          80,
          80
        );
      } else if (startingPosition[0] > 490) {
        // after landing from diploma catch
        this.ctx.drawImage(
          ceremony.bananacatSpriteSheet,
          dashSprites[i % dashSprites.length][0],
          dashSprites[i % runningSprites.length][1],
          spriteSize[0],
          spriteSize[1],
          startingPosition[0],
          startingPosition[1],
          80,
          80
        );
      } else {
        this.ctx.drawImage(
          ceremony.bananacatSpriteSheet,
          runningSprites[i % runningSprites.length][0],
          runningSprites[i % runningSprites.length][1],
          spriteSize[0],
          spriteSize[1],
          startingPosition[0],
          startingPosition[1],
          80,
          80
        );
      }

      if (startingPosition[0] < 440) {
        this.ctx.drawImage(ceremony.diploma, 440, 235, 40, 40); //draw diploma
      } else if (startingPosition[0] === 440) {
        ceremony.sound.play();}
      // } else {
      //   this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);
      // }
    }

    moveAcrossScreen(ceremony,button) {
        clearInterval(ceremony.interval);
        let startingPosition = [80, 245]
        let flipSprite = [300, 100] //might get to use this later
        let studentName = document.querySelector("#student")
        let studentImg = document.querySelector("#stud-img")
        studentName.innerHTML = this.name
        studentImg.src = this.img_url.src
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
                // studentName.innerHTML  = ""
            }
        }, 100)
    }

    // scaleGraduateImg() {
    //     let scale = Math.max(150 / this.img_url.width, 170 / this.img_url.height);
    //     let x = 450 - ((this.img_url.width / 2) * scale);
    //     let y = 140 - ((this.img_url.height / 2) * scale);
    //     this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);
    // }

    jumpAndGrabDiploma(ceremony, i, startingPosition) {

    }
}

export { Graduate };