var pictureSource; // picture source
var destinationType; // sets the format of returned value
// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);
// device APIs are available
//
 var p = 0;
function onDeviceReady() {
pictureSource = navigator.camera.PictureSourceType;
destinationType = navigator.camera.DestinationType;
   document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false );
		
		$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
	}

		$('#rez_poenat').text('You got ' + $.urlParam('poenat') + ' Point(s)');

		p = $.urlParam('poenat');
		PergaditReklamen(); 
}
 
function shperndaje() {  
	window.plugins.socialsharing.share('I got ' +  p + ' point(s), challenge me!', null, null, 'https://play.google.com/store/apps/details?id=com.synergy.geo_quiz')
		ShfaqReklamen(); 
}

 
// Called when a photo is successfully retrieved
//
 
function onPhotoDataSuccess(imageURI) {
var cameraImage = document.getElementById('image');
cameraImage.style.display = 'block';
cameraImage.style.height = '200px';
cameraImage.style.width = '175px'; 
cameraImage.src = imageURI;
ShfaqReklamen(); 
}
// Called when a photo is successfully retrieved
//
 
function onPhotoURISuccess(imageURI) {
// Uncomment to view the image file URI
console.log(imageURI);
// Get image handle
//
var galleryImage = document.getElementById('image');
// Unhide image elements
//
galleryImage.style.display = 'block';
// Show the captured photo
// The inline CSS rules are used to resize the image
//
galleryImage.src = imageURI;
}
// A button will call this function
//
 
function capturePhoto() {
// Take picture using device camera and retrieve image as base64-encoded string
navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
quality: 30,
targetWidth: 720,
targetHeight: 800,
correctOrientation: true,
destinationType: destinationType.FILE_URI,
saveToPhotoAlbum: true
});
}
// A button will call this function
//
 
function getPhoto(source) {
// Retrieve image file location from specified source
navigator.camera.getPicture(onPhotoURISuccess, onFail, {
quality: 30,
targetWidth: 150,
targetHeight: 150,
correctOrientation: true,
destinationType: destinationType.FILE_URI,
sourceType: source
});
}
// Called if something bad happens.
//
 
	function navigate(url) {
		ShfaqReklamen();
		window.location = url;
	}
	
	
function onFail(message) {
//alert('Failed because: ' + message);
}