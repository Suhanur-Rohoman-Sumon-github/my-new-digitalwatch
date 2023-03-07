const displayTiem = () =>{
  const date = new Date();
  let hour = date.getHours();
  const miniute = date.getMinutes();
  const second = date.getSeconds();
  const sesson = document.getElementById('sesson');

   if(hour>=12){
    sesson.innerHTML='PM' ;
   }else{
    sesson.innerHTML='AM' ;
   }
   if(hour>12){
    hour = hour-12;

   }

  document.getElementById('hours').innerHTML= hour;
  document.getElementById('minute').innerHTML= miniute;
  document.getElementById('seconds').innerHTML= second;
  


}
setInterval(displayTiem,10)