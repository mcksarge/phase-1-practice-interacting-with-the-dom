//DOM Loaded
document.addEventListener("DOMContentLoaded", () => {console.log("DOM loaded")});


let counter = document.querySelector('#counter');
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let heart = document.querySelector('#heart');
let pause = document.querySelector('#pause');
let count = 0;


//Timer starts once DOM is loaded
let timer = setInterval(myTimer, 1000)

function myTimer () {
        count++;
        counter.innerHTML = count;
}

//Increment and decrement the counter by clicking plus or minus
minus.addEventListener('click', () => counter.innerHTML = count--);
plus.addEventListener('click', () => counter.innerHTML = count++);

//Like a number on the counter **WORK ON THIS ONE**

heart.addEventListener('click', () => {
    let timesLiked = 0
    let number = {}
    let ul = document.querySelector('.likes');
    let li = document.createElement('li');

    

    timesLiked++
    li.innerHTML = count + " has been liked <span>" + (timesLiked++) + "</span> times!";
    ul.appendChild(li)
})


//Pauses timer
let counting = 'yes';

pause.addEventListener('click', (e) => {
    if (counting !== 'yes'){
        timer = setInterval(myTimer, 1000)
        pause.innerHTML = "pause"
        counting = 'yes'
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
    } else {
        clearInterval(timer)
        pause.innerHTML = "resume"
        counting = 'no'
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
    }
})