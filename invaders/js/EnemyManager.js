class EnemyManager extends Phaser.GameObjects.Container {
    constructor(config)
    {
        super(config.scene)
        this.scene = config.scene

        



        


        this.scene.add.existing(this)
    }
    
}