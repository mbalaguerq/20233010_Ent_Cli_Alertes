function sinConexion(){
	
	$("#avisos").html('<div class="alert alert-warning">Te has quedado sin conexión.</div>');

}

function conConexion(){
	
	$("#avisos").html('<div class="alert alert-success">La conexión ha vuelto.</div>');
	setTimeout(function(){
		$("#avisos").html("");
	},3000);

}