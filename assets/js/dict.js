$(function() {

    var t = {
      "Select_Lenguage": {
        pt: "Selecionou Portugues",
        en: "Select English"
      }
    };
    var _t = $('body').translate({lang: "pt", t: t});
    var str = _t.g("translate");
  
    $(".lang_selector").click(function(ev) {
      var lang = $(this).attr("data-value");
      _t.lang(lang);
      ev.preventDefault();
    });
  });