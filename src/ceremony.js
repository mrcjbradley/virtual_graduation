class Ceremony {
    constructor(ctx, graduates, currentStudent = 0) {
        this.ctx = ctx;
        this.graduates = graduates;
        this.currentStudent = currentStudent;
        this.megamanSpriteSheet = new Image();
        this.stage = new Image();
        this.audienceChairs = new Image();
        this.diploma = new Image();
        this.aalogo = new Image();

        this.megamanSpriteSheet.src = "./assets/megaman_sprite_sheet.png";
        this.stage.src = './assets/pixel_art_stage.png';
        this.audienceChairs.src = "./assets/theatre_chairs.png";
        this.diploma.src = "./assets/diploma.png";
        this.aalogo.src = "./assets/logo.png";
    }

    constructStage() {
        let waitingSprite = [100, 100];
        let spriteSize = [50, 50]

        this.interval = setInterval(() => {
            this.ctx.drawImage(this.stage, 20, 50, 850, 300);
            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)
            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)
            this.ctx.drawImage(this.megamanSpriteSheet,
                waitingSprite[0], waitingSprite[1],
                spriteSize[0], spriteSize[1],
                80, 245,
                // spriteSize[0], spriteSize[1])
                80, 80)
                // clearInterval(this.interval)
        },100)
    }

    nextStudentMoves(button) {
        button.disabled = true
        this.graduates[this.currentStudent].moveAcrossScreen(this, button)
        this.currentStudent += 1
    }


}

export default Ceremony