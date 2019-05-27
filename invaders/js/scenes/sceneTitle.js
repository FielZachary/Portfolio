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

        this.alignGrid = new AlignGrid({rows: 11, cols:11, scene:this})
        this.alignGrid.showNumbers()

        var title = this.add.image(0, 0, "SIT")
        var title2 = this.add.image(0, 0, "SIT2")
        Align.scaleToGameW(title, .8)
        Align.scaleToGameW(title2, .8)
        this.alignGrid.placeAtIndex(38, title)
        this.alignGrid.placeAtIndex(60, title2)


        var btnStart = new FlatButton({scene:this, key:"button1", text:"Start!", x:240, y:100, event:"start_game"}) 
        this.alignGrid.placeAtIndex(93, btnStart)

        this.text1 = this.add.text(12, 0, 'Instructions:')
        this.text1.y = 541
        this.text2 = this.add.text(0, 0, 'The objective is shoot all invaders')
        this.text3 = this.add.text(this.text1.x, 575, 'before the reach to the bottom.')
        this.text4 = this.add.text(this.text1.x, 592, 'Controls:')
        this.text5 = this.add.text(this.text1.x, 609, 'A - To go Right, D - To go left')
        this.text6 = this.add.text(this.text1.x, 626, 'Space - To shoot')
        //this.alignGrid.placeAtIndex(110, this.text2)
        this.text2.y = 560
        this.text2.x = this.text1.x

        

        emitter.on("start_game", this.startGame, this)

        //this.scene.start('SceneMain')
    }

    startGame()
    {
        this.scene.start("SceneMain")
    }

    //


    update() {
     
    }
}