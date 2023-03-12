
// The display to show current time
const currentTime = document.querySelector('h1');
const audio = new Audio('assets/ringtone.mp3');

audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;

const upcomingAlarmList = document.querySelector('#upcoming-alarms-list');
const addAlarm = document.querySelector('.setAlarm');

const alarmList = []; // Stores all the alarms being set 

// Plays the alarm audio at right time
function ring(realTime) {
    audio.play();
    alert(`It's ${realTime}`);
}

// // Shows the real time
// function updateTime() {
//     var today = new Date();
//     const hour = formatTime(today.getHours());
//     const minutes = formatTime(today.getMinutes());
//     const seconds = formatTime(today.getSeconds());
//     const realTime = `${hour}:${minutes}:${seconds}`;

//     currentTime.innerText = `${hour}:${minutes}:${seconds}`;

//     //     check if the alarmList includes the current time , "realTime"
//     //     if yes, ring() is called
//     if (alarmList.includes(realTime)) {
//         ring(realTime);
//     }
// }

// // If the number is less than 10 append 0 before it.
// function formatTime(time) {
//     if (time < 10 && time.length != 2) {
//         return '0' + time;
//     }
//     return time;
// }

// function to stop the currently playing alarm
function stopAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }
}

// removes the alarm from the upcoming-alarms-list when "Delete Alarm" is clicked
upcomingAlarmList.addEventListener('click', e => {
    if (e.target.classList.contains("deleteAlarm")) {
        e.target.parentElement.remove();
    }
});

// removes the alarm from the alarmList array when "Delete Alarm" is clicked
remove = (value) => {
    let newList = alarmList.filter((time) => time != value);
    alarmList.length = 0; // Clear contents
    alarmList.push.apply(alarmList, newList);
}


// Adds newAlarm to the upcoming-alarms-list as a new list item 
function addNewAlarm(newAlarm) {
    const html = 
    `<li class = "time-list">        
        <span class="time">${newAlarm}</span>
        <button class="deleteAlarm" onclick = "remove(this.value)" value=${newAlarm}>Delete Alarm</button>       
    </li>`
    upcomingAlarmList.innerHTML += html
};


// event to set a new alarm whenever the form is submitted 
addAlarm.addEventListener('submit', event => {

    event.preventDefault(); // to prevent default behaviour of webpage

    let hour = formatTime(addAlarm.hr.value);
    if (hour === '0') {
        hour = '00'
    }
    let minute = formatTime(addAlarm.min.value);
    if (minute === '0') {
        minute = '00'
    }
    let second = formatTime(addAlarm.sec.value);
    if (second === '0') {
        second = '00'
    }

    const newAlarm = `${hour}:${minute}:${second}`

    // add newAlarm to alarmList array
    if (isNaN(newAlarm)) {
        if (!alarmList.includes(newAlarm)) {
            alarmList.push(newAlarm);
            addNewAlarm(newAlarm);
            addAlarm.reset();
        } else {
            alert(`Alarm for ${newAlarm} already set.`);
        }
    } else {
        alert("Invalid Time Entered")
    }
})

// calls updateTime() every second
setInterval(updateTime, 1000);











































function currentTime(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let session="AM";
    let month=date.getMonth();
    let year=date.getFullYear();
    let cdate=date.getDate();
    let day=date.getDay();

    // converting 24 clock into 12 clock
    if(hh==0){
        hh=12;
    }
    if(hh>12){
        hh-12;
        session="PM";
    }
    // convert single digit integer into 2 digit by putting zero front of them

hh=makesingledigittodoubledigit(hh); //(hh<10)?"0"+hh:hh
mm=makesingledigittodoubledigit(mm);
ss=makesingledigittodoubledigit(ss);
cdate=makesingledigittodoubledigit(cdate); //(cdate<10)?"0"+cdate:cdate;


let montha=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Okt","Nov","Dec"];
let cmonth=montha[month];
let daya=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let cday=daya[day];


let time=hh+":"+mm+":"+ss+" "+session;
document.getElementById("clock").innerText=time;


let cl_date=cday+" - "+cmonth+" "+cdate +",  "+year;
document.getElementById("clock-date").innerText=cl_date;

setTimeout(currentTime,1000);

}

function makesingledigittodoubledigit(i){
    return i=(i<10)?"0"+i:i; // adding zero in front of numbers < 10
}
currentTime();