var remain_bv   = 45*60*60*24;
function parseTime_bv(timestamp){
  if (timestamp < 0) timestamp = 0;
 
  var day = Math.floor( (timestamp/60/60) / 24);
  var hour = Math.floor(timestamp/60/60);
  var mins = Math.floor((timestamp - hour*60*60)/60);
  var secs = Math.floor(timestamp - hour*60*60 - mins*60); 
  var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );
 
  $('.days').text(day);
  if(String(left_hour).length > 1)
  	$('.hours').text(left_hour);
	else
		$('.hours').text("0" + left_hour); 
  if(String(mins).length > 1)
      $('.mins').text(mins);
   else
       $('.mins').text("0" + mins);
   if(String(secs).length > 1)
       $('.secs').text(secs);
   else
       $('.secs').text("0" + secs);
	     
};	
 
$(document).ready(function(){
    setInterval(function(){
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);
        if(remain_bv <= 0){
            alert('Hello');
        }
    }, 1000);
});
