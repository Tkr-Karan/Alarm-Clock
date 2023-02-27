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

    // using Date calss mto get the dta of date
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