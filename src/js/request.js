$(document).ready((function() {
  $("#formEmail").validate({
      rules: {
          message: "required",
          email: {
              required: !0,
              email: !0
          },
          name: {
              required: !0,
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
      submitHandler: function(e) {
          $("form").submit((function() {
              var e = $(this);
              return $.ajax({
                  type: "POST",
                  url: "./php/mail.php",
                  data: e.serialize()
              }).done((function() {
                  alert("Thank you!"),
                  setTimeout((function() {
                      e.trigger("reset")
                  }
                  ), 1e3)
              }
              )),
              !1
          }
          ))
      }
  })
}
))