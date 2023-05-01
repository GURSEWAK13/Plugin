window.addEventListener('beforeunload', function(event) {
	event.preventDefault();
	event.returnValue = '';
	
	// Display exit widget here
});