titleobj.text = '时间轴大数据量面积图';
seriesobj.name ="模拟数据";



var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var now = new Date(base += oneDay);

dataobj=[];
dataobj.push(['时间','数据']);
dataobj.push([[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),Math.round(Math.random() * 300)]);
for (var i = 1; i < 20000; i++) {
    now = new Date(base += oneDay);
    dataobj.push([[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),Math.round((Math.random() - 0.5) * 20 + dataobj[i - 1][1])]);
}
