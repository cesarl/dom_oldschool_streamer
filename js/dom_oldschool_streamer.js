var DomOldSchoolStreamer = {};

DomOldSchoolStreamer.launch = function (domElem, callback) {
    var speed = domElem.attr("speed");
    speed = +speed;
    if (!speed)
	speed = 15;
    var raw = domElem.attr("data-txt");
    if (!raw)
	return;
    var data = raw.split("");
    var txt = "";
    var counter = 0;
    var len = data.length;
    var inter = window.setInterval(function() {
	if (counter >= len)
	{
	    window.clearInterval(inter);
	    if (callback)
		callback();
	    return;
	}
	txt += data[counter];
	domElem.text(txt);
	counter++;
    }, speed);
}