        

            $(document).ready(function(){
                $("#loginButton").click(function(){
                    $("#loginModal").modal();
                    });
                });

        //script for Signup Modal
                $(document).ready(function(){
                $("#SignupButton").click(function(){
                    $("#signupModal").modal();
                    });
                });

       $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });