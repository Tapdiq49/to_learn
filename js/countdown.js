let end = new Date('03/21/2023 10:1 AM');
    
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let _moon = _day * 31;
let timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'O gün bu gündür!';

        return;
    }
    let moon = Math.floor(distance / _moon);
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);


    document.getElementById('moon').innerHTML = '(ümumilikdə  ' + moon + 'ay)';
    document.getElementById('countdown').innerHTML = days + 'gün ';
    document.getElementById('countdown').innerHTML = days + 'gün ';
    document.getElementById('countdown').innerHTML += hours + 'saat ';
    document.getElementById('countdown').innerHTML += minutes + 'dəqiqə ';
    document.getElementById('countdown').innerHTML += seconds + 'saniyə';

}

timer = setInterval(showRemaining, 1000);