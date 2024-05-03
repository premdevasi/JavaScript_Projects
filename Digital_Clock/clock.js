const timer  = document.querySelector('#timer');

function getTime(){
    const now  = new Date()
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds =now.getSeconds();
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let timeStr = `${hours}:${minutes}:${seconds}`
    timer.textContent = timeStr
}

setInterval(getTime, 1000);