const numBut = Array.from(document.querySelectorAll(".oneToNine, .zeroNom "))
const opBut = Array.from(rightOperator.querySelectorAll(".zeroNume"))
const opButFilter = opBut.filter(but =>{return but.getAttribute("data-value") !== "="})

const result = document.querySelector(`.zeroNume[data-value ="="]`)

const display = document.querySelector(".display-style")

const clear = document.querySelectorAll(".delete-clear")[1]
clear.addEventListener("click", backToNormal)


for(let i = 0; i < 1; i++){
        let par = document.createElement("h4")
        par.textContent ="Percobaan"
        par.setAttribute("id", "parBig")
        display.appendChild(par)
}

    
    

const numDis = document.querySelector("#parBig")


console.log(numBut)
console.log(opBut)
let firstNum = ""
let secondNum = ""
let operatorValue = ""
let res = null
let res2 = null

opButFilter.forEach(but =>{
    but.addEventListener("click", ()=>{
        operatorValue = but.getAttribute("data-value")
        numDis.textContent += ` ${operatorValue}`
        console.log(operatorValue)
    })
})

numBut.forEach((but) => {
    
    but.addEventListener("click", ()=> {
        let nom = but.getAttribute("data-value") 
        if(!operatorValue || !res){
            content1 = firstNum += nom
            res = parseFloat(content1) 
            numDis.textContent = content1
            console.log(content1)
        }
        if(operatorValue && res){
            content2 = secondNum += nom
            res2 = parseFloat(content2) 
            numDis.textContent = content2
            console.log(content2)
        }
        // if(!operatorValue || !res){
        //     res = parseFloat(firstNum += nom) 
        //     numDis.textContent = res
        //     console.log(res)
        // }
        // if(operatorValue && res){
        //     res2 = parseFloat(secondNum += nom) 
        //     numDis.textContent = res2
        //     console.log(res2)
        // }
        
        


    })      
})

function backToNormal(){
    firstNum = ""
    secondNum = ""
    operatorValue = ""
    res = null
    numDis.textContent = "Reset"
    alert("calculator Reset")
}


result.addEventListener("click", ()=>{
    if(!res2){ // if there are no second number
        numDis.textContent = res
        firstNum = res
        secondNum = ""
        operatorValue = null
    }else{
        final = operate(res, res2, operatorValue)
        numDis.textContent = final
        console.log(final)
        firstNum = final
        secondNum = ""
        res = final
        res2 = null
        operatorValue = null
    }
    
})

function operate(a, b, c){
    // if(!b) return
    switch(c){
        case("+"):{
            return a + b
        }
        case("-"):{
            return a - b
        }
        case("/"):{
            return a / b
        }
        case("X"):{
            return a * b
        }
        default: alert("Error")      
    }
}

