
jQuery(document).ready(function ($) {
    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        console.log("chamou")
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });


    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1200);
    });
});