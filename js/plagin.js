$(function () {
     'use strict';

     

     $('.navbar-nav li').click(function () {
          $(this).addClass('active').siblings().removeClass('active');
     });
    
    
    $('.navbar-nav li a').click(function(){
       
       $('html, body').animate({
           
           scrollTop: $('#'+ $(this).data('value')).offset().top 
           
       }, 1200); 
        
    });
    

     $('.portfolio ul li').click(function () {
          $(this).addClass('active').siblings().removeClass('active');
         var value = $(this).attr("data-rel");
         if(value == "all"){
             $(".images").fadeIn();
         }else{
             $(".images").not(value).fadeOut();
             $(".images").filter(value).fadeIn();
         }
     });



});
