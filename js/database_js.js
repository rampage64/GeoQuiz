  
    document.addEventListener("deviceready", onDeviceReady, false);

	  
    // Cordova is ready
    //
    function onDeviceReady() {
		//var db = openDatabase("Database", "1.0", "Cordova Demo", 200000);
        //db.transaction(populateDB, errorCB, successCB); 
		window.plugins.orientationLock.lock("portrait") ; 
        document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false );

	   for(i=0;i<=sh.length;i++) { 
		   $('#lista_shtetet').append('<li class="shtetet list-group-item" onClick="navigate(\'geo:' + sh[i].latlng  + '\')">' + sh[i].name.common + ' - '+ sh[i].capital + '</li>'); 
	   }  
}
 
 var adsCounter = 0;
 
	function navigate(url) {
		 adsCounter++;
		if(adsCounter == 4) {
			ShfaqReklamen();
			PergaditReklamen();
			adsCounter = 0;
		} 
		window.location = url;
	} 
	
	function exitFromApp()
	 {
		navigator.app.exitApp();
	 }

	

  