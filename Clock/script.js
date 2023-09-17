//For Clock Hand motion

const hourHand=document.getElementById('hour-hand')
const minuteHand=document.getElementById('minute-hand')
const secondHand=document.getElementById('second-hand')

function setTime(){
    const now= new Date()
    console.log(now);

    const second=now.getSeconds()
    const secondDegree=((second/60)*360) + 90;
    secondHand.style.transform=`rotate(${secondDegree}deg)`
    console.log("SecondDegree",secondDegree);
    console.log("second",second);

    const minute=now.getMinutes()
    const minuteDegree=((minute/60)*360) + ((second/60)*6) + 90
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`

    console.log("minuteDegree",minuteDegree);

    console.log("minute",minute);

    const hour=now.getHours()
    const hourDegree=((hour/12)*360) + ((minute/60)*30) +90
    hourHand.style.transform=`rotate(${hourDegree}deg)`

    console.log("hourDegree", hourDegree);
    console.log("hour",hour);
}

setInterval(setTime,1000)

setTime()


// FOr Time Show

const hours=document.querySelector('.hour')
const minutes=document.querySelector('.minute')
const seconds=document.querySelector('.second')

function timeShow(){
    const now=new Date();

    hours.textContent=(now.getHours())-12
    minutes.textContent=now.getMinutes()
    seconds.textContent=now.getSeconds()
}
setInterval(timeShow,1000)

timeShow()

