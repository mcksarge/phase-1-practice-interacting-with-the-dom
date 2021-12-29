//DOM Loaded
document.addEventListener("DOMContentLoaded", () => {console.log("DOM loaded")});


let counter = document.querySelector('#counter');
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let heart = document.querySelector('#heart');
let pause = document.querySelector('#pause');
let submit = document.querySelector('#submit');
let restart = document.querySelector('#restart');
let count = 0;
let numberObj = {}




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
    let timesLiked = counter.innerHTML
    let ul = document.querySelector('.likes');
    

    if (numberObj[count]) {
        const li = document.querySelector(`[data-number="${count}"]`);
        console.log(li)
        numberObj[count] += 1
        li.textContent = `${count} has been liked ${numberObj[count]} times`
    } else {
        let li = document.createElement('li');
        numberObj[count] = 1
        li.dataset.number = count
        li.textContent = `${count} has been liked 1 time`
        ul.appendChild(li)
    }
 
})


//Pauses timer and disables buttons when paused
let counting = 'yes';

pause.addEventListener('click', (e) => {
    if (counting !== 'yes'){
        timer = setInterval(myTimer, 1000)
        pause.innerHTML = "pause"
        counting = 'yes'
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        restart.disabled = true
    } else {
        clearInterval(timer)
        pause.innerHTML = "resume"
        counting = 'no'
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        restart.disabled = false
    }
});


//Submit comments
submit.addEventListener('click', (e) => {
    e.preventDefault();

    let comment = document.getElementById('comment-input').value;
    let ul = document.querySelector('.likes');
    let li = document.createElement('li');
    let text = document.createTextNode(comment)

    li.appendChild(text)
    ul.appendChild(li)
});


//Restart counter
restart.disabled = true;

restart.addEventListener('click', (e) => {
    counter.innerHTML = 0;
    count = 0;

    if (counting !== 'yes'){
        timer = setInterval(myTimer, 1000);
        pause.innerHTML = "pause";
        counting = 'yes';
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        restart.disabled = true;
    } else {
        clearInterval(timer);
        pause.innerHTML = "resume";
        counting = 'no';
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        restart.disabled = false;
    }
});


