
/* preload jquery*/


$(document).ready(function() {

    $("#ud_dots").delay(2000).fadeOut(300,function(){
      $("#ud_bg_left").animate({left: '-50%'},300);
      $("#ud_bg_right").animate({right: '-50%'},300, function(){
        $("#ud_preloader").fadeOut(10);
      });

    });
    
  });

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
    $('i').toggleClass('fas fa-plus fas fa-minus');
  });

// button mouseenter and mouseout function


  $(".btn").on("mouseenter", function(e){
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("#effect").css({top:y, left:x});
     // $("#etp").attr('src','images/flash2.gif');


  });
  $(".btn").on("mouseout", function(e){
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("#effect").css({top:y, left:x});
      //$("#etp").attr('src','images/Frame 41.png');
  });

// mouseenter and mouseout function for portfolio pictures switching to gif files    
$(".etp").on("mouseenter", function(){
  $("#etp").attr('src','images/flashresize2.gif');
});

$(".etp").on("mouseout", function(){
 $("#etp").attr('src','images/Frame 41.png');
});


$(".park").on("mouseenter", function(){
  $("#park").attr('src','images/Presentation2.gif');
});

$(".park").on("mouseout", function(){
 $("#park").attr('src','images/Frame 40a.png');
});

$(".peel").on("mouseenter", function(){
  $("#peel").attr('src','images/peel.gif');
});

$(".peel").on("mouseout", function(){
 $("#peel").attr('src','images/Frame 43.png');
});