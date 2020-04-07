$("#shoppingForm").on('submit', function(e){
	var text = $('#addToList').val();
  $('#shoppingList').append($('<li>').append(text));
  $('#addToList').val('');
  e.preventDefault();
});

$('#shoppingList').on('dblclick', 'li', function(){
	$(this).remove();
});