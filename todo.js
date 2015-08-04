$(document).ready(function(){

	
// BOOKS

	//This adds an item to the list
	$('#books form').on('submit', function(event){
		event.preventDefault();
		var taskitem = $('#books input').val();
		if(taskitem) {
			$('#books ul').append('<li class="itemparent clearfix"><span class="listitem">' + taskitem + '</span><span class="toolbar"><i class="fa fa-minus"></i></span></li>');
			$('#books input.addTask').val("")
		} else {
			alert('Enter something');
		}
	});

	// //This clears all the items
	// $('#books .clearbutton').click(function(){
	// 	event.preventDefault();
	// 	$('ul li').remove();
	// });

	//This removes whichever minus sign you click on
	$('#books ul').on('click', 'i.fa-minus', function(){
		console.log('minus');
		$(this).closest('li').remove();
	});
/////////////////////////////

//MOVIES

	//This adds an item to the list
	$('#movies form').on('submit', function(event){
		event.preventDefault();
		var taskitem = $('#movies input').val();
		if(taskitem) {
			$('#movies ul').append('<li class="itemparent clearfix"><span class="listitem">' + taskitem + '</span><span class="toolbar"><i class="fa fa-minus"></i></span></li>');
			$('#movies input.addTask').val("")
		} else {
			alert('Enter something');
		}
	});

	// //This clears all the items
	// $('#movies .clearbutton').click(function(){
	// 	event.preventDefault();
	// 	$('ul li').remove();
	// });

	//This removes whichever minus sign you click on
	$('#movies ul').on('click', 'i.fa-minus', function(){
		console.log('minus');
		$(this).closest('li').remove();
	});
/////////////////////////////

	//RESTAURANTS

	//This adds an item to the list
	$('#restaurants form').on('submit', function(event){
		event.preventDefault();
		var taskitem = $('#restaurants input').val();
		if(taskitem) {
			$('#restaurants ul').append('<li class="itemparent clearfix"><span class="listitem">' + taskitem + '</span><span class="toolbar"><i class="fa fa-minus"></i></span></li>');
			$('#restaurants input.addTask').val("")
		} else {
			alert('Enter something');
		}
	});

	// //This clears all the items
	// $('#restaurants .clearbutton').click(function(){
	// 	event.preventDefault();
	// 	$('ul li').remove();
	// });


	//This removes whichever minus sign you click on
	$('#restaurants ul').on('click', 'i.fa-minus', function(){
		console.log('minus');
		$(this).closest('li').remove();
	});
/////////////////////////////

// TRAVEL

	//This adds an item to the list
	$('#travel form').on('submit', function(event){
		event.preventDefault();
		var taskitem = $('#travel input').val();
		if(taskitem) {
			$('#travel ul').append('<li class="itemparent clearfix"><span class="listitem">' + taskitem + '</span><span class="toolbar"><i class="fa fa-minus"></i></span></li>');
			$('#travel input.addTask').val("")
		} else {
			alert('Enter something');
		}
	});

	// //This clears all the items
	// $('#books .clearbutton').click(function(){
	// 	event.preventDefault();
	// 	$('ul li').remove();
	// });

	//This removes whichever minus sign you click on
	$('#travel ul').on('click', 'i.fa-minus', function(){
		console.log('minus');
		$(this).closest('li').remove();
	});
/////////////////////////////

//BEER/WINE

	//This adds an item to the list
	$('#beer_wine form').on('submit', function(event){
		event.preventDefault();
		var taskitem = $('#beer_wine input').val();
		if(taskitem) {
			$('#beer_wine ul').append('<li class="itemparent clearfix"><span class="listitem">' + taskitem + '</span><span class="toolbar"><i class="fa fa-minus"></i></span></li>');
			$('#beer_wine input.addTask').val("")
		} else {
			alert('Enter something');
		}
	});

	// //This clears all the items
	// $('#movies .clearbutton').click(function(){
	// 	event.preventDefault();
	// 	$('ul li').remove();
	// });

	//This removes whichever minus sign you click on
	$('#beer_wine ul').on('click', 'i.fa-minus', function(){
		console.log('minus');
		$(this).closest('li').remove();
	});
/////////////////////////////

	//QUOTES/MISC.

	//This adds an item to the list
	$('#quotes_misc form').on('submit', function(event){
		event.preventDefault();
		var taskitem = $('#quotes_misc input').val();
		if(taskitem) {
			$('#quotes_misc ul').append('<li class="itemparent clearfix"><span class="listitem">' + taskitem + '</span><span class="toolbar"><i class="fa fa-minus"></i></span></li>');
			$('#quotes_misc input.addTask').val("")
		} else {
			alert('Enter something');
		}
	});

	// //This clears all the items
	// $('#restaurants .clearbutton').click(function(){
	// 	event.preventDefault();
	// 	$('ul li').remove();
	// });


	//This removes whichever minus sign you click on
	$('#quotes_misc ul').on('click', 'i.fa-minus', function(){
		console.log('minus');
		$(this).closest('li').remove();
	});
/////////////////////////////


});
