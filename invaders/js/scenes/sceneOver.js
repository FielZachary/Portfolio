class SceneOver extends Phaser.Scene {
    constructor() {
        super('SceneOver');
    }
    preload()
    {
        // this.load.image("button1", "images/ui/buttons/2/1.png")
    	// this.load.image("title", "images/title.png")
    }
    create() {

        /*emitter = new Phaser.Events.EventEmitter();
        controller = new Controller()*/

        this.alignGrid = new AlignGrid({rows: 11, cols:11, scene:this})
        //this.alignGrid.showNumbers()

        this.title = this.add.image(29, game.config.width/2, "GAME")
        this.title2 = this.add.image(game.config.width/2, -200, "OVER")
        Align.scaleToGameW(this.title, .5)
        this.alignGrid.placeAtIndex(5, this.title)
        this.moveT()
        // console.log(title.y)
        // console.log(title.x)

        // var btnStart = new FlatButton({scene:this, key:"button1", text:"Play Again", x:240, y:100, event:"start_game"}) 
        // this.alignGrid.placeAtIndex(93, btnStart)

        emitter.on("start_game", this.startGame, this)
    }

    startGame()
    {
        this.scene.start("SceneMain")
    }
    moveT2()
    {
        this.tweens.add({targets: this.title2,duration: 700,y:210});
    }
    moveT()
    {
        this.tweens.add({targets: this.title,duration: 700,y:110});
        this.time.addEvent({ delay: 2000, callback: this.BDefine, callbackScope: this, loop: false })
        this.time.addEvent({ delay: 1000, callback: this.moveT2, callbackScope: this, loop:false})
    }
    BDefine()
    {
        var btnStart = new FlatButton({scene:this, key:"button1", text:"Retry", x:240, y:100, event:"start_game"}) 
        this.alignGrid.placeAtIndex(93, btnStart)
    }
    gameOverText()
    {

    }

    //


    update() {
     
    }
}