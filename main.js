// All variables
const activeAlarm = document.getElementsByClassName('alarm-active');
const alarmText = document.getElementById('alarm-data');



// function which get time
const getTime = ({hours, minutes, seconds, zone}) => {
    if(minutes/10 < 1) {
        minutes = "0" + minutes;
    }
    if(seconds / 10 < 1){
        seconds = "0" + seconds;
    }

    return `${hours}:${minutes}:${seconds} ${zone}`;
}

// display time
const renderTime = () => {
    var currentTime = document.getElementById('current-time');

    // using Date class mto get the dta of date
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    let zone = (hours >= 12) ? "PM" : "AM";
    if(hours > 12) hours %= 12;

    const time = getTime({hours, minutes, seconds, zone});
    //using innerHTML for displaying Time
    currentTime.innerHTML = time;
};

//updating time every second
setInterval(renderTime, 1000);


// value of current alarm
let alarmString = null;

// Handling Alarm
const handleSubmit = (e) => {
    e.preventDefault();
    const { hour, min, sec, zone } = document.forms[0];
    alarmString = getTime({
        hours: hour.value,
        minutes: min.value,
        seconds: sec.value,
        zone: zone.value,
        
    });

    //Reseting after submit
    document.forms[0].reset();

    // Hide create alarm
  createAlarm.style.display = "none";

  // show active alarm with text
  activeAlarm.style.display = "block";

    alarmText.innerHTML = alarmText(alarmString);
};


// adding submit to the forms
// document.forms[0].addEventListener("submit", handleSubmit);