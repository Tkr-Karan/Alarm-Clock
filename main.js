var currentTime = document.getElementById('date-time');


// Create currentTime and Display
function showTime(){
    const currentDateTime = new Date();

    let hours = currentDateTime.getHours();
    let minutes = currentDateTime.getMinutes();
    let seconds = currentDateTime.getSeconds();

    let zone = (hours >= 12 ) ?  "PM" : "AM";
    if(hours > 12) hours %= 12;
    else if(hours == 00) hours = 12;

    currentTime.innerHTML = `${hours}:${minutes}:${seconds} ${zone}`; 
}
setInterval(showTime, 1000);