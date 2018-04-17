$(document).ready(function() {
    var topnav = $(".js-stacks-topbar");
    var topnavHeight = topnav.outerHeight();
    var banner = $(".js-notice-banner");
    var bannerHeight = banner.outerHeight();
    var toast = $(".js-notice-toast");
    var closeBtn = $(".js-notice-close");

    $(".js-notice-banner-open").click(function(e) {
        topnav.css("top","").show();
        banner.attr("aria-hidden","false").removeClass("s-notice__danger is-pinned");
    });

    $(".js-notice-banner-pinned-open").click(function(e) {
        topnav.css("top", bannerHeight + "px").show();
        banner.attr("aria-hidden","false").addClass("s-notice__danger is-pinned");
    });

    $(".js-notice-toast-open").click(function(e) {
        var attr = banner.attr("aria-hidden");
        var toastOffset = topnavHeight + bannerHeight + 16 + "px";

        if (typeof attr !== typeof undefined && attr == "false") {
            toast.css("top", toastOffset);
        }
        else {
            toast.css("top","");
        }

        toast.queue(function() {
                $(this).attr("aria-hidden","false").dequeue();
            })
            .delay(3000)
            .queue(function(e) {
                $(this).attr("aria-hidden","true").dequeue();
            });
    });

    closeBtn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        toast.attr("aria-hidden","true");
        topnav.css("top","").hide();
        banner.attr("aria-hidden","true").removeClass("s-notice__danger is-pinned");
    });


    var hero = $(".js-banner-hero");
    var heroSmall = $(".js-banner-sm");
    var heroBtn = $(".js-banner-show-hero");
    var heroTypeMenu = $(".js-hero-type-menu");
    var heroPositionMenu = $(".js-hero-position-menu");
    var heroHeight = hero.innerHeight();

    heroBtn.on("click", function() {
        var typeSelect = heroTypeMenu.find(":selected").data("class");
        var positionSelect = heroPositionMenu.find(":selected").data("class");
        var typeClasses = ("s-banner__bgg-info s-banner__bgg-important s-banner__bgg-danger s-banner__bgg-success s-banner__bgg-brand");

        hero
            .attr("aria-hidden","false")
            .removeClass(typeClasses)
            .addClass(typeSelect, positionSelect)
            .css({
                "position": "fixed",
                "top": "-4vw",
                "left": "0",
                "right": "0"
            });
        heroSmall
            .attr("aria-hidden","false")
            .removeClass(typeClasses)
            .addClass(typeSelect, positionSelect)
            .css({
                "position": "fixed",
                "top": heroHeight - 91,
                "left": "0",
                "right": "0"
            });
    })
});
