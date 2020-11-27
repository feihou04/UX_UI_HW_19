
/* open sidemenu jquery*/
(function () {
	$('.hamburger-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.menuoverlay').toggleClass('visible');
	});
	$('.first, .third, .fourth, .portfoliolist > li > a ').on('click', function () {
		$('.hamburger-menu').removeClass('animate');
		$('.menuoverlay').removeClass('visible');
	});
})();


  
/* open dropdown portfolio jquery*/

  $(".second").on("click", function(){
    $(this).next().slideToggle(100);

});

//$(".second"). on("click", function(){
 // $(this).find(".second").toggleClass("active");


//if ($(".second").hasClass ("active")){
//  $(this).find(".plus").empty().addClass("minus");
//  $(this).find(".minus").append ("-");
//}else {
 // $(this).find(".minus").empty().addClass(".plus");
 // $(this).find(".plus").append("+");

//}

//});

  $('.second').click(function() {
    $('#plusicon').toggleClass('fas fa-plus fas fa-minus');
  });



  //read more button
  function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  myBtn.style.display = "none";
	  moreText.style.display = "inline ";
	  more1.style.display ="inline-block";
	}
  }

  // button mouseenter and mouseout function


  $("#myBtn").on("mouseenter", function(e){
	x = e.pageX - $(this).offset().left;
	y = e.pageY - $(this).offset().top;
	$(this).find("#effect").css({top:y, left:x});
   // $("#etp").attr('src','images/flash2.gif');


});
$("#myBtn").on("mouseout", function(e){
	x = e.pageX - $(this).offset().left;
	y = e.pageY - $(this).offset().top;
	$(this).find("#effect").css({top:y, left:x});
	//$("#etp").attr('src','images/Frame 41.png');
});
