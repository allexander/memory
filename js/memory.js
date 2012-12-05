/* display playfield */
displayPlayField = function() {

	cellsList = $('#cells_list');
	totalCellsNumber = $('#optform_hnumber').val() * $('#optform_vnumber').val();
	newLineOn = $('#optform_hnumber').val();
	
	//console.log(totalCellsNumber);
	lis = '';
	for(i=0; i<totalCellsNumber; i++){
		lis += '<li></li>';
	}
	cellsList.html(lis);
}

/* Start */
$(function () {
	displayPlayField();
});