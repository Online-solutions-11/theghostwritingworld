/*==============================================================*/
// Strax Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    
    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var phone_number = $("#phone_number").val();
        var message = $("#message").val();
        $.ajax({
            type: "POST",
            url: "assets/php/form-process.php",
            data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&phone_number=" + phone_number + "&message=" + message,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }
    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }
    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }
    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 text-left tada animated text-success";
        } else {
            var msgClasses = "h4 text-left text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    var popup = $('.popup-coupon');
     jQuery.validator.setDefaults({
    // errorClass: "error",
    rules: {
      name:{
        maxlength:40
      },
      email: {
      required: true,
      
    },
    phone: {
      required: true,
      
    },
    description:{
      maxlength: 200
    }
  },
  messages: {
    name: {
      required:"Please specify your name",
  },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "We need your phone number to contact you",
      phone: "Please Enter a valid Phone Number"
    },
    description:{
      maxlength: jQuery.validator.format("Maximum of 200 characters can be sent through this form! We will contact you for more detailed description!")
    }
  },
  onkeyup: false,
    submitHandler: function(form,e) {
        e.preventDefault();
      $.ajax({
        type: "POST",
        cache: false,
        dataType: "json",
        url: "https://www.divineghostwriters.com/lpassetsnew/email.php",
        data: $(form).serialize(),
        timeout: 3000
      }).done(function(msg) {
        // console.log(msg);
        if (msg.success == true) {
          console.log(msg);
          $('.floatbutton').removeClass('active');
           window.location.href = "https://www.divineghostwriters.com/thank-you";
          
          popup.removeClass('pop-active');
        }
        
      }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText)
         
        // log the error to the console
        console.log(
          "Error: " + jqXHR.responseText
        );
        console.error(
          "The following error occurred: " + jqXHR, textStatus, errorThrown
        );
      });
      return false;
    }
  });
    
    // $("#contactForm").validator().on("submit", function (event) {
    //     if (event.isDefaultPrevented()) {
    //         // handle the invalid form...
    //         formError();
    //         submitMSG(false, "Did you fill in the form properly?");
    //     } else {
    //         // everything looks good!
    //         event.preventDefault();
    //         submitForm();
    //     }
    // });
    $("#contactForm").validate();
    $("#home-sticky-form").validate();
    $("#popup-coupon-form").validate();
    
      // popup to appear on click when clicked on specific classes buttons
    $('.popup-show').click(function(e) {
        e.preventDefault();
        // popup_on_click.css("display","block");
        popup.addClass('pop-active');
    });
    // Hide Popup
    $('.close-pop').click(function(e) {
      e.preventDefault();
      // popup_on_click.css("display","none");
      popup.removeClass('pop-active');
    });
}(jQuery)); // End of use strict