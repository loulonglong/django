addtable(dataobj);
var datalegengd = data2griddata(dataobj,0,1);
var xlegengd = datalegengd[0];
var ylegengd = datalegengd[1];
var dataobj1 =getdataelseonerow(dataobj,0);

option = {
    tooltip: {},
    grid: {
        right: 10,
        left: 140
    },
    xAxis: {
        type: 'category',
        data: xlegengd
    },
    yAxis: {
        type: 'category',
        data: ylegengd
    },
    visualMap: {
        type: 'piecewise',
        min: 0,
        max: 1,
        calculable: true,
        realtime: false,
        splitNumber: 8,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    series: [{
        name: 'Gaussian',
        type: 'heatmap',
        data: dataobj1,
        itemStyle: {
            emphasis: {
                borderColor: '#333',
                borderWidth: 1
            }
        },
        progressive: 1000,
        animation: false
    }]
};
