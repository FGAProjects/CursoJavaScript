$(function(){
	
	var ex = $('.ex1'); 
	var a = 0;
	var b = 0;

	$('.ev1')
		.click(function(){
			$(this).css('background','#f44242');
			ex.text('Você Clicou!');
		});

	$('.ev2')
		.dblclick(function(){
			$(this).css('background','#f44242');
			ex.text('Você duas vezes!');
		});

	$('.ev3')
		.focusin(function(){
			$(this).css('background','#f44242');
			ex.text('Você deu foco!');
		}).focusout(function(){
			$(this).css('background','#ccc');
			ex.text('Você tirou o foco!');
		});

	$('.ev4')
		.hover(function(){
			$(this).css('background','#f44242');
			ex.text('Você Passou o mouse!');
		});

	$('.ev5')
		.mousedown(function(){
			$(this).css('background','#f44242');
			ex.text('Você apertou o botão do mouse!');
		}).mouseup(function(){
			$(this).css('background','#000');
			ex.text('Você soltou o botão do mouse!');
		});

	$('.ev6')
		.mouseenter(function(){
			a +=1;
			ex.text('Entradas do mouse: ' + a);
		}).mouseout(function(){
			ex.text('Saidas do mouse');
		});

	$('.ev7')
		.mouseover(function(){
			b +=1;
			ex.text('Mouse over: ' + b);
		}).mouseleave(function(){
			ex.text('Mouse leave');
		})

	$('.ev8')
		.mousemove(function(move){
			var localX = move.pageX;
			var localY = move.pageY;

			ex.text('Movimento X: ' + localX + ' Movimento Y: ' + localY);
		});
});