//= require "jquery/dist/jquery.min"
//= require "fullpage.js/jquery.fullPage"
//= require "hypher/dist/jquery.hypher"
//= require "hyphenation-patterns/dist/browser/it"
//= require "vendor/jquery.fittext"
//= require "jquery.slimscroll/jquery.slimscroll"
//= require "vendor/pikabu"
//= require "enquire/dist/enquire.min"
//= require "tooltipster/js/jquery.tooltipster.min"
//= require "vendor/jquery-ui"

/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 21/11/13
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */
var pathname = window.location.pathname;
var pikabu;
$.fn.tooltipster('setDefaults', {
    position: 'bottom',
    theme: 'my-tooltip-theme'
});

$( window ).resize(function() {
    location.reload();
});
enquire
    .register("screen and (max-width:59.9em)",  {

        match : function() {





        },

        // OPTIONAL
        // If supplied, triggered when the media query transitions
        // *from a matched state to an unmatched state*.
        unmatch : function() {},

        // OPTIONAL
        // If supplied, triggered once, when the handler is registered.
        setup : function() {


            pikabu = new Pikabu({ widths: {

                right: '87%'
            }});
            if(pathname == "/") {
                $('#fullpage').fullpage({
                    verticalCentered: false,
                    resize: false,
                    slidesColor: ['#27BA97', '#27BA97', '#27BA97', '#27BA97', '#27BA97'],
                    anchors: ['landing-section', '10reasons-section', 'processes-section', 'direct-application-section', 'certified-incubator-section'],
                    scrollingSpeed: 700,
                    easing: 'easeInQuart',
                    menu: false,
                    navigation: false,
                    autoScrolling: true,
                    scrollOverflow: true,
                    slidesNavigation: false,
                    slidesNavPosition: 'top',

                    css3: true,
                    onLeave: function (index, direction) {
                        if (index == 1) {
                            $("#footer").fadeOut();
                            $("#menu-top").fadeOut(0);
                            $("#menu").fadeIn();
                            $("#menu-wide").fadeOut(0);
                        }
                    },
                    afterLoad: function (anchorLink, index) {
                        //using index
                        if (index == '1') {
                            $("#footer").fadeIn();
                            $("#menu-top").fadeOut(0);
                            $("#menu-wide").fadeOut(0);
                            $("#menu").fadeIn();
                        }

                    }

                });
            }

            $("a.mobile1").click(function(e){
                e.preventDefault();
                e.stopPropagation();
                pikabu.closeSidebars();
                $.fn.fullpage.moveTo("10reasons-section");
            });
            $("a.mobile2").click(function(e){
                e.preventDefault();
                pikabu.closeSidebars();
                $.fn.fullpage.moveTo("processes-section");
            });
            $("a.mobile3").click(function(e){
                e.preventDefault();
                pikabu.closeSidebars();

                window.location = "/filingcabinet.html";
            });
            $("a.mobile4").click(function(e){
                e.preventDefault();
                pikabu.closeSidebars();
                window.location = "/map.php";
            });
            $("a.mobile5").click(function(e){
                e.preventDefault();
                pikabu.closeSidebars();
                window.location = "/about.html";
            });
            $("a.mobile6").click(function(e){
                e.preventDefault();
                pikabu.closeSidebars();
                window.location = "/faq.html";
            });
            $("a.mobile7").click(function(e){
                e.preventDefault();
                pikabu.closeSidebars();
                window.location = "/credits.html";
            });
            $(".m-pikabu-nav-toggle").click(function(e){
                $.fn.fullpage.moveTo("landing-section");
            });


        },

        // OPTIONAL, defaults to false
        // If set to true, defers execution of the setup function
        // until the first time the media query is matched
        deferSetup : true
    })
    .register("screen and (min-width: 60em)", {

    deferSetup : true,
    setup : function() {

        $(document).ready(function(){
            
            $( "#accordion" ).accordion({header:".question",heightStyle: "content"});


            if($("#about").length > 0 || $("#contacts").length > 0 || $("#filingcabinet").length > 0){
                $("#menu-top").fadeIn();
                $("#menu").fadeOut(0);
                $("#menu-wide").fadeOut(0);
            }else{
                $("#menu-wide").fadeIn();
            }
            if(pathname == "/"){
                $('#fullpage').fullpage({
                    verticalCentered: true,
                    resize : false,
                    slidesColor : ['#27BA97', '#27BA97','#27BA97','#27BA97','#27BA97'],
                    anchors:['landing-section','10reasons-section', 'processes-section','direct-application-section','certified-incubator-section'],
                    scrollingSpeed: 700,
                    easing: 'easeInQuart',
                    menu: "#header",
                    navigation: false,
                    autoScrolling: true,
                    scrollOverflow: true,
                    slidesNavigation: false,
                    slidesNavPosition: 'top',

                    css3: true,
                    onLeave: function(index, direction){
                        if(index == 1 ){
                           
                            $("#menu-top").fadeIn();
                            $("#menu").fadeOut(0);
                            $("#menu-wide").fadeOut(0);
                        }
                    },
                    afterLoad: function(anchorLink, index){
                        //using index
                        if(index == '1'){
                           
                            $("#menu-top").fadeOut(0);
                            $("#menu-wide").fadeIn();
                        }

                    }

                });
            }

        });
    },
    match : function() {

    },
    unmatch : function() {

    }

});

$(document).ready(function(){
    $(this).find('.section > .controlArrow').remove();
    
    $('.hyphenate').hyphenate('en');
    $(".responsive-headline").fitText(0.8,{ minFontSize: '12px', maxFontSize: '36px' });
    $('.tooltip').tooltipster();

    $("#maintitle").fitText(0.8,{ minFontSize: '28px', maxFontSize: '50px' });
    $("#mainsubtitle").fitText(0.8,{ minFontSize: '12px', maxFontSize: '16px' });
    $("#mainslogan").fitText(0.8,{ minFontSize: '12px', maxFontSize: '16px' });
    $(".iconsubtitle").fitText(0.8,{ minFontSize: '10px', maxFontSize: '14px' });
    $("a.menu1 div.hider").height($("a.menu1 img.icon").height());
    $("a.menu2 div.hider").height($("a.menu2 img.icon").height());
    $("a.menu3 div.hider").height($("a.menu3 img.icon").height());
    $("a.menu4 div.hider").height($("a.menu4 img.icon").height());

    $("a.menu1").hover(

        function(e) {
            e.preventDefault();
            var scroller = $(this).find("div.scroller");
            var icon = $(this).find("img.icon");
            var height = icon.height();
            scroller.animate({
                top: "-="+height,
            }, 400 );
        }, function(e) {
            e.preventDefault();
            var scroller = $(this).find("div.scroller");
            var icon = $(this).find("img.icon");
            var height = icon.height();
            scroller.animate({
                top: "+="+height,
            }, 400 );
        }


    );

    $("a.menu2").hover(

        function(e) {
            e.preventDefault();
            var scroller = $(this).find("div.scroller");
            var icon = $(this).find("img.icon");
            var height = icon.height();
            scroller.animate({
                top: "-="+height,
            }, 400 );
        }, function(e) {
            e.preventDefault();
            var scroller = $(this).find("div.scroller");
            var icon = $(this).find("img.icon");
            var height = icon.height();
            scroller.animate({
                top: "+="+height,
            }, 400 );
        }


    );

    $("a.menu3").hover(

        function(e) {
            e.preventDefault();
            var scroller = $(this).find("div.scroller");
            var icon = $(this).find("img.icon");
            var height = icon.height();
            scroller.animate({
                top: "-="+height,
            }, 400 );
        }, function(e) {
            e.preventDefault();
            var scroller = $(this).find("div.scroller");
            var icon = $(this).find("img.icon");
            var height = icon.height();
            scroller.animate({
                top: "+="+height,
            }, 400 );
        }


    );

    $("a.menu4").hover(

        function(e) {
            e.preventDefault();
            var scroller = $(this).find("div.scroller");
            var icon = $(this).find("img.icon");
            var height = icon.height();
            scroller.animate({
                top: "-="+height,
            }, 400 );
        }, function(e) {
            e.preventDefault();
            var scroller = $(this).find("div.scroller");
            var icon = $(this).find("img.icon");
            var height = icon.height();
            scroller.animate({
                top: "+="+height,
            }, 400 );
        }


    );

    $("a.menu1").click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveTo("10reasons-section");
    });
    $("a.menu2").click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveTo("processes-section");
    });
    $("a.menu3").click(function(e){
        e.preventDefault();
        window.location = "/filingcabinet.html";
    });
    $("a.menu4").click(function(e){
        e.preventDefault();
        window.location = "/map.php";
    });
    $("a#topbox1").click(function(e){
        e.preventDefault();
        window.location = "/map.php";
    });

});






