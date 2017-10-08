(function($)
{
	$( window ).resize(function() {	
	$("#topnav").resize(function () {
        	$('#godown').height($("#topnav").height() /*+ 10*/);
    	});

    	if ($("#topnav").height() > $('#godown').height()) $('#godown').height($("#topnav").height() /*+ 10*/);
    	else if ($("#topnav").height() < $('#godown').height()) $('#godown').height($("#topnav").height() /*+ 10*/);
  });  	
})(jQuery);  