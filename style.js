let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let sec = document.querySelector("#sec");

setInterval(()=>{
    let cuurentTime = new Date();

   hrs.innerHTML = (cuurentTime.getHours()<10?"0":" ") + cuurentTime.getHours();
   mins.innerHTML = (cuurentTime.getMinutes()<10?"0" : " ") + cuurentTime.getMinutes();
   sec.innerHTML = (cuurentTime.getSeconds()<10?"0" : " ") + cuurentTime.getSeconds();
},1000)