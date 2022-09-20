let star=document.querySelector(".star");
let second=document.getElementById('second');
let millisecond=document.getElementById('millisecond');
let Stop=document.querySelector('.stop')
let reset=document.querySelector('.reset');
var millsec=0;
var sec=0;
var timeinteval;

const timer=()=>{
    millsec++;
    if(millsec < 9){
        millisecond.innerHTML="0" + millsec; 
    }
    else{
        millisecond.innerHTML= millsec; 
    }
    if(millsec > 99){
        sec++;
        second.innerHTML="0" + sec;
        millsec=0
    }
    if(sec > 9){
        second.innerHTML=sec;
    }
}

//  Star
star.addEventListener('click',()=>{
timeinteval= setInterval(timer,10);
})
// Stop
Stop.addEventListener('click',()=>{
    clearInterval(timeinteval);
})
//reset
reset.addEventListener('click',()=>{
    clearInterval(timeinteval);
    sec=0;
    millsec=0;
    millisecond.innerHTML= "0" + millsec;
    second.innerHTML="0" + sec;   
})
