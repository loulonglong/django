titleobj.text = '极坐标双数值轴';
seriesobj.name = "极坐标数据";

dataobj=[];
dataobj.push(['长度','角度','数据类型']);
for (var i = 0; i <= 360; i++) {
    var t = i / 180 * Math.PI;
    var r = 4*Math.sin(2 * t) * Math.cos(2 * t);
    dataobj.push([r, i,'花瓣图']);
}
for (var i = 0; i <= 100; i++) {
    var theta = i / 100 * 360;
    var r = (1 + Math.sin(theta / 180 * Math.PI));
    dataobj.push([r, theta,'爱心图']);
}