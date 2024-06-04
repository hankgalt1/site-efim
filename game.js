var BootScene = new Phaser.Class({
    Extends: Phaser.Scene,
     initialize:
 
    function BootScene ()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });
    },
    random:function(){
        const random = Math.floor(Math.random() * 3);
        return random

    },
    Axe:function(){
        this.HpAxe --
        this.TextScoreAxe.setText(`HP TOPORA:${this.HpAxe}/10`)
        this.activeIndexAxe = this.index
    },
    Gold:function(){
        this.ScoreGold ++
        this.TextScoregolde.setText(`Золото: ${this.ScoreGold}`)
        this.activeIndexGold = this.index


    },
    Black:function(){
        this.ScoreBlack ++
        this.TextScoreblack.setText(`Дерево: ${this.ScoreBlack}`)
        this.activeIndexBlack = this.index

    },

    init: function(){
        this.playerSpeed = 10;
        this.enemyMaxY = 280;
        this.enemyMinY = 80;
        
       
        
    },
 
    preload: function ()
    {
        // здесь будет загрузка ресурсов
        this.load.image('gold','gold.jpg');
        this.load.image('green','red.jpg');
        this.load.image('black','black.jpg');
        this.load.spritesheet('dude', 'ded.png', {frameWidth: 500, frameHeight: 500});
        this.load.image('bg','bg.png');
       

        
        this.block = []
        this.index = 0
        this.HpAxe = 10
        this.ScoreGold = 0
        this.ScoreBlack = 0

    },
 
    create: function ()
    {
        this.add.image(500,500,'bg').setScale(2)
        this.player = this.add.sprite(410, 350, 'dude');
 
 
this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 0 }),
    frameRate: 10,
    repeat: 0
});
        


        console.log(this.block)

        this.TextScore = this.add.text(250,700,`ВЫСОТА:${1000-this.index}`,{
            font: '50px'

        });

        this.TextScoreAxe = this.add.text(150,900,`HP TOPORA:${this.HpAxe}`,{
            font: '50px'

        });

        this.TextScoregolde = this.add.text(150,800,`Золото:${this.ScoreGold}`,{
            font: '50px'

        });
        this.TextScoreblack = this.add.text(150,600,`Дерево:${this.ScoreBlack}`,{
            font: '50px'

        });

        

        
        
        

        

        

    },

    update: function(){
        if (this.HpAxe == 0){
            
        };
        
        if (this.block.length ==0){
            const months = ["green", "black", "gold"];
            this.block.push(this.add.sprite(750,1125,`${months[this.random()]}`))//0
            this.block.push(this.add.sprite(750,1375,`${months[this.random()]}`))//1
            this.block.push(this.add.sprite(750,1625,`${months[this.random()]}`))//2
            this.block.push(this.add.sprite(750,1875,`${months[this.random()]}`))//3
        };
        
        if (this.block[`${this.block.length-1}`].y >= 875){
            this.block[`${this.block.length-4}`].y-=this.playerSpeed
            this.block[`${this.block.length-3}`].y-=this.playerSpeed
            this.block[`${this.block.length-2}`].y-=this.playerSpeed
            this.block[`${this.block.length-1}`].y-=this.playerSpeed
            

        };
        if (this.block.length > 5){
            this.block[`${this.block.length-5}`].y-=this.playerSpeed
            this.block[`${this.block.length-6}`].y-=this.playerSpeed
            this.block[`${this.block.length-7}`].y-=this.playerSpeed
            this.block[`${this.block.length-8   }`].y-=this.playerSpeed
        };

        if (this.block[`${this.block.length-1}`].y == 875){
            const months = ["green", "black", "gold"];
            this.block.push(this.add.sprite(750,1125,`${months[this.random()]}`))//0
            this.block.push(this.add.sprite(750,1375,`${months[this.random()]}`))//1
            this.block.push(this.add.sprite(750,1625,`${months[this.random()]}`))//2
            this.block.push(this.add.sprite(750,1875,`${months[this.random()]}`))//3

        };
        if (this.block[`${this.block.length-1}`].y <= 875){
            this.block[`${this.block.length-4}`].y-=this.playerSpeed
            this.block[`${this.block.length-3}`].y-=this.playerSpeed
            this.block[`${this.block.length-2}`].y-=this.playerSpeed
            this.block[`${this.block.length-1}`].y-=this.playerSpeed
            
        };

        



        if (this.block[`${this.index}`].y < 500){
            this.TextScore.setText(`ВЫСОТА:${1000-this.index}`)
            this.index++;
            
            
        };

        
            

        
        
        if (this.input.activePointer.isDown) {
            this.player.anims.play('left',true);

            
            //console.log(this.block[0].texture.key);
           



            //if (this.block[`${this.index}`].y <= 660 && this.block[`${this.index}`].y >=500){
                //console.log(this.block[`${this.index}`].texture.key)
                //if (this.block[`${this.index}`].texture.key =='green'){if(this.activeIndexAxe == this.index){}else{this.Axe()};
                
                //if (this.block[`${this.index}`].texture.key =='gold'){if(this.activeIndexGold == this.index){}else{this.Gold()}
            //};
                //}

           if (this.block.length != 0){
            if (this.block[`${this.index}`].y <= 660 && this.block[`${this.index}`].y >=500){
                if (this.block[`${this.index}`].texture.key =='green'){
                    if(this.activeIndexAxe == this.index){}else{this.Axe()}};}};



            if (this.block.length != 0){
            if (this.block[`${this.index}`].y <= 660 && this.block[`${this.index}`].y >=500){
                if (this.block[`${this.index}`].texture.key =='gold'){
                    if(this.activeIndexGold == this.index){}else{this.Gold()}};}};


            if (this.block.length != 0){
            if (this.block[`${this.index}`].y <= 660 && this.block[`${this.index}`].y >=500){
                if (this.block[`${this.index}`].texture.key =='black'){
                    if(this.activeIndexBlack == this.index){}else{this.Black()}};}};
            

            //console.log(this.block[1].texture.key);
            //console.log(this.block[1].y);

            //console.log(this.block[2].texture.key);
            //console.log(this.block[2].y);

            //console.log(this.block[3].texture.key);
            //console.log(this.block[3].y);

        
            


 
            // игрок перемещается вперед
         
        }
        //this.gold.y -= this.playerSpeed
        //console.log(`${this.gold.y}`)
        //if (this.gold.y <= 500){
            
            //this.red = this.add.sprite(150,this.gold.y+200,'red')

        //};
        

    }
});
 
var WorldScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
 
    function WorldScene ()
    {
        Phaser.Scene.call(this, { key: 'WorldScene' });
    },
    preload: function ()
    {
 
    },
    create: function ()
    {
        // здесь мы создадим сцену мира
    }
});
 
var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 1024,
    height: 1000,
    zoom: 2,
    pixelArt: true,
    scene:[BootScene,
        WorldScene]
};
var game = new Phaser.Game(config);

