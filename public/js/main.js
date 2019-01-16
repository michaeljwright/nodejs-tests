
(function($){

    function getStatus(lightId, url, status, frequency) {

        var timer = 120000; // set timer for 2mins (120000);
        var counter = 0; // set count for bad status

        var interval = setInterval(function() { // loop interval using specified frequency

            // ajax call to check status (url=http://example.com would be passed outside of testing)
            $.ajax({
                url: '/status/?code='+status,
                data: {},
                complete: function(xhr, statusText){

                    if(xhr.status != 200) {
                        counter++; // increment count
                        timer = timer - frequency; // reduce timer

                        if (counter >= 3 && timer <= 0) { // if 3 times status not equal to 200 for 2mins then (red light)
                            $('#t'+ lightId + ' div:nth-child(1)').removeClass('red-light-off').addClass('red-light-on');
                            $('#t'+ lightId + ' div:nth-child(2)').removeClass('green-light-on').addClass('green-light-off');
                            counter = 0; // reset counter
                            timer = 120000; // reset timer
                        }

                    } else { // if status equal to 200 then ok (green light)
                        $('#t'+ lightId + ' div:nth-child(1)').removeClass('red-light-on').addClass('red-light-off');
                        $('#t'+ lightId + ' div:nth-child(2)').removeClass('green-light-off').addClass('green-light-on');
                    }

                }
            });

        }, frequency);
    }

    $('#trafficLights div.traffic-light').each( function(index, item) {
        // get variables from nodejs generated div tags (each traffic light)
        var lightId = $(item).attr("data-id");
        var url = $(item).attr("data-url");
        var status = $(item).attr("data-status");
        var frequency = $(item).attr("data-frequency");

        // call getStatus function to start checking status
        getStatus(lightId, url, status, frequency);
    });

})(jQuery);
