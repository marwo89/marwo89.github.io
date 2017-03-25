$('#query').keyup(function(){
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");

    $.getJSON("https://autocomplete.wunderground.com/aq?query="
              + value + "&cb=?", function (data) {

        console.log(data);

        var output = '<ol>';
        $.each(data.RESULTS,function (key, val){
            if (val.name.search(rExp) != -1){
                output += '<li>';
                output += '<a href="https://api.wunderground.com/api/174f87819a8d5765/geolookup/forecast/conditions/q/' +
                    val.lat + ',' + val.lon + '.json" title="See results for ' + val.name + '">' + val.name + '</a>';


                output += '</li>';
            }
        });
        output += '</ol>';
        $("#results").fadeIn();
        $("#results").html(output);

    });

   // $('#resutls').click(funciton (){
                       // $('#results').fadeout();
    $(function(){
        $("#results").on('click','a', function(evt){
            evt.preventDefault();


            var my_url = $(this).attr("href");
            console.log(my_url);
            $.ajax ({
                url: my_url,
                dataType:"jsonp",
                success: function (data){
                    console.log(data);

                    var location = data.location.city + ", " + data.location.state;
                    console.log(location);
                    var city = $('#cityDisplay');
                    var cityT = $('title');
                    city.text(location);
                    cityT.html(location + " | go2 weather" );
                    var temper = data.current_observation.temp_f;
                    var temp = $("#currentTemp");
                    temp.text(temper + "°");

                    var summary = data.current_observation.weather;
                    var summaryH = $('#summary');
                    summaryH.text(summary);

                    var high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
                    var highH = $('#add1');
                    highH.text("high:" + high + "°");

                    var low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
                    var lowH = $('#add2');
                    lowH.text('Low:' + low + "°");
                    var humid = data.current_observation.relative_humidity;
                    var humidH = $('#add3');
                    humidH.text('Humidity:' + humid);
                    $("#results").fadeOut();
                }





            });
        });

});

});
