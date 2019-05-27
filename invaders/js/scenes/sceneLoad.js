class SceneLoad extends Phaser.Scene {
    constructor() 
    {
        super('SceneLoad');
    }
    preload()
    {
        this.bar = new Bar({scene:this, x:game.config.width/2, y:game.config.height/2})
        this.progText = this.add.text(game.config.width/2, game.config.height/2, "o%", {color:"#ffffff", fontSize: game.config.width/20})
        this.progText.setOrigin(0.5, 0.5)
        this.load.on("progress", this.onProgress, this)       

        this.load.image("potato", "images/potato.png")	 
    this.load.image("button1", "images/ui/buttons/2/1.png")
    this.load.image("button2", "images/ui/buttons/2/5.png")

    //this.load.audio('cat', ["audio/meow.mp3", 'audio/meow.ogg'])
    //this.load.audio('backgroundMusic', ["audio/background.mp3", 'audio/background.ogg'])


    this.load.image("toggleBack", "images/ui/toggles/1.png")
    this.load.image("sfxOff", "images/ui/icons/sfx_off.png")
    this.load.image("sfxOn", 'images/ui/icons/sfx_on.png')
    this.load.image("musicOn", 'images/ui/icons/music_on.png')
    this.load.image("musicOff", 'images/ui/icons/music_off.png')

    this.load.image('player', 'images/Player.png')
    this.load.image('GOI', 'images/GAME-OVER.png')
    this.load.image('GOI2', 'images/GAME-OVER2.png')
    this.load.image('SIT', 'images/SPACETEXT')
    this.load.image('SIT', 'images/SPACETEXT2')
    this.load.image('0', 'images/0.png')
    this.load.image('05000', 'images/0500.png')
    this.load.image('CREDIT', 'images/CREDIT.png')
    this.load.image('SCORE1', 'images/SCORE-1.png')
    this.load.image('SCORE2', 'images/SCORE-2.png')
    this.load.image('GAME', 'images/GAME-OVER.png')
    this.load.image('OVER', 'images/GAME-OVER2.png')
    this.load.image('TAITO', 'images/TAITO.png')
    this.load.image('bullet', 'images/PlrBullet.png')
    this.load.image('enemy1', 'images/enemy1.png')
    this.load.image('enemy2', 'images/enemy2.png')
    this.load.image('enemy3', 'images/enemy3.png')
        
    this.load.audio('bulletSFX', 'audio/invaderkilled.wav')
    this.load.audio('EDeadSFX', 'audio/shoot.wav')
    this.load.audio('moveSFX1', 'audio/fastinvader1.wav')
    this.load.audio('moveSFX2', 'audio/fastinvader2.wav')
    this.load.audio('moveSFX3', 'audio/fastinvader3.wav')
    this.load.audio('moveSFX4', 'audio/fastinvader4.wav')


    }

    onProgress(value)
    {
        console.log(value)
        this.bar.setPercent(value)
        var per = Math.floor(value*100)
        this.progText.setText(per + "%")
    }
    create()
    {
      this.scene.start("SceneTitle")  
    }
}   