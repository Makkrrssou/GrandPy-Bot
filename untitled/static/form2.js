


$("form").submit(function(event){
	var extractVal=$("#extract").val();
	$("#chat_zone").append("Client dit : "+"<br>"+extractVal+"<br>");

	
	$.getJSON('/processing',{

		a:extractVal
	},function(data){
		$("#chat_zone").append("GrandPy-Bot dit : "+"<br>"+data.result+"<br>");
		$("#chat_zone").append('<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q='+extractVal+'&key=AIzaSyD4oIexrzcN8LaIRaxszGHPMgRgPLCPxNE" allowfullscreen></iframe> ')
		
	})
	.done(function(){
		console.log("ok!")
	})
	.fail(function(){
		alert("Votre message n'a pu être envoyé")
	});

	return false;

});