const numBut = Array.from(document.querySelectorAll(".oneToNine, .zeroNom "))

const opBut = Array.from(rightOperator.querySelectorAll(".zeroNume"))
const opButFilter = opBut.filter(but =>{return but.getAttribute("data-value") !== "="})

const result = document.querySelector(`.zeroNume[data-value ="="]`)

const display = document.querySelector(".display-style")

const clear = document.querySelectorAll(".delete-clear")[1]
clear.addEventListener("click", backToNormal)

const deleteButton = document.querySelector(".delete-clear")
// deleteButton.addEventListener("click", ()=>{
//     return content10 = content10.split("").slice(0, -1).join("")
// })


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
let content1 =""
let content2 =""
let cont1Delete;


opButFilter.forEach(but =>{
    but.addEventListener("click", ()=>{
        operatorValue = but.getAttribute("data-value")
        numDis.textContent += ` ${operatorValue}`
        console.log(operatorValue)
    })
})


deleteButton.addEventListener("click", ()=>{
    if(!operatorValue || !res){
        firstNum = firstNum.slice(0, -1)
        content1 = content1.slice(0, -1) 
        
        res = parseFloat(content1)
        numDis.textContent = content1
        console.log(content1)
    }
    if(operatorValue && res){
        secondNum = secondNum.slice(0, -1)
        content2 = content2.slice(0,-1)
        res2 = parseFloat(content2)
        numDis.textContent = content2
        console.log(content2)
    }
})


function deleteCont1(){
    cont1Delete = true
}


numBut.forEach((but) => {
    
    
    but.addEventListener("click", ()=> {
        let nom = but.getAttribute("data-value") 

        if(operatorValue && nom === ".") return
        if(!operatorValue || !res){
            if(content1.includes(".") && nom === ".") return
            content1 = firstNum += nom 
            
            res = parseFloat(content1)
            numDis.textContent = content1
            console.log(content1)
        }
        if(operatorValue && res){
            if(content2.includes(".") && nom === ".") return
            content2 = secondNum += nom
            res2 = parseFloat(content2)
            numDis.textContent = content2
            console.log(content2)
        }
        
    })      
})

function backToNormal(){ // if We use Clear button
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
        final = Number(operate(res, res2, operatorValue).toFixed(3))
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
    if(!b) return
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

