/* Create background */
windowBackground = function() {
	
}

/* display playfield */
displayPlayField = function() {

	cellsList = $('#cells_list');
	hCellsCount = $('#optform_hnumber').val();
	vCellsCount = $('#optform_vnumber').val();
	totalCellsNumber = hCellsCount * vCellsCount;
	newLineOn = $('#optform_hnumber').val();
	
	li = '';

	for(i=0; i<totalCellsNumber; i++){
		li += '<li></li>';
		if(i % newLineOn == newLineOn-1 )
			li += '<li class="new_line">&nbsp;</li>';
	}
	cellsList.html(li);
	
	/* sets cells container dimentions */
	{
		li = cellsList.find('li:first');
		/* gets cell horizontal size including margins and paddings */
		liW = parseInt(li.width())
		liW += parseInt(li.css('padding-left'));
		liW += parseInt(li.css('padding-right'));
		liW += parseInt(li.css('margin-left'));
		liW += parseInt(li.css('margin-right'));
		/* gets cell vertical size including margins and paddings */
		liH = parseInt(li.height())
		liH += parseInt(li.css('padding-top'));
		liH += parseInt(li.css('padding-bottom'));
		liH += parseInt(li.css('margin-top'));
		liH += parseInt(li.css('margin-bottom'));
		/* gets container horizontal margins and paddings */
		ulW = parseInt(cellsList.css('margin-left'));
		ulW += parseInt(cellsList.css('margin-right'));
		ulW += parseInt(cellsList.css('padding-left'));
		ulW += parseInt(cellsList.css('padding-right'));
		/* gets container vertical margins and paddings */
		ulH = parseInt(cellsList.css('margin-top'));
		ulH += parseInt(cellsList.css('margin-bottom'));
		ulH += parseInt(cellsList.css('padding-top'));
		ulH += parseInt(cellsList.css('padding-bottom'));
		/* sets container dimentions */
		cellsList.width(liW * hCellsCount + ulW);
		cellsList.width(liH * vCellsCount + ulH);
		cellsList.centerIt();
	}
}

$.fn.centerIt = function(){
	element = $(this);
	element.css("position","absolute");
	
	paddingsX 	= parseInt(element.css("paddingLeft")) + parseInt(element.css("paddingRight"));
	paddingsY 	= parseInt(element.css("paddingTop")) + parseInt(element.css("paddingBottom"));
	bTop 		= Math.round( ( $(window).height() - ( element.height() + paddingsY ) ) / 2) + $(window).scrollTop();
	bLeft 		= Math.round( ( $(window).width() - ( element.width() + paddingsY ) ) / 2) + $(window).scrollLeft();
						
	element.css( "top", bTop < 0 ? bTop = 0 : bTop + "px");
	element.css("left", bLeft < 0 ? bLeft = 0 : bLeft + "px");
		
	return element;
}

onWinResize = function(){
	 $('#cells_list').centerIt();
}

setWindowBackground = function(){
	imgURL = 'background.php?';
	imgURL += 'w=' + $(window).width() + '&';
	imgURL += 'h=' + $(window).height();
	console.log(imgURL);
}

$.fn.nodoubletapzoom = function(){
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
	$(window).on('resize',onWinResize);
	displayPlayField();
	setWindowBackground();
});