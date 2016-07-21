(function($, W, D) {
    var JQUERY4U = {};

    JQUERY4U.UTIL = {
        setupFormValidation: function() {
            //form validation rules
            $("#mailer-form").validate({
                rules: {
                    //    firstname: "required",
                    //  lastname: "required",
                    email: {
                        required: true,
                        email: true
                    }
                    // password: {
                    //    required: true,
                    //  minlength: 5,
                    //  },
                },
                messages: {
                    //    firstname: "Please enter your firstname",
                    //  lastname: "Please enter your lastname",
                    //  password: {
                    //    required: "Please provide a password",
                    //  minlength: "Your password must be at least 5 characters long"
                    //  },
                    email: "Please enter a valid email address"
                },
                submitHandler: function(form) {
                 form.submit();
                      console.log("form called")


                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);
