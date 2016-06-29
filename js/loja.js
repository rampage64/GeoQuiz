  
	 
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

 
	function nextQuestion() { 
	
		adsCounter++;
		if(adsCounter == 4) {
			ShfaqReklamen();
			PergaditReklamen();
			adsCounter = 0;
		}
		
     	var nrMax = 243;
		var r1 = Math.floor((Math.random() * nrMax) + 1); 
		var r2 = Math.floor((Math.random() * nrMax) + 1); 
		if(r1 == r2) {                             
			r2 = Math.floor((Math.random() * nrMax) + 1); 
		}                                         
		var r3 = Math.floor((Math.random() * nrMax) + 1); 
		if(r1 == r3) {                          
			r3 = Math.floor((Math.random() * nrMax) + 1); 
		}                                     
		var r4 = Math.floor((Math.random() * nrMax) + 1); 
		if(r1 == r4) {                       
			r4 = Math.floor((Math.random() * nrMax) + 1); 
		}                                     
		var r5 = Math.floor((Math.random() * nrMax) + 1); 
		if(r1 == r5) {                          
			r5 = Math.floor((Math.random() * nrMax) + 1); 
		}
		

			
			try {		
			if (sh[r1].capital != null && sh[r1].capital != undefined && sh[r1].capital.length < 1 ) { 
				nextQuestion();
				return;
			}
				
			if (sh[r2].capital != null && sh[r2].capital != undefined && sh[r2].capital.length < 1 ) { 
				nextQuestion();
				return;
			}
 
			if (sh[r3].capital != null && sh[r3].capital != undefined && sh[r3].capital.length < 1 ) { 
				nextQuestion();
				return;
			}
 
			if (sh[r4].capital != null && sh[r4].capital != undefined && sh[r4].capital.length < 1 ) { 
				nextQuestion();
				return;
			} 
			if (sh[r5].capital != null && sh[r5].capital != undefined && sh[r5].capital.length < 1 ) { 
				nextQuestion();
				return;
			}
		}
		catch(err) {   
			nextQuestion();
			return;
		}
		 
		var ix = Math.floor(Math.random() * (4 - 1 + 1)) + 1; 
		
		$('#pergjigjja').val(ix); 
		$('#pyt1').text(sh[r1].name.common);
	 
		   if(ix == 1) { 
			$('#p1').text(sh[r1].capital); 
		   }
		    else if(ix == 2) { 
			$('#p2').text(sh[r1].capital); 
		   }
		    else if(ix == 3) { 
			$('#p3').text(sh[r1].capital); 
		   }
		   else if(ix == 4) { 
			$('#p4').text(sh[r1].capital); 
		   }
		      var j = 10 - ix;
			  //6, 7, 8, 9
			  
			  var j = 0;
			for(i=1;i<=4;i++) { 
				if(i == ix ) {
					continue;
				}
				if(i == 1) {
					$('#p' + i).text(sh[r2].capital ); 
				}
				else if(i == 2) { 
					$('#p' + i).text(sh[r3].capital );  
				}
				else if(i == 3) {
					$('#p' + i).text(sh[r4].capital );  
				} 
				else if(i == 4) { 
					$('#p' + i).text(sh[r5].capital );  
				}
			}
		
	}
	var Poenat = 0; 
	var GjatePergjigjjes = false;
	
	function pergjigju(x) {  
	if(GjatePergjigjjes) return;
	GjatePergjigjjes = true;
	
			var pergjigjja =  $('#pergjigjja').val();  
			if(x == pergjigjja) {
				Poenat += 2; 
				$('#poenat').text(Poenat);
					$( "#p" + x ).animate({
					  backgroundColor: "#002600"
					}, 150 );  
					
					$("#p" + x ).animate({
					  backgroundColor: "#fff" 
					}, 150, function () { 
					
						if(helpi == true)  {
							resetHelp();	
						}
						
						GjatePergjigjjes = false;
						nextQuestion();
					} ); 
			} 
			else { 
				$( "#p" + x ).animate({
					  backgroundColor: "#aa0000" 
					}, 450 );  
					
					$( "#p" + pergjigjja).animate({
					  backgroundColor: "#002600" 
					}, 450 );  
					
					$("#p" + x ).animate({
					  backgroundColor: "#fff"
					}, 450, function () {  
					} ); 
					
					$("#p" + pergjigjja).animate({
					  backgroundColor: "#fff"
					}, 450, function () {  
						GjatePergjigjjes = false;
						 navigate('result.html?poenat=' + Poenat);
					} );   
			} 
	}
    // Cordova is ready
    //
    function onDeviceReady() {
		//var db = openDatabase("Database", "1.0", "Cordova Demo", 200000);
        //db.transaction(populateDB, errorCB, successCB); 
		 
		window.plugins.orientationLock.lock("portrait") ; 
        document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false );

		nextQuestion(); 
		PergaditReklamen();
	}

	var adsCounter= 0;
	
	function navigate(url) {
		window.location = url;
	}
	 
	 function resetHelp() {
		   
			$( "#p1").animate({
				  backgroundColor: "#fff" 
				}, 80);   
		  
			$( "#p2").animate({
				  backgroundColor: "#fff" 
				}, 80);    
			$( "#p3").animate({
				  backgroundColor: "#fff" 
				}, 80);   
	  
			$( "#p4").animate({
				  backgroundColor: "#fff" 
				}, 80);  
				
			helpi = false;
	 }
	 
	 var helpi = false;
	 
	 function alertDismissed() {
		
	}


	function help() {
		
		if(helpi == true) return;
		
		if(Poenat - 1 <= 0) {
			navigator.notification.alert(
				'You can\'t use help now not enough points !',  
				alertDismissed,        
				'Help',            
				'Got it'                  
			); 
			return;
		}
	
	 	var pergjigjja =  $('#pergjigjja').val();  
		
			var r1 = pergjigjja;
			var r2 = pergjigjja;
			
			while(pergjigjja == r1) {
				r1=	Math.floor((Math.random() * 4) + 1); 
			}	
		
			while(pergjigjja == r2) {
				r2=	Math.floor((Math.random() * 4) + 1); 
				if(r2 == r1)
					r2 =pergjigjja;
			}				
			
			$( "#p" + r1).animate({
			  backgroundColor: "#aa0000" 
			}, 450);
			
				$( "#p" + r2).animate({
			  backgroundColor: "#aa0000" 
			}, 450);
			 
		Poenat--;
		$('#poenat').text(Poenat);
		helpi = true;
	}
	 function exitFromApp()
	 { 
		navigator.app.exitApp(); 
	 }

	

  