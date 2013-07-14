L.Control.Clock = L.Control.extend({
    options: {
        position: 'bottomright',
        title: 'Clock'
    },
    onAdd: function(map){
        var container = L.DomUtil.create('div','leaflet-control-clock');
        container.innerHTML = "<div id='leaflet-control-clock-time'></div>";
        return container
    }
});


function leaflet_control_clock(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    if(hour<10)
        hour = '0' + hour;
    if(minute<10)
        minute = '0' + minute;
    if(second<10)
        second = '0' + second;
    document.getElementById('leaflet-control-clock-time').innerHTML = hour + ":" + minute + ":" + second;
    setTimeout('leaflet_control_clock()',100);
}
