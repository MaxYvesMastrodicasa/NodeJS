//Hook up the tweet display

$(document).ready(function() {
                           
    $(".countdown").countdown({
                date: "01 July 2024 22:31:00",
                format: "on"
            },
            
            function() {
                // callback function
            });

}); 