const randomNumber = Math.floor((Math.random() * 10)) + 1;
const submit = document.getElementById("submit")
const restart = document.getElementById("restart")
const inputVal = document.getElementById("input")
const result = document.getElementById("result")
console.log(randomNumber)
let missCount = 0
submit.addEventListener("click", ()=>{
        guessedNumber = inputVal.value
        if(guessedNumber == randomNumber){
            result.textContent = "Hey you guessed the number. It took you " + missCount + " guesses"
        }else if(guessedNumber < randomNumber){
            missCount++
            result.textContent = "too small"
        }else if(guessedNumber > randomNumber ){
            missCount++
            result.textContent = "too big"
        }
        else{result.textContent = "try again"}
})

restart.addEventListener("click", ()=>{location.reload()})