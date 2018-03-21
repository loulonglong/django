addtable(dataobj);
//var columnname =getcolumnname();
var dataobj1 =getdataelseonerow(dataobj,0);

for(i=0;i<dataobj1.length;i++)
{
    dataobj1[i].push(1);
}
option = {
    animation: false,
    bmap: {
        center: [120.13066322374, 30.240018034923],
        zoom: 14,
        roam: true
    },
    visualMap: {
        show: false,
        top: 'top',
        min: 0,
        max: 5,
        seriesIndex: 0,
        calculable: true,
        inRange: {
            color: ['blue', 'blue', 'green', 'yellow', 'red']
        }
    },
    series: [{
        type: 'heatmap',
        coordinateSystem: 'bmap',
        data: dataobj1,
        pointSize: 5,
        blurSize: 6
    }]
};
if (!app.inNode) {
    // 添加百度地图插件
    var bmap = myChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
}

