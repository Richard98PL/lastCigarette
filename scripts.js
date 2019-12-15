window.setInterval(function(){
  let lastDay = new Date(2019,7,27,12,52,42);
  let lastDayAlco = new Date(2019,11,15,21,10,05);
  let today = new Date();

    document.getElementById("demo1").innerHTML = "Last cigarette: ";
    document.getElementById("demo1").innerHTML += formattedDateTime(lastDay) + "<br />";

    document.getElementById("demo1").innerHTML += "Now: ";
    document.getElementById("demo1").innerHTML += formattedDateTime(today);

    document.getElementById("demo1").innerHTML += "<br /><br />" + "Time passed: " + "<br />";
    let timeDiff = today - lastDay; //in ms
    convertMiliseconds(timeDiff,"xD",1);

    document.getElementById("demo2").innerHTML = "Last alcohol: ";
    document.getElementById("demo2").innerHTML += formattedDateTime(lastDayAlco) + "<br />";

    document.getElementById("demo2").innerHTML += "Now: ";
    document.getElementById("demo2").innerHTML += formattedDateTime(today);

    document.getElementById("demo2").innerHTML += "<br /><br />" + "Time passed: " + "<br />";
    timeDiff = today - lastDayAlco; //in ms
    convertMiliseconds(timeDiff,"xD",2);

  }, 1000);

  function formattedDateTime(givenDate){

    if(givenDate != null){
     let year = givenDate.getFullYear();
     let month = givenDate.getMonth();
     let day = givenDate.getDate();
     let hour = givenDate.getHours();
     let minute = givenDate.getMinutes();
     let seconds = givenDate.getSeconds();
     
     month = givenDate.getMonth() + 1;
     if(month > 12)month=1;
     if( (givenDate.getMonth()+1) < 10 ) month = "0" + month;
     if( (givenDate.getDate()) < 10 ) day = "0" + day;
     if( (givenDate.getHours()) < 10 ) hour = "0" + hour;
     if( (givenDate.getMinutes()) < 10 ) minute = "0" + minute;
     if( (givenDate.getSeconds()) < 10 ) seconds = "0" + seconds;
   
     let formattedDateTime = day+"."+month+"."+year+" "+hour+":"+minute+":"+seconds;
     return formattedDateTime;
   }else{
     return "Not Yet.";
   }
 }
 
function convertMiliseconds(miliseconds, format,whichDemo) {
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;
  
  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);
  
  switch(format) {
	case 's':
		return total_seconds;
	case 'm':
		return total_minutes;
	case 'h':
		return total_hours;
	case 'd':
		return days;
	default:
        document.getElementById("demo"+whichDemo).innerHTML += "Days : " + days + "<br />";
        document.getElementById("demo"+whichDemo).innerHTML += "Hours : " + hours + "<br />";
        document.getElementById("demo"+whichDemo).innerHTML += "Minutes : " + minutes + "<br />";
        document.getElementById("demo"+whichDemo).innerHTML += "Seconds : " + seconds + "<br />";
  }
}

let audio = new Audio('demo.mp3');
audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

function btnFunction(){
  let btn = document.getElementById("btn");
  if(btn.className == "playBtn"){
    btn.className = "stopBtn";
    audio.play();
  } else {
    btn.className = "playBtn";
    audio.pause();
}

}








