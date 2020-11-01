
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