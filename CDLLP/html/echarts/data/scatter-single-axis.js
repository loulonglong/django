addtable(dataobj);
var ydata = getlegend(dataobj,0);
var xdata = getlegend(dataobj,1);

option = {
    tooltip: {
        position: 'top'
    },
    title: [],
    singleAxis: [],
    series: []
};

echarts.util.each(ydata, function (yitem, idx) {
    option.title.push({
        textBaseline: 'middle',
        top: (idx + 0.5) * 100 / ydata.length + '%',
        text: yitem
    });
    option.singleAxis.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        data: xdata,
        top: (idx * 100 / ydata.length + 5) + '%',
        height: (100 / ydata.length - 10) + '%',
        axisLabel: {
            interval: 2
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
        symbolSize: function (dataItem) {
                return dataItem[1] * 4;
        }
    });
});

echarts.util.each(dataobj, function (dataItem) {
    for(var i=0;i<ydata.length;i++)
    {
        if(ydata[i]==dataItem[0])
        {
            option.series[i].data.push([dataItem[1], dataItem[2]]);
            break;
        }
    }

});
