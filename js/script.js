// Js for menu
var navList = document.getElementById("nav-list");
    navList.style.maxHeight = '0px';
function menutoggle() {
   if (navList.style.maxHeight == "0px") 
   {
      navList.style.maxHeight = "150px";
   }
   else
   {
      navList.style.maxHeight = "0px";
   }
}
// End js for menu
var navCart = document.getElementById("cart-item");
    navCart.style.maxHeight = '0px';
function carttoggle() {
   if (navCart.style.maxHeight == "0px") 
   {
      navCart.style.maxHeight = "600px";
   }
   else
   {
      navCart.style.maxHeight = "0px";
   }
}

// Js for search
$(document).on('click', '#search-btn', function(e) {
    e.preventDefault();
    if($(this).hasClass('open')) {
        $('.navsearch').hide();
        $(this).removeClass('open');
    } else {
        $('.navsearch').show();
        $(this).addClass('open')
    }
})
// End Js for search