$(document).ready(function(){
	
	$("#arr").click(function() {
		
		$('html, body').animate({
			
			scrollTop: $("#second").offset().top
			
		}, 800);
		
	});
	
	// Show/Hide menu on top of the page
					
	$("#par").click(function(event) {	
		$("#res").slideToggle(300);
						
	});
	

	$("#par").click(function() {
	
		$(".line1").toggleClass("change1");
		$(".line2").toggleClass("change2");
		$(".line3").toggleClass("change3");
	
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