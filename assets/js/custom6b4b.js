jQuery(document).ready(function() {
    $("#dp-next").click(function() {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function(index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
        });
        detect_active();
    });
    $("#dp-prev").click(function() {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function(index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
        });
        detect_active();
    });
    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function() {
        var get_slide = $(this).attr("data-class");
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function(index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
        });
        detect_active();
    });
    
    function equal_height(attr){
      var regExp = /[.]/;
      var attr = attr;
      if(!regExp.test(attr)){
       /* do something if letters are not found in your string */
       attr = '.'+attr;
      }
      let height = [];
      $( attr ).each(function( index ) {
        height.push($(this).height());
        
      });
      new_height = Math.max.apply(Math,height);
      $(attr).height(new_height)
    }
    
    // equal_height('eq-height-col')

    $( window ).resize(function() {
     // equal_height('eq-height-col') 
    });
    
});