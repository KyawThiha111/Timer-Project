const timer = document.querySelector(".timer");
const startStopWrapper = document.querySelector(".startStop-wrapper");
const resetWrapper = document.querySelector(".reset-wrapper");

let second = 0;
let minute = 0;
let hour = 0;

// we can't use the same second/min/hour for initial zero. that's why we need new vars
let leadingSecond,leadingMin,leadingHour;

// startStopControl 
let intervalVar;
let stopping = true;

function updateTimer(){
    second++;
    if(second>=60){
        minute++;
        second=0;
        if(minute>=60){
            hour++;
            minute=0;
        }
    }
    
    leadingSecond = leadingZeroHandle(second);
    leadingMin = leadingZeroHandle(minute);
    leadingHour = leadingZeroHandle(hour);
    timer.textContent = leadingHour+ ":" + leadingMin + ":" + leadingSecond;
}

function leadingZeroHandle(time){
   return time<10? "0" + time : time;
}

startStopWrapper.addEventListener("click",()=>{
    if(stopping){
        intervalVar = setInterval(updateTimer,1000);
        startStopWrapper.innerHTML = '<i id="startStopStarted-btn" class="fa-solid fa-stop"></i>'
        stopping = false;
    }else if(!stopping){
        clearInterval(intervalVar);
        startStopWrapper.innerHTML = '<i id="startStop-btn" class="fa-solid fa-play"></i>';
        stopping = true;
    }
})

resetWrapper.addEventListener("click",()=>{
    timer.innerHTML = "00:00:00";
    window.clearInterval(intervalVar)
    second=0;
    minute=0;
    hour=0;
})
