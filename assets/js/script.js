
$(document).ready(function ($) {
    var dicionario = Dicionario;
    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        console.log("chamou")
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });
   
    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    $(".select ul").on("click", ".init", function() {
        $(this).closest("ul").children('li:not(.init)').toggle();
    });
    
    var allOptions = $(".select ul").children('li:not(.init)');
    $(".select ul").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $(".select ul").children('.init').html($(this).html());
        allOptions.toggle();
    });
    

    var _t = $('body').translate({lang: "pt", t: dicionario.returnT()});
    var str = _t.g("translate");
  
    $(".li-click").click(function(ev) {
      var lang = $(this).attr("data-value");
      _t.lang(lang);
      ev.preventDefault();
    });
});