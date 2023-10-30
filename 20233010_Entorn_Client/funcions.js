function senseConnex() {
    $("#avisos").html('<div class="alert alert-warning">No tens connexió.</div>');
    console.log("Por que no funcionas??");
}

function ambConnex() {
    $("#avisos").html('<div class="alert alert-success">Ja tens connexió.</div>');

    console.log("Por que no dejas de funcionar");

    setTimeout(function(){
		$("#avisos").html("");
	},3000);
}


