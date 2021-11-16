$('.navbar-bar').click(function () {
    $('.navbar-content').addClass('show-navbar');
    $('.navbar-content').removeClass('hide-navbar')
})
$('.navbar-close').click(function () {
    $('.navbar-content').removeClass('show-navbar');
    $('.navbar-content').addClass('hide-navbar')
});
$(".text-ques").eq(2).slideDown("slow"), $(".text-ques").eq(2).attr("data-status", "block"), $(".list-ques li").each(function (t) {
    $(this).click(function () {
        var t = $(this).attr("data-ques");
        $(".text-ques").each(function () {
            if ($(this).attr("id") == t) {
                var a = $(this).attr("data-status");
                "block" == a ? ($(this).slideUp("slow"), $(this).attr("data-status", "none")) : "none" == a && ($(".text-ques").slideUp("slow"), $(this).slideDown("slow"), $(".text-ques").each(function () {
                    $(this).attr("data-status", "none")
                }), $(this).attr("data-status", "block"))
            }
        })
    })
})
function validate(evt) {
    var theEvent = evt || window.event; if (theEvent.type === 'paste') { key = event.clipboardData.getData('text/plain'); } else { var key = theEvent.keyCode || theEvent.which; key = String.fromCharCode(key); }
    var regex = /[0-9()]|\+/; if (!regex.test(key)) { theEvent.returnValue = false; if (theEvent.preventDefault) theEvent.preventDefault(); }
};
var btn = $('#button_scroll_top');
$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        btn.addClass('show')
    } else {
        btn.removeClass('show')
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300')
})

$(window).scroll(function () { var e = $(".footer").offset().top, o = ($(".footer").outerHeight(), $(".box-banner-sidebar").offset().top), r = $(".box-banner-sidebar").outerHeight(), a = $(window).height(), s = $(this).scrollTop(); console.log("wS: " + s), console.log(o + r - a + 90), s > o + r - a + 90 ? $(".banner-sidebar").addClass("active-sidebar") : $(".banner-sidebar").removeClass("active-sidebar"), s > e - a && $(".banner-sidebar").removeClass("active-sidebar") });
