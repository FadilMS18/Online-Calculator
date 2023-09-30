console.log("Hello, World!")

const parentContainer = document.querySelector("#parent-container")
// const numberContainer = document.querySelector("#number-container")
// const operatorContainer = document.querySelector("#operator-container")



for(let i = 0; i < 2 ;i++){
    let makeADiv = document.createElement("div")
    makeADiv.setAttribute("class", "child-container")
    parentContainer.appendChild(makeADiv)
}

let kediv = Array.from(document.querySelectorAll(".child-container"))
console.log(kediv)
for(let a = 0; a < 10; a++){
    let makeAButton = document.createElement("button")
    makeAButton.textContent = Number(a)
    kediv[0].appendChild(makeAButton)
}

let opTC = ["+", "-", "x", "/"]

for(let i = 0; i < 4; i++){
    let makeAButton = document.createElement("button")
    makeAButton.textContent = opTC[i]
    kediv[1].appendChild(makeAButton) 
}
