$(document).ready(function() {

  // this part is to resize the "viewer" div for mobile only
  // it works for images with a 4:3 aspect ratio - specifically 800 x 600
  var viewerWidth = $( '#viewer' ).width();
  if (viewerWidth < 800) {
  	$( '#viewer' ).height( viewerWidth * 0.66 );
  }

//----resizes browser window as the user changes it
  $( window ).resize(function() {
  	var viewerWidth = $( '#viewer' ).width();
  	if (viewerWidth < 800) {
  		$( '#viewer' ).height( viewerWidth * 0.66 );
  	}
  });

  $('.fadeitem').on('click', function() {
  	$(this).fadeOut('slow', function() {
  		// move img to the back of order
  		$('#viewer').append(this);
  		// make img to the front of order
  		$(this).fadeIn('slow');
  	});
  });

}); // very end tag-- keep
