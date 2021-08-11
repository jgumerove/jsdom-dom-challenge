const dom = {
    counter: document.getElementById("counter"),
    plus: document.getElementById("plus"),
    minus: document.getElementById("minus"),
    pause: document.getElementById("pause"),
    heart: document.getElementById("heart")

}

const state = {
    paused: false
    //the above starts out as false -- note this is done to solve the pause button issue
}

function count(num){
    if(!state.paused){
    dom.counter.innerText = parseInt(dom.counter.innerText) + num
    }
}

function togglePause(){
    state.paused = !state.paused
    //changes whatever the state is 
    document.querySelectorAll("button").forEach(function(button){
        if (button.id !== "pause") {
          button.disabled = !button.disabled   
        }
    })
    if (pause.innerText === "pause") {
        pause.innerText = "resume"} else {
            pause.innerText = "pause"
        }
}


setInterval(() => count(1), 1000)
dom.plus.addEventListener("click", () => count(1))
dom.minus.addEventListener("click", () => count(-1))
dom.pause.addEventListener("click", togglePause)

//function subtract(){
 //dom.counter.innerText = parseInt(dom.counter.innerText) - 1
//};
//note how we could get it to pause with an if statement but could not get it to restart
//notice now with the way we cahnged the count function to add an argument we no longer need a separate function for subtract on click
//notice how we count(num) is passed in as one when we used it as an event listenr 
//setInterval(count, 1000) this is the old way of doing it -- note how we added a one and the use of arrow notation 
//dom.plus.addEventListener("click", count); not using anymore in order to make more DRY
//notice how we are re-using the counter button as well to fullfil this task 
//dom.minus.addEventListener("click", subtract); not using anymore -- making more DRY
//note how we did not have to go through the whole trouble of typing out function with e since we already defined a function and already defined an element
//note how we did similar thing for subtract as we did for count
//note how we do not have to chain anything onto setInterval
//const counter = document.getElementById("counter") note: this is saved in the dom object above now 
//counter.innerText = parseInt(counter.innerText) + 1

