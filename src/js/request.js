$(document).ready((function() {
  $("#formEmail").validate({
      rules: {
          message: "required",
          email: {
              required: true,
              email: true
          },
          name: {
              required: true,
              minlength: 2
          }
      },
      messages: {
          email: {
              required: "We need your email address to contact you",
              email: "Your email address must be in the format of name@domain.com"
          },
          message: "Please let your message here",
          name: {
              required: "Please specify your name",
              minlength: jQuery.validator.format("At least 2 characters required!")
          }
      },
      submitHandler: function(form) {
        return $.ajax({
            type: "POST",
            url: "./php/mail.php",
            data: $(form).serialize()
        }).done(function() {
            alert("Thank you!"),
            setTimeout((function() {
                $("#formEmail")[0].reset()
            }), 200)
        }),
        false
      }
  })
}
))