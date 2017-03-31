$.getJSON("loc.json", function (data) {
console.log(data);
    var location = data.Kona.City + ', ' + data.Kona.State;
    var temp_f = data.Kona.Current_temp;
    console.log('Location is: ' + location);
    console.log('Temp is: ' + temp_f);

    var location1 = data.Hilo.City + ', ' + data.Kona.State;
    var temp_f1 = data.Hilo.Current_temp;
    console.log('Location is: ' + location1);
    console.log('Temp is: ' + temp_f1);

    var location2 = data.Kohala.City + ', ' + data.Kona.State;
    var temp_f2 = data.Kohala.Current_temp;
    console.log('Location is: ' + location2);
    console.log('Temp is: ' + temp_f2);

    var location3 = data.South_Point.City + ', ' + data.Kona.State;
    var temp_f3 = data.South_Point.Current_temp;
    console.log('Location is: ' + location3);
    console.log('Temp is: ' + temp_f3);







    $("#Kona").text(location);
     $("#kn1").text("Current Temperature: " + temp_f + " " +  "°");

    $("#Hilo").text(location1  + " " + "Current Temperature: " + temp_f1 + " " +  "°");
    $("#hl1").text("Current Temperature: " + temp_f + " " +  "°");

    $("#Kohala").text(location2  + " " + "Current Temperature: " + temp_f2 + " " +  "°");
    $("#kh1").text("Current Temperature: " + temp_f + " " +  "°");

    $("#South_Point").text(location3  + " " + "Current Temperature: " + temp_f3 + " " +  "°");
    $("#sp1").text("Current Temperature: " + temp_f + " " +  "°");

});


/*var jqxhr = $.getJSON( "loc.json", function(data) {
    console.log( "success : " + data);
}).fail(function(jqxhr, tatus, error) {
    console.log( "error :" + error );
}).always(function() {
    console.log( "complete" );
});*/

