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

        this.add.image(0, 0, 'background').setOrigin(0.5, 0,5)
        this.alignGrid = new AlignGrid({rows: 11, cols:11, scene:this})
        //this.alignGrid.showNumbers()

        var title = this.add.image(0, 0, "title")
        Align.scaleToGameW(title, .8)
        this.alignGrid.placeAtIndex(27, title)

        var ship = this.add.image(0, 0, 'ship')
        this.alignGrid.placeAtIndex(60, ship)
        Align.scaleToGameW(ship, .125)
        ship.angle = 270
        this.text1 = this.add.text(0, 0, 'Instructions:')
        this.alignGrid.placeAtIndex(99, this.text1)
        this.text2 = this.add.text(0, 0, 'The objective of the game is to defeat the enemy ship')
        //this.alignGrid.placeAtIndex(110, this.text2)
        this.text2.y = 560
        console.log('text 1 y is ' + this.text1.y)
        console.log('text 2 y is ' + this.text2.y)
        //Align.scaleToGameW(this.text1, .5)

        var btnStart = new FlatButton({scene:this, key:"button1", text:"Start!", x:240, y:100, event:"start_game"}) 
        this.alignGrid.placeAtIndex(93, btnStart)

        emitter.on("start_game", this.startGame, this)
        //this.scene.start("SceneMain")
        var sb = new SoundButtons({ scene: this })
    }

    startGame()
    {
        this.scene.start("SceneMain")
    }

    //


    update() {
     
    }
}