const currentTime = document.getElementById('current-time');


// Create currentTime and Display
function showTime(){
    const currentDateTime = new Date();

    let hours = currentDateTime.getHours();
    let minutes = currentDateTime.getMinutes();
    let seconds = currentDateTime.getSeconds();

    let zone = (hours >= 12 ) ?  "PM" : "AM";
    if(hours > 12) hours %= 12;

    currentTime.innerHTML = `${hours}:${minutes}:${seconds} ${zone}`; 
}

setInterval(showTime, 1000);


// Setting up the Alarm
const setAlarm = document.getElementsByClassName('set-alarm');
const rmvBtn = document.getElementById('rmv-alarm');
const alarmText = document.getElementsByClassName('alarm-data');
setAlarm.addEventListener("click", function(){
    alarmText.innerHTML = `${hours}:${minutes}:${seconds} ${zone}`
    // rmvBtn.innerHTML = "button clicked";
})