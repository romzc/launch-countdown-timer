const _days = document.getElementById('days_id');
const _hours = document.getElementById('hours_id');
const _minutes = document.getElementById('minutes_id');
const _seconds = document.getElementById('seconds_id');


/**
 * 
 * @param {Number} numberDays 
 */
const getDate = (deadLine) => {
    const startDate = new Date();
    const remainTime = (deadLine - startDate + 1000) / 1000;
    const seconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    const minutes = ('0' + Math.floor((remainTime / 60) % 60)).slice(-2);
    const hours = ('0' + Math.floor((remainTime / 3600) % 24)).slice(-2);
    const days = ('0' + Math.floor(remainTime / (3600 * 24))).slice(-2);

    return {
        remainTime,
        days, 
        minutes,
        hours,
        seconds,
    }
}

const deadLine = new Date("Tue Feb 10 2023 9:05:00");


const startCountDate = ( deadLine ) => {
    
    setInterval(() => {
        let {days, minutes, hours, seconds, remainTime} = getDate(deadLine);
        _hours.textContent = hours;
        _days.textContent = days;
        _minutes.textContent = minutes;
        _seconds.textContent = seconds;

        const element = document.getElementById("anim_min");
        element.classList.remove("trans")

        if(seconds == 0 && minutes != 0) {
            element.classList.add("trans")
        } 

        const hourElem = document.getElementById("anim_hours");
        hourElem.classList.remove("trans")
        if (minutes == 0 && hours != 0) {
            hourElem.classList.add("trans")
        }

        const dayElem = document.getElementById("anim_days")
        if (hours == 0 && days != 0 ) {
            dayElem.classList.add("trans")
        }

        if (  remainTime <= 1 ) {
            deadLine.setSeconds((8 * 24) * 3600)
        }
    }, 1000)
}

startCountDate( deadLine )
