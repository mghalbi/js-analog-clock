const hr = document.getElementById('hr')
const mm = document.getElementById('mm')
const sc = document.getElementById('sc')

const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

setInterval(()=> {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    sc.style.transform = `rotateZ(${seconds*6}deg)`
    mm.style.transform = `rotateZ(${minutes*6 + seconds/10}deg)`
    hr.style.transform = `rotateZ(${hours*30 + minutes/2}deg)`

    hour.innerHTML = hours.toString().padStart(2, "0");
    minute.innerHTML = minutes.toString().padStart(2, "0");
    second.innerHTML = seconds.toString().padStart(2, "0");

}, 100)