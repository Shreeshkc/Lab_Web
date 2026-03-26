const A = ()=>{ 
    console.log("This is function A")
    B()
}

const B = ()=>{
    console.log("This is function B")
    C()
}

const C = ()=>{
    console.log("This is function C")
    
   
}

A()

document.body.style.background = "black"
const body = document.getElementsByClassName(".clash")

