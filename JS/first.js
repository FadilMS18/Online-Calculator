const body = document.querySelector("body")
const parentContainer = document.querySelector("#parent-container") // Div1

const displayContainer = document.querySelector("#display-container") //Child1
const bottomContainer = document.querySelector("#bottom-container") // Child1

const leftOperator = document.querySelector("#left-operator-container") //Child2
const rightOperator = document.querySelector("#operator-container") // Child2
const operator = ["+", "-", "/", "X", "="]

const deleteContainer = document.querySelector("#delete-container") // Child3
const nuumberContainer = document.querySelector("#number-container") //Child3

const one9Num = document.querySelector("#one9Num") // Child4
const zeroNum = document.querySelector("#zeroNum") // Child4


body.style.backgroundColor = "bisque"

let makeADiv = document.createElement("div")
makeADiv.style.cssText = `
    background-color:lightcyan;
    border:black 2px solid;
    flex:1;
    height:71px;
    border-radius:10px;
`
displayContainer.appendChild(makeADiv)

for(let i = 1; i < 3; i++){ // Delete And Clear Button Making
    let div = document.createElement("div")
    div.classList.add("delete-clear")
    if(i <= 1){
        div.textContent = "Delete"
    }else {div.textContent = "Clear" }
    deleteContainer.appendChild(div)
}

for(let i = 9; i > 0; i--){ // 1 - 9 Number Button
    let div = document.createElement("div")
    div.classList.add("oneToNine")
    div.textContent = `${i}`
    one9Num.appendChild(div)
}

for(let i = 0; i < 2; i++){ // Zero and . Button
    let div = document.createElement("div")
    div.classList.add("zeroNume")
    if(i === 0){
        div.textContent = `${i}`
    } else{ div.textContent = "." }
    zeroNum.appendChild(div)
}

for(let i = 0; i < operator.length; i++){
    let div = document.createElement("div")
    div.classList.add("zeroNume")
    div.textContent = operator[i]
    rightOperator.appendChild(div)
}

