addtable(dataobj);
var columntemp = getcolumnname(dataobj);

columntemp.splice(0,1);   //

columntemp = columntemp.map(function(item) {
    return item.text;
});
var seriestemp=[];
for(var i=0;i<columntemp.length;i++)
{
    seriestemp.push({
        name:columntemp[i],
        type: 'bar',
        data: getoneculumn(dataobj,i+1),
        animationDelay: function (idx) {
    return idx * 10;
}
    });
}

option = {
    title: {
        text: titleobj.text
    },
    legend: {
        data: columntemp,
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: getoneculumn(dataobj,0),
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: seriestemp,
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};