function onclick (){

const button = document.getElementById("Sortear") 
}

function valuesInput (){

    const min = Math.ceil(document.getElementById("input").value)
    const max = Math.floor(document.getElementById("input-two").value)
    const resultInput = document.getElementById("input-three")

    const calc = Math.floor(Math.random() * (max - min + 1)) + min;
    resultInput.value = calc
    
    console.log(calc)
    
}



document.addEventListener("change", valuesInput)
document.addEventListener("click",onclick)
