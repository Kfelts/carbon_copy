/**
 * Responsive Admin Theme
 * 2.7.1
 *
 * Custom scripts
 */


$(function () {


    // Full height of sidebar
// sourcery skip: avoid-function-declarations-in-blocks
    function fix_height() {
        const heightWithoutNavbar = $("#wrapper").height() - 61;
        $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");

        const navbarHeight = $('nav.navbar-default').height();
        const wrapperHeight = $('#page-wrapper').height();

        if(navbarHeight > wrapperHeight){
            $('#page-wrapper').css("min-height", navbarHeight - 60 + "px");
        }

        if(navbarHeight < wrapperHeight){
            $('#page-wrapper').css("min-height", $(window).height() - 60  + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarHeight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarHeight - 60  + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }

    $(window).on("load resize scroll", function() {
        if(!$("body").hasClass('body-small')) {
                fix_height();
        }
    });

    // Move right sidebar top after scroll
    $(window).on("scroll", function(){
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav') ) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });

 //   setTimeout(function(){
 //       fix_height();
  //  });

});

// Minimalize menu when screen is less than 768px
$(window).on("load resize", function () {
    if ($(document).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
});

const curTabIndex = 0;
const lastTabIndex = 0;

function focusPreviousElement() {
    try {
        curTabIndex = document.activeElement.tabIndex; //get current elements tab index

        if ($("[tabindex=" + nextTabIndex + "]").length == 1) {

            $("[tabindex=" + nextTabIndex + "]").trigger("focus");
        } else {
            for (let i = 1; i <= 10; i++) {
                nextTabIndex = parseInt(curTabIndex) - (i * 20);

                if ($("[tabindex=" + nextTabIndex + "]").length == 1) {
                    $("[tabindex=" + nextTabIndex + "]").trigger("focus");
                    break;
                }
            }
        }
    } catch (err) {

    }
}

function focusNextElement() {
    try {
        curTabIndex = document.activeElement.tabIndex; // get current elements tab index

        const nextTabIndex = parseInt(curTabIndex) + 100;

        if ($("[tabindex=" + nextTabIndex + "]").length == 1) {

            $("[tabindex=" + nextTabIndex + "]").trigger("focus");
        } else {
            for (let i = 1; i <= 10; i++) {
                nextTabIndex = parseInt(curTabIndex) + 1 (i * 20);

                if ($("[tabindex=" + nextTabIndex + "]").length == 1) {
                    $("[tabindex=" + nextTabIndex + "]").trigger("focus");
                    break;
                }
            }
        }
    } catch (err) {

    }
}

