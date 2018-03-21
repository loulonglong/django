addtable(dataobj);
var maxmin = getcolumnmaxmin(dataobj,1);
var max = maxmin[0];
var min = maxmin[1];
option = {
    title: {
        text: titleobj.text,
        subtext: titleobj.subtext,
        left: titleobj.left,
        top: titleobj.top
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: getoneculumn(dataobj, 0)
    },
    yAxis: {
        splitLine: {
            show: false
        }
    },
    toolbox: {
        left: 'center',
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: [
        {
            start: 95,
            end: 100
         },
        {
        type: 'inside'
    }],
    visualMap: {
        top: 10,
        right: 10,
        pieces: [{
            gt: 0,
            lte: Math.round((max-min)*1/70)*10,
            color: '#096'
        }, {
            gt: Math.round((max-min)*1/70)*10,
            lte: Math.round((max-min)*2/70)*10,
            color: '#ffde33'
        }, {
            gt: Math.round((max-min)*2/70)*10,
            lte: Math.round((max-min)*3/70)*10,
            color: '#ff9933'
        }, {
            gt:Math.round((max-min)*3/70)*10,
            lte:Math.round((max-min)*4/70)*10,
            color: '#cc0033'
        }, {
            gt: Math.round((max-min)*4/70)*10,
            lte: Math.round((max-min)*5/70)*10,
            color: '#660099'
        }, {
            gt: Math.round((max-min)*5/70)*10,
            color: '#7e0023'
        }],
        outOfRange: {
            color: '#999'
        }
    },
    series: {
        name: seriesobj.name,
        type: 'line',
        data: getoneculumn(dataobj, 1),
        markLine: {
            silent: true,
            data: [{
                yAxis: Math.round((max-min)*1/70)*10,
            }, {
                yAxis: Math.round((max-min)*2/70)*10,
            }, {
                yAxis: Math.round((max-min)*3/70)*10,
            }, {
                yAxis: Math.round((max-min)*4/70)*10,
            }, {
                yAxis: Math.round((max-min)*5/70)*10,
            }]
        }
    }
};