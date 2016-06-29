 
$(document).ready(function(){ 

 
		$("#mesazhi").hide(); 
        $("#mesazhi").animate({height: '20px', opacity: '0.0'},"slow"); 
		
		$("#mesazhigabim").hide(); 
        $("#mesazhigabim").animate({height: '20px', opacity: '0.0'},"slow"); 
		  	
$('#kthehu').on('click', function (e) {
			   window.location='index.html';
			});
						
			 
		  $('#p1').on('click', function (e) {
			  
				$("#mesazhi").show(); 
				pyetjaTjeter(1);
			})
			
			  $('#p2').on('click', function (e) {
				  
		$("#mesazhigabim").show(); 
			   window.location='result.html';
			})
			
			  $('#p3').on('click', function (e) {
		$("#mesazhigabim").show(); 
				pyetjaTjeter(3);
			})
			
			  $('#p4').on('click', function (e) {
		$("#mesazhigabim").show(); 
				pyetjaTjeter(4);
			}) 
}); 

var poenat = 0;
  
	function pyetjaTjeter(i) {
	if(i == 1) { 
		  $("#mesazhi").animate({height: '50px', opacity: '1.0'},"slow"); 
        $("#mesazhi").animate({height: '20px', opacity: '0.0'},"slow"); 
		  poenat++;
		  
		   $("#poenat").text("Poenat: " + poenat);
	 }
	 
	 if(i == 2) { 
		  $("#mesazhigabim").animate({height: '50px', opacity: '1.0'},"slow"); 
        $("#mesazhigabim").animate({height: '20px', opacity: '0.0'},"slow"); 
		    
	 }
	 
	 if(i == 3) { 
		   $("#mesazhigabim").animate({height: '50px', opacity: '1.0'},"slow"); 
        $("#mesazhigabim").animate({height: '20px', opacity: '0.0'},"slow"); 
		  
	 }
	 
	 if(i == 4) { 
		   $("#mesazhigabim").animate({height: '50px', opacity: '1.0'},"slow"); 
        $("#mesazhigabim").animate({height: '20px', opacity: '0.0'},"slow"); 
		  
	 }
      
	$("#pyetja").text('Cili eshte kryeqyteti i Palestines');
	}
	 