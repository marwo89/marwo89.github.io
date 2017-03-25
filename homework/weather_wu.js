// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API
    function getData(lat, long) {
        $.ajax({
            url: "https://api.wunderground.com/api/174f87819a8d5765/geolookup/conditions/q/" + lat + "," + long + ".json",

            dataType: "jsonp",
            success: function (data){
                console.log(data)

                var location = data.location.city + ", " + data.location.state;
                console.log(location)
                var city = $('#cityDisplay');
                var cityT = $('title');
                city.text(location);
                cityT.prepend(location + " ");
                var temper = data.current_observation.temp_f;
                var temp = $("#currentTemp");
                temp.text(temper + "°");

                var summary = data.current_observation.weather;
                var summaryH = $('#summary');
                summaryH.text(summary);

                var wind = data.current_observation.wind_gust_mph;
                var windH = $('#add1');
                windH.text(wind + "mph");

                var wdir = data.current_observation.wind_dir;
                var wdirH = $('#add2');
                wdirH.text('Wind Direciton:' + wdir)
                var humid = data.current_observation.relative_humidity;
                var humidH = $('#add3');
                humidH.text('Humidity:' + humid);


                $("#cover").fadeOut(250);
            }
        });

    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});
