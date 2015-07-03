suite('<momentum-marknad>', function() {
	test('should throw execption', function() {
      	assert.throw(
      		function() {
      			var element = new MomentumMarknad();
				document.body.appendChild(element);		
      		}, 
      	'Missing url property');
    });
});
