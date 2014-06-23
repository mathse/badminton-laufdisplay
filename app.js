function change(c,v) {
	$("#"+c).val(parseInt($("#"+c).val()) + v); 
}
function go() {
	i = 0;
	$("#progress").fadeIn("fast");
	$("#progress").text("Bereit?");
	$("#settings").fadeOut("slow");
	
	y = setInterval(function() {
		i++;		
		$("#console").text(i + "\n" + $("#console").text());
		
				showCorner();
				$("#progress").text(i + " / " + $("#counter").val());
		if(i == parseInt($("#counter").val())+1) { clearInterval(y); $("#progress").hide(); $("#settings").fadeIn("fast"); $("#i"+$("#lastC").text()).fadeOut("fast"); }
	},parseInt($("#timer").val())*1000);
}
function showCorner() {
	r = Math.floor(Math.random()*8);
	
	switch(r) {
		case 0:
			c = "FL";
			break;
		case 1:
			c = "FC";
			break;
		case 2:
			c = "FR";
			break;	
		case 3:
			c = "CL";
			break;
		case 4:
			c = "CR";
			break;	
		case 5:
			c = "RL";
			break;
		case 6:
			c = "RC";
			break;
		case 7:
			c = "RR";
			break;				
	}
	

	$("#i"+$("#lastC").text()).fadeOut("slow");
	$("#i"+c).fadeIn("fast");
	$("#lastC").text(c);
	//$("#console").text(c);
}