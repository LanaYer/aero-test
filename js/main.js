$( document ).ready(function() {

    $('.menu-search').on('click',function () {

        $( '.header-search' ).slideToggle( "slow");
        $( '.header-hidden' ).hide();
    });

    $('.menu-hamburger').on('click',function () {

        $( '.header-hidden' ).slideToggle( "slow");
        $( '.header-search' ).hide();
    });

});

//---------------------------------------------------------------

	
