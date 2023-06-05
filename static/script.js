import {Player} from '../static/player.js'
import {box} from './platform.js'
const canvas = document.querySelector('canvas')
export const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

let firstClick = false
let secondClick = false
let jumpCounter = 0
let clickCount = 3
c.fillRect(0,0,canvas.width,canvas.height)


export const player = new Player(
    {
        position:{
            x:Math.floor(Math.random()*100),
            y:50
        },
        velocity:{
            x:0,
            y:0
        }
    }
)
// new lines
export const platform = new box({
    position:{
        x: [
            0,
            800, 
            900, 
        ],
        y: [
            canvas.height - 70, 
            canvas.height - 70, 
            canvas.height - 140/1.2, 
        ]
    },
    height: [
        70, 
        70, 
        70/1.5, 
    ],
    width: [
        600, 
        500, 
        160,
    ],
    quantity: 3,
    
})
// end lines
export const moveKeys = {
    d :{
        press: false
    },
    a :{
        press: false
    },
    w :{
        press: false
    }
}

function animation(){
    window.requestAnimationFrame(animation)
    c.fillStyle = 'green'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.update()


    player.velocity.x = 0
        
    if(moveKeys.w.press != true && moveKeys.d.press){
        player.velocity.x = 5


    }else if(moveKeys.w.press != true && moveKeys.a.press){
        player.velocity.x = -5

    }else if(firstClick && player.jumpCounter == 0 && moveKeys.w.press && moveKeys.a.press != true && moveKeys.d.press != true){
       //double jump first jump
        player.velocity.y = -10
        player.clickCount = player.clickCount+1

        player.jumpCounter = 1
        

    }else if( moveKeys.a.press && moveKeys.w.press){
        //runJump left
        if(moveKeys.a.press && moveKeys.w.press && firstClick && player.jumpCounter == 0){

            //.5jump left

            player.velocity.y = -10
            player.clickCount = player.clickCount+1

            player.jumpCounter = 1
            
        }else if(moveKeys.a.press && moveKeys.w.press && secondClick && player.jumpCounter == 1){
            player.clickCount = player.clickCount+1
            player.velocity.y = -10
            player.jumpCounter = 4
        }
        player.velocity.x = -5

        // screen left
        


        }else if( moveKeys.d.press && moveKeys.w.press){
        
        //runJump right
        // screen right
       
        
        if(moveKeys.d.press && moveKeys.w.press && firstClick && player.jumpCounter == 0){
            //only 2 jump right
            player.velocity.y = -10
            player.clickCount = player.clickCount+1

            player.jumpCounter = 1
        }else if(moveKeys.d.press && moveKeys.w.press && secondClick && player.jumpCounter == 1){
            player.clickCount = player.clickCount+1
            player.velocity.y = -10
            player.jumpCounter = 4
        }
        player.velocity.x = 5

        }else if(secondClick && player.jumpCounter == 1 && moveKeys.w.press && moveKeys.a.press != true && moveKeys.d.press != true){
            player.clickCount = player.clickCount+1
            player.velocity.y = -10
            player.jumpCounter = 4
    }
}

animation()
window.addEventListener('keydown', (event) => {
    console.log(event)
    switch(event.key){
        case 'd' : moveKeys.d.press = true
        break
        
        case 'a' : moveKeys.a.press = true
        break
        
        case 'w' : moveKeys.w.press = true; if(player.clickCount%2 == 0){
            secondClick = true
            firstClick = false
        }else{
            secondClick = false
            firstClick = true
        }
        break
    }
})


window.addEventListener('keyup', (event) => {
    console.log(event)
    switch(event.key){
        case 'd' : moveKeys.d.press = false
        break
        
        case 'a' : moveKeys.a.press = false
        break

        case 'w' : moveKeys.w.press = false
        break
    }
})

//end