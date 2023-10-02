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
    makeAButton.classList.add("buttonNomor")
    makeAButton.textContent = Number(a)
    kediv[0].appendChild(makeAButton)
}

let opTC = ["+", "-", "x", "/", "="]

for(let i = 0; i < opTC.length; i++){
    let makeAButton = document.createElement("button")
    makeAButton.classList.add("buttonNomor")
    makeAButton.textContent = opTC[i]
    kediv[1].appendChild(makeAButton) 
}




let currentNom = " ";
console.log(currentNom)
let nextNom = new Array()
console.log(nextNom)
let firstNom ;
let secondNom ;
let firstRes;
let secondRes ="";

const child = document.querySelector(".child")
const child1 = document.querySelector("#child1")
const child2 = document.querySelector("#child2")
const child3 = document.querySelector("#child3")

const butNom = Array.from(kediv[0].querySelectorAll(".buttonNomor"))
const opNom = Array.from(kediv[1].querySelectorAll(".buttonNomor"))


butNom.forEach((but)=>{
    but.addEventListener("click", ()=>{
        // let butText = but.textContent
        // child1.textContent += butText
        // console.log(child.textContent)
        // firstNom = parseInt(child1.textContent)
        if(!display){
            child1.textContent += but.textContent
            firstRes = child1.textContent
        }
        
    })
})

opNom.forEach((but)=>{
    but.addEventListener("click", ()=>{
        child1.textContent += ` ${but.textContent} `        
    })
})

// butNom.forEach((but) =>{
//     but.addEventListener("click", ()=>{
//         currentNom.push(Number(but.textContent))
//         firstNom = parseInt(currentNom.join(""))
//         console.log(parseInt(currentNom.join("")))
//         child.textContent = firstNom
//     })
// })


const satu = document.querySelector("#satu")

// satu.addEventListener("click", ()=>{
//     let text = child1.textContent
//     let pisah = text.split(" ")
//     if(pisah.includes("x")){
//         pisah.splice(1, 1)
//         let hasil = pisah.reduce((a,b) => a * b  )
//         console.log(pisah.reduce((a,b) => a * b  ))
//         child2.textContent = hasil
//     }
//     else if(pisah.includes("+")){
//         pisah.splice(1, 1)
//         let hasil = pisah.reduce((a,b) => (+a) + (+b)  )
//         console.log(pisah.reduce((a,b) => (+a) + (+b)  ))
//         child2.textContent = hasil
//     }
//     else if(pisah.includes("-")){
//         pisah.splice(1, 1)
//         let hasil = pisah.reduce((a,b) => a - b  )
//         console.log(pisah.reduce((a,b) => a - b  ))
//         child2.textContent = hasil
//     }    
//     else if(pisah.includes("/")){
//         pisah.splice(1, 1)
//         let hasil = pisah.reduce((a,b) => a / b  )
//         console.log(pisah.reduce((a,b) => a / b  ))
//         child2.textContent = hasil
//     }
//     console.log(pisah)
//     child3.textContent = child1.textContent
//     child1.textContent = ""
    
// })

let display = 0
let nextNum = 0
let operator = ""
satu.addEventListener("click", ()=>{
    switch(operator){
        case("concat"):{
            let end = display + nextNum
            console.log(end)
            display = end
            nextNum = 0
            break;
        }
        case("reduction"):{
            let end = display - nextNum
            console.log(end)
            display = end
            nextNum = 0
            break;
        }
        case("multiply"):{
            let end = display * nextNum
            console.log(end)
            display = end
            nextNum = 0
            break;
        }
        case("divide"):{
            let end = display / nextNum
            console.log(end)
            display = end
            nextNum = 0
            break;
        }
        default: console.log("Error!")
    }
    
})

let concat = opNom[0]
let reduction = opNom[1]
let multiply = opNom[2]
let divide = opNom[3]

concat.addEventListener("click", ()=>{
    operator = "concat"
    display = parseInt(firstRes)
    
    let nextButNom = Array.from(kediv[0].querySelectorAll(".buttonNomor"))
    nextButNom.forEach(but =>{
        but.addEventListener("click", ()=>{
            secondRes += but.textContent
            child1.textContent += but.textContent
            nextNum = parseInt(secondRes)  
            
        })
    })
})

reduction.addEventListener("click", ()=>{
    operator = "reduction"
    display = parseInt(firstRes)
    
    let nextButNom = Array.from(kediv[0].querySelectorAll(".buttonNomor"))
    nextButNom.forEach(but =>{
        but.addEventListener("click", ()=>{
            secondRes += but.textContent
            child1.textContent += but.textContent
            nextNum = parseInt(secondRes)  
            
        })
    })
})

multiply.addEventListener("click", ()=>{
    operator = "multiply"
    display = parseInt(firstRes)
    
    let nextButNom = Array.from(kediv[0].querySelectorAll(".buttonNomor"))
    nextButNom.forEach(but =>{
        but.addEventListener("click", ()=>{
            secondRes += but.textContent
            child1.textContent += but.textContent
            nextNum = parseInt(secondRes)  
            
        })
    })
})

divide.addEventListener("click", ()=>{
    operator = "divide"
    display = parseInt(firstRes)
    
    let nextButNom = Array.from(kediv[0].querySelectorAll(".buttonNomor"))
    nextButNom.forEach(but =>{
        but.addEventListener("click", ()=>{
            secondRes += but.textContent
            child1.textContent += but.textContent
            nextNum = parseInt(secondRes)  
            
        })
    })
})