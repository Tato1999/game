import {player, c} from './script.js'
export class box{
    constructor({width = 150, height, position, quantity, imageSrc, brickPosition, brickRealPosition}){
        this.position = position
        this.width = width
        this.height = height
        this.quantity = quantity
        this.image = new Image()
        this.image.src = imageSrc
        this.brickPosition = brickPosition
        this.brickRealPosition
        this.realWidth = 0
        this.realHeight = 40
    }
    draw(){
        c.fillStyle = 'red'
        for(let i = 0 ; i <= this.position.x.length-1; i++){
           c.fillRect(this.position.x[i], this.position.y[i], this.width[i], this.height[i])
           for(let j = 0; j < this.width[i]/50; j++){
               for(let k = 0; k < this.height[i]/40; k++){
                   if((j % 2) == 0 || (k % 2) != 0)   {
                    
                    this.brickRealPosition = this.brickPosition[0]
                    this.realWidth = 32
                    this.realHeight = 60
                       
                   }else{
                       
                    this.brickRealPosition = this.brickPosition[1]
                    this.realWidth = 50
                    this.realHeight = 40
                   }
                }
            }
        }
    }
    update(){
        this.draw()

//stop player on platform

       for(let j = 0; j<this.quantity; j++){
       
             if((player1.position.y + player1.height + player1.velocity.y >= this.position.y[j] && 
            player1.position.y + player1.height <= this.position.y[j]) &&
            (player1.position.x +  + player1.width > this.position.x[j] && 
             player1.position.x < this.position.x[j] + this.width[j])){
    
                 player1.velocity.y = 0
                 player1.jumpCounter = 0
                 player1.clickCount = 3
                 

            }
        }
    }   
}
    