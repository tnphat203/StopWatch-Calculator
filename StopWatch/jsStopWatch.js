var timeMinute = document.querySelector('.minutes');
var timeSecond = document.querySelector('.seconds');
var btnStart = document.querySelector('.btn-start');
var btnStop = document.querySelector('.btn-stop');
var btnReset = document.querySelector('.btn-reset');

var interval;

function Timer() {
    var minute = parseInt(timeMinute.textContent);
    var second = parseInt(timeSecond.textContent);

    second++;

    if(second==59){
        second = 0;
        minute++;
    }

    if(minute == 60){
        clearInterval(interval);
    }

    if(second < 10){
        timeSecond.textContent = '0' + second;
    }else{
        timeSecond.textContent = second;
    }

    if(minute < 10){
        timeMinute.textContent = '0' + minute;
    }else{
        timeMinute.textContent = minute;
    }
};

btnStart.addEventListener('click',function(){
    if(interval==null){
        interval = setInterval(Timer,1000);
    }
});
btnStop.addEventListener('click',function(){
    if(interval!=null){
        clearInterval(interval);
        interval=null;
    }
});
btnReset.addEventListener('click',function(){
    timeMinute.textContent = '00';
    timeSecond.textContent = '00';
    clearInterval(interval);
    interval = null;
})