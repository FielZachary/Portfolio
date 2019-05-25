class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload()
    {
        this.load.image("button1", "images/ui/buttons/2/1.png")
    	this.load.image("title", "images/title.png")
    }
    create() {

        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller()

        var mediaManager = new MediaManager({scene:this})
        mediaManager.setBackgroundMusic("backgroundMusic")

        this.alignGrid = new AlignGrid({rows: 11, cols:11, scene:this})
        this.backImage = this.add.image(game.config.width/2, game.config.height/2, "titleBack")
        //this.alignGrid.showNumbers()

        var title = this.add.image(0, 0, "title")
        Align.scaleToGameW(title, .8)
        this.alignGrid.placeAtIndex(38, title)

        var btnStart = new FlatButton({scene:this, key:"button1", text:"Start!", x:240, y:100, event:"start_game"}) 
        this.alignGrid.placeAtIndex(93, btnStart)

        emitter.on("start_game", this.startGame, this)

        this.text1 = this.add.text(0, 0, 'To Shoot - Hold And Release Left Click')
        this.alignGrid.placeAtIndex(99, this.text1)
        this.text2 = this.add.text(0, 0, 'To Move - Left Click where you want to go to')
        this.alignGrid.placeAtIndex(110, this.text2)
    }

    startGame()
    {
        this.scene.start("SceneMain")
    }

    //


    update() {
     
    }
}