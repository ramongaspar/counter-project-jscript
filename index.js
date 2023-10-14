

let counter_value = 0
let counter = document.getElementById("counter")
let save = document.getElementById("save")

function incrementButton(){
    counter_value += 1
    counter.textContent = counter_value
}

function resetCounter(){
    counter_value = 0
    counter.textContent = counter_value
}


function saveValue(){
    save.textContent += counter_value + " - "
    resetCounter()
}




