const timedisplay =  document.querySelector("#timedisplay");
const startbtn =  document.querySelector("#startbtn");
const pausebtn =  document.querySelector("#pausebtn");
const resetbtn=  document.querySelector("#resetbtn");
let starttime = 0;
let elapsedtime=0;
let currenttime=0;
let paused = true;
let timerid;
let hrs = 0;
let min = 0;
let sec = 0;




startbtn.addEventListener("click",()=>{
if (paused) {
    paused = false;
    starttime = Date.now()-elapsedtime;
    timerid = setInterval(updatetime, 75)
}
})
pausebtn.addEventListener("click",()=>{
    if(!paused){
        paused = true;
        elapsedtime = Date.now()-starttime;
        clearInterval(timerid)
    }
    
})
resetbtn.addEventListener("click",()=>{
paused = true;
clearInterval(timerid)
starttime=0;
currenttime=0;
elapsedtime=0;
hrs=0;
min=0;
sec=0;
timedisplay.textContent="00:00:00"

})
function updatetime(){
elapsedtime = Date.now() - starttime;

sec=Math.floor((elapsedtime/1000)%60);
min=Math.floor((elapsedtime/(1000*60)%60));
hrs=Math.floor((elapsedtime/(1000*60*60)%60));

sec = pad(sec)
min=pad(min)
hrs = pad(hrs)
timedisplay.textContent=`${hrs}:${min}:${sec}`


function pad(unit){
    return(("0")+unit).length > 2 ? unit : "0" +unit;
}
}


// const timedisplay =  document.querySelector("#timedisplay");
// const startbtn =  document.querySelector("#startbtn");
// const pausebtn =  document.querySelector("#pausebtn");
// const resetbtn=  document.querySelector("#resetbtn");

// let hrs = 0;
// let min = 0;
// let sec = 0;
// let starttime = 0;
// let paused = true;
// let elapsedtime = 0;
// let currenttime = 0;
// let timerid; 

// startbtn.addEventListener("click",()=>{
// if(paused){
//     paused = false;
//     starttime = Date.now()-elapsedtime;
//     timerid =setInterval(starting,1000)

// }
// });
// pausebtn.addEventListener("click",()=>{
// if(!paused){
//     paused=true;
//     elapsedtime = Date.now()-starttime;
//     clearInterval(timerid)
// }
// });
// resetbtn.addEventListener("click",()=>{
// paused=true;
// clearInterval(timerid)
//  hrs = 0;
//  min = 0;
//  sec = 0;
//  starttime = 0;
//  elapsedtime = 0;
//  currenttime = 0;
// timedisplay.textContent="00:00:00"
// });

// function starting(){
// elapsedtime = Date.now()-starttime;
// sec = Math.floor((elapsedtime / 1000)%60);
// min =Math.floor((elapsedtime/(1000*60)%60));
// hrs = Math.floor((elapsedtime/(1000*60*60)%60));

// sec=zero(sec);
// min=zero(min);
// hrs=zero(hrs);

// timedisplay.textContent=`${hrs}:${min}:${sec}`

// function zero(unit){

//     return (("0")+unit).length > 2 ? unit:"0"+unit;
// }
// }