jQuery(document).ready(function(){

    $('.rs-carousel').carousel({
     orientation: 'horizontal',
     itemsPerTransition: 'auto',
     loop:true,
     speed: 'fast',
     easing: 'swing',
     nextPrevActions:true,
     whitespace: true,
     pause:1,
     pagination:true,
     insertPrevAction:function(){ return $('<a href="#" class="rs-carousel-action rs-carousel-action-prev"><i class="fa fa-arrow-left"></i></a>').appendTo($(this).find('.prev'))},
     insertNextAction: function(){return $('<a href="#" class="rs-carousel-action rs-carousel-action-next"><i class="fa fa-arrow-right"></i></a>').appendTo($(this).find('.next'))}



    });

    // set paging text

    $('.rs-carousel-pagination-link a').each(function(){
      $(this).html('<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>');
    })
	
	displayIconOnMobile();

    hasAnchorClass();
});

//############################################################################
//Update page link icons on mobile devices
//############################################################################
function displayIconOnMobile(){
    jQuery('.menu-icon').on('click',function(){
        jQuery('.site-nav').toggleClass('active');
        if(jQuery('.site-nav').hasClass('active')){
            jQuery('.site-nav').css('z-index','89');
            jQuery('.trigger').css('display','block');
            
        }else{
               
            jQuery('.trigger').css('display','none');
             jQuery('.site-nav').css('z-index','');
        }
        
        
    });
}
//############################################################################
//Setting the Anchor link visibility
//############################################################################
function hasAnchorClass(){
    jQuery('.main-header').hover(function(){
      var hasnchorClassExisted = jQuery(this).find('a').hasClass('hasAnchor');
      if(hasnchorClassExisted){
        jQuery(this).find('a').removeClass('hasAnchor');
        jQuery(this).find('a').addClass('hide');
      }else{
        jQuery(this).find('a').removeClass('hide');
        jQuery(this).find('a').addClass('hasAnchor');
      }
    });
}