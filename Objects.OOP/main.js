

function createTime(hours, minutes, seconds) {
    const myTime = {}
    hours > 23 || hours < 0 ? myTime.hours = 0 : myTime.hours = hours;
    minutes > 59 || minutes < 0 ? myTime.minutes = 0 : myTime.minutes = minutes;
    seconds > 59 || seconds < 0 ? myTime.seconds = 0 : myTime.seconds = seconds;
    return myTime;

}
function showTime(time) {
    time.hours < 10 ? time.hours = `0${time.hours}` : time.hours;
    time.minutes < 10 ? time.minutes = `0${time.minutes}` : time.minutes;
    time.seconds < 10 ? time.seconds = `0${time.seconds}` : time.seconds;
    console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
}
// Тут я помилково додаю 1 до всіх значенть
function plusOne(time) {
    const incremented = {
        hours: (time.hours + 1),
        minutes: (time.minutes + 1),
        seconds: (time.seconds + 1)
    };
    incremented.seconds > 59 ? (incremented.minutes++) && (incremented.seconds = (incremented.seconds - 60)) : incremented.seconds;
    incremented.minutes > 59 ? (incremented.hours++) && (incremented.minutes = (incremented.minutes - 60)) : incremented.minutes;
    incremented.hours > 23 ? incremented.hours = (incremented.hours - 23) : incremented.hours;

    return incremented;
}
function minusOneSecond(time) {
    const decremented = {
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds
    };
    decremented.seconds--;
    if (decremented.seconds < 0) {
        decremented.minutes--;
        decremented.seconds = 59;
    }
    //decremented.seconds < 0 ? (decremented.minutes--) && (decremented.seconds = 59) : decremented.seconds;
    if (decremented.minutes < 0) {
        decremented.hours--;
        decremented.minutes = 59;
    }
    //decremented.minutes < 0 ? (decremented.hours--) && (decremented.minutes = 59) : decremented.minutes;
    if (decremented.hours < 0) {
        decremented.hours = 23;
    }
    //decremented.hours < 0 ? (decremented.hours = 23) : decremented.hours;


    return decremented;
}
showTime(createTime(-1, 66, 12));
const incrementedTime = plusOne(createTime(23, 59, 59));
showTime(incrementedTime)
const decrementedTime = minusOneSecond(createTime(0, 0, 0))
showTime(decrementedTime)