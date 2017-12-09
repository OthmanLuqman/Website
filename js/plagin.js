$(function () {
     'use strict';

     

     $('.navbar-nav li').click(function () {
          $(this).addClass('active').siblings().removeClass('active');
     });
    

     $('.portfolio ul li').click(function () {
          $(this).addClass('active').siblings().removeClass('active');
         var value = $(this).attr("data-rel");
         if(value == "all"){
             $(".images").fadeIn("1000");
         }else{
             $(".images").not(value).fadeOut("1000");
             $(".images").filter(value).fadeIn("1000");
         }
     });



});
