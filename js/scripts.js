$(document).ready(function(){
	
	$("#arr").click(function() {
		
		$('html, body').animate({
			
			scrollTop: $("#second").offset().top
			
		}, 800);
		
	});
	
	//---------------------
	

	$("#photoBox1").mouseenter(function(){
	
		$("#insideBox1").stop().animate({height: "20%"}, 250)
	
	}).mouseleave(function() {
	
		$("#insideBox1").stop().animate({height: "100%"}, 250)
	
	});
	
	$("#photoBox2").mouseenter(function(){
	
		$("#insideBox2").stop().animate({height: "20%"}, 250)
	
	}).mouseleave(function() {
	
		$("#insideBox2").stop().animate({height: "100%"}, 250)
		
	});
	
	$("#photoBox3").mouseenter(function(){
	
		$("#insideBox3").stop().animate({height: "20%"}, 250)
	
	}).mouseleave(function() {
	
		$("#insideBox3").stop().animate({height: "100%"}, 250)
		
	});


					

		
});