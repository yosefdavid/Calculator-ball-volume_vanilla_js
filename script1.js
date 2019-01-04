
function volume_by_radius(radius) {
    var volume = ((4 * Math.PI * Math.pow(radius, 3)) / 3);
    return volume;
}

function calculated_volume_buuton() {
    var radius = document.forms["ball_calculator_form"]["radius_input"].value;
    var c = document.getElementById('my_canvas');
    var c_x = c.width / 2;
    var c_y = c.height / 2;

    if (isNaN(radius)) {
        document.getElementById('msg_span').innerHTML = "נא לרשום מספרים בלבד!";
    }

    else {

        if (radius * 2 > c.height) {
            document.getElementById('msg_span').innerHTML = "רדיוס שהוזן גדול מידי - הקטן רדיוס"
        }

        else {
            document.getElementById('msg_span').innerHTML = "נפח הכדור: " + volume_by_radius(radius);

            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(c_x, c_y, radius, 0, 2 * Math.PI);
            ctx.stroke();
        }

    }
}

function resat_button() {
    document.getElementById('msg_span').innerHTML = null;
    var c = document.getElementById('my_canvas');
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}












