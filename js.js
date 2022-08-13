function clock() {
    let current = new Date();
    let hrs = current.getHours();
    let min = current.getMinutes();
    let sec = current.getSeconds();

    let seccion = document.getElementById('seccion');


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

    if (hrs >= 12) {
        seccion.innerHTML = 'PM'
    } else {
        seccion.innerHTML = 'AM'
    };

    if (hrs > 12) {
        hrs = hrs - 12
    }
}

setInterval(clock, 10);