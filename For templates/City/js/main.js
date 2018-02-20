let remain_bv   = 15*60*60*24;

function parseTime_bv(timestamp){
  if (timestamp < 0) timestamp = 0;

  let day = Math.floor( (timestamp/60/60) / 24);
  let hour = Math.floor(timestamp/60/60);
  let min = Math.floor((timestamp - hour*60*60)/60);
  let sec = Math.floor(timestamp - hour*60*60 - min*60);
  let left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );

  let days = document.getElementById('days');
  let hours = document.getElementById('hours');
  let mins = document.getElementById('mins');
  let secs = document.getElementById('secs');

  days.innerHTML = day;
  if(String(left_hour).length > 1)
  	hours.innerHTML = left_hour;
	else
		hours.innerHTML = "0" + left_hour;
  if(String(min).length > 1)
      mins.innerHTML = min;
   else
      mins.innerHTML = "0" + min;
   if(String(sec).length > 1)
      secs.innerHTML = sec;
   else
      secs.innerHTML = "0" + sec;
};

window.onload = function () {
	setInterval(function(){
    remain_bv = remain_bv - 1;
    parseTime_bv(remain_bv);
    	if(remain_bv <= 0){

    	}
    }, 1000);

  AddClass('bodyJS','animation-none-before');
  AddClass('containerJS','animation-none');
}

