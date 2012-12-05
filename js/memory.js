/* Create background */
windowBackground = function() {
	
}

/* display playfield */
displayPlayField = function() {

	cellsList = $('#cells_list');
	totalCellsNumber = $('#optform_hnumber').val() * $('#optform_vnumber').val();
	newLineOn = $('#optform_hnumber').val();
	
	li = '';

	for(i=0; i<totalCellsNumber; i++){

		if(i % newLineOn == 0 )
			li += '<li class="last"></li>';
		else
			li += '<li></li>';
	}
	cellsList.html(li);
}


  $.fn.nodoubletapzoom = function() {
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };

  $(document).nodoubletapzoom();
  
/* Start */
$(function () {
	displayPlayField();
});