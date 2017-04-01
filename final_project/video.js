$.getJSON("video.json", function (data) {
    console.log(data);

    var bigvid = "<video controls preload='metadata'" + " " + "src='" + data.Big.video + "'></video>";

    var shotvid = "<video controls preload='metadata'" + " " + "src='" + data.Shot.video + "'></video>";
    var name = data.Big.first + " " + data.Big.last;
    var name2 = data.Shot.first + " " + data.Shot.last;


        $("#name").text(name);
        $("#big").html(bigvid);
        $("#name2").text(name2);
        $("#shot").html(shotvid);
});
