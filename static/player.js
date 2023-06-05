import {c} from '../static/script.js'
import { platform } from '../static/script.js'
import { moveKeys } from '../static/script.js'
export class Player{
    constructor({
        position, velocity
    }){
        this.position = position
        this.width = 70
        this.height = 95
        this.gravity = 0.5
        this.velocity = velocity
        // new lines
        this.clickCount = 3
        this.jumpCounter = 0
        // end
    }

    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if((this.position.y + this.height + this.velocity.y) >= 576){
            this.velocity.y = 0
            this.jumpCounter = 0
            this.clickCount = 3
            
        }else{
            this.velocity.y += this.gravity
        }
        // new lines
        //stop around the platforms need fix
        for(let i = 0; i < platform.quantity; i++){

            // Stop Right Walk
            if((platform.position.x[i] <= ((this.position.x + this.width) + 5)) && 
            ((platform.position.x[i] + platform.width[i]) >= this.position.x) &&
            (platform.position.y[i] <= this.position.y + this.height) && 
            ((platform.position.y[i] + platform.height[i] + 5) >= (this.position.y + this.height))){
                // console.log('Test-d-beta')
                moveKeys.d.press = false
            }
            if(this.position.x + this.width + 5 >= platform.position.x[i] &&
                this.position.x < platform.position.x[i] + platform.width[i] &&
                this.position.y >= platform.position.y[i] &&
                this.position.y < platform.position.y[i] + platform.height[i]){
                    // console.log('Test-d-alfa')
                    moveKeys.d.press = false
            }
            if(this.position.x + this.width + 5 >= platform.position.x[i] &&
                this.position.x < platform.position.x[i] + platform.width[i] &&
                this.position.y < platform.position.x[i] &&
                this.position.y + this.height - 10 > platform.position.y[i] + platform.height[i] &&
                this.position.y < platform.position.y[i] + platform.height[i]){
                    console.log('Test-d-gama')
                    moveKeys.d.press = false
            }
            // Stop Right Walk finall

            // Stop left Walk
            if((this.position.x - 3 <= (platform.position.x[i]) + platform.width[i]) &&
            (this.position.x > platform.position.x[i]) &&
            (platform.position.y[i] <= this.position.y + this.height) && 
            ((platform.position.y[i] + platform.height[i] + 5) >= (this.position.y + this.height))){
                console.log("Test-a")
                moveKeys.a.press = false
            }
            if(this.position.x - 5 <= platform.position.x[i] + platform.width[i] &&
                this.position.x + this.width > platform.position.x[i] + platform.width[i] &&
                this.position.y >= platform.position.y[i] &&
                this.position.y < platform.position.y[i] + platform.height[i]){
                    // console.log('Test-d-alfa')
                    moveKeys.a.press = false
            }
            if(this.position.x - 5 <= platform.position.x[i] + platform.width[i] &&
                this.position.x + this.width > platform.position.x[i] &&
                this.position.y < platform.position.x[i] &&
                this.position.y + this.height - 10 > platform.position.y[i] + platform.height[i] &&
                this.position.y < platform.position.y[i] + platform.height[i]){
                    console.log('Test-a-gama')
                    moveKeys.a.press = false
            }
            // Stop Left Walk finall

            // Stop Jump
            if(((this.position.x + this.width) >= platform.position.x[i]) &&
            (this.position.x <= (platform.position.x[i] + platform.width[i])) &&
            (this.position.y > platform.position.y[i]) &&
            this.position.y <= (platform.position.y[i] + platform.height[i])){
                console.log("Test-w")
                this.velocity.y = 5
                moveKeys.w.press = false
            }
            if(this.position.y <= 0){
                moveKeys.w.press = false
                this.velocity.y = 5
            }

            // end new lines
        }
    }
}