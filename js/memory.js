/* display playfield */
displayPlayField = function() {

	playField = $('#playfield');
	totalCellsNumber = $('#optform_hnumber').val() * $('#optform_vnumber').val();
	newLineOn = $('#optform_hnumber').val();
	
	//console.log(totalCellsNumber);
	lis = '';
	for(i=0; i<totalCellsNumber; i++){
		lis += '<li></li>';
	}
	//console.log(lis);
	$(lis).appendTo(playField);
	playField.css({'border':'solid red 1px'});
}

/* Start */
$(function () {
	displayPlayField();
});