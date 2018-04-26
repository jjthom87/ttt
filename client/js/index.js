$(document).ready(function(){

	var num = 0;
	$('td').on('click', function(){
		num++;
		var letter = num % 2 == 0 ? "O" : "X";
		var p = $('<p>', {
			text: letter
		});
		p.css({'font-size': '100px', 'position': 'absolute', 'margin': '100px'})
		var tr = $(this).parent()[0].id.split("-")[1]
		var td = $(this)[0].id.split("-")[2]
		$(`#board tr:eq(${parseInt(tr) - 1}) td:eq(${parseInt(td) - 1})`).append(p)
	})
})