const randomNumber = Math.floor((Math.random() * 10)) + 1;
const submit = document.getElementById("submit")
const restart = document.getElementById("restart")
const inputVal = document.getElementById("input")
const result = document.getElementById("result")

submit.addEventListener("click", ()=>{
        guessedNumber = inputVal.value
        if(guessedNumber == randomNumber){
            result.textContent = "hey you guessed the number"
        }else{result.textContent = "try again"}
})

restart.addEventListener("click", ()=>{location.reload()})