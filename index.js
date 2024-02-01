








function rollDice(){
const roll =document.getElementById("roll")
const diceResult =document.getElementById("diceResult")
const diceImages =document.getElementById("diceImages")

const values=[]
const images=[]


    const diceNumber =document.getElementById("diceNumber").value
    for(let i=0;i<diceNumber;i++){
        
        let value = Math.floor(Math.random()*6)+1;
        values.push(value)
        images.push(`<img src=dice_images/${value}.png>`)
        

    }
    diceResult.textContent=`dice: ${values.join(" , ")}`
    diceImages.innerHTML=images.join(" ")

    console.log(values)

}


