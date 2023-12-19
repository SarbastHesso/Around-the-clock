const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const time24 = document.querySelector('#time-24');
const timeText = document.querySelector('.time-text');
const btn = document.querySelector('#btn');

setInterval (() => {

    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();

    hr_rotation = 30 * hr + min / 2;
    min_rotation = 6 * min;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;

    time24.innerHTML = hr + ':' + min;

}, 1000)

btn.addEventListener ('click', (e) => {
    e.preventDefault()
    if (timeText.style.display = 'none'){
        timeText.style.display = 'flex'
        btn.innerHTML = 'Dölj tiden i text'
    } 
} )
