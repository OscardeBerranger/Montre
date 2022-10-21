const hoursHand = document.querySelector('.hoursHand')
const minutesHand = document.querySelector('.minutesHand')
const secondsHand = document.querySelector('.secondsHand')
const currentDatePrompt = document.querySelector('.currentDate')

function setDate(){
    const now = new Date();
    const day = now.getDay();
    let dayWord = 'none'

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) +90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const min = now.getMinutes();
    const minsDegrees = ((min / 60)*360)+(seconds/10) +90;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours/24)*360) + (min/2) +90;
    hoursHand.style.transform=`rotate(${hourDegrees}deg)`;

    if (day === 1){dayWord = 'Monday'}
    else if (day===2){dayWord = 'Tuesday'}
    else if (day===3){dayWord = 'Wednesday'}
    else if (day===4){dayWord = 'Thirsday'}
    else if (day===5){dayWord = 'Friday'}
    else if(day===6){dayWord = 'Saturday'}
    else if (day===7){dayWord='Sunday'}
    else dayWord = 'df ?';

    currentDatePrompt.innerHTML = dayWord+ ' the : ' + now.getDate() +':'+ now.getMonth() +':'+ now.getFullYear()
}
setInterval(setDate, 1000);
setDate();
