$(document).ready(function(){
	var num = 0;
	$('td').on('click', function(){
		if($(this)[0].innerHTML === ""){
			num++;
			createBoard(num, this);
			game(this);
		}
	})

	var createBoard = (n, that) => {
		var letter = n % 2 == 0 ? "O" : "X";
		var p = $('<p>', {
			text: letter
		});
		p.css({'font-size': '100px', 'position': 'absolute', 'margin': '50px'})
		var tr = $(that).parent()[0].id.split("-")[1]
		var td = $(that)[0].id.split("-")[2]
		$(`#board tr:eq(${parseInt(tr) - 1}) td:eq(${parseInt(td) - 1})`).append(p);
	}

	var game = (that) => {
		const position00 = $('#board tr:eq(0) td:eq(0)')[0].innerHTML;
		const position11 = $('#board tr:eq(1) td:eq(1)')[0].innerHTML;
		const position22 = $('#board tr:eq(2) td:eq(2)')[0].innerHTML;
		if(position00.indexOf('X') > -1 && position11.indexOf('X') > -1 && position22.indexOf('X') > -1){
			$('#game-over-modal').modal();
			var p = $('<p>');
			p.text('X Wins');
			$('.modal-body').append(p)
		} else if (position00.indexOf('O') > -1 && position11.indexOf('O') > -1 && position22.indexOf('O') > -1){
			$('#game-over-modal').modal();
			var p = $('<p>');
			p.text('O Wins');
			$('.modal-body').append(p)
		}
	}

	$('#restart-button').on('click', function(){
		window.location.reload();
	});

})