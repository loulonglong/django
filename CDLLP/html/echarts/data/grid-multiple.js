
addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});

option = {
    title: {
        text:titleobj.text,
        subtext:titleobj.subtext,
        left:titleobj.left,
        top:titleobj.top
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data:columntemp,
        x: 'left'
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    axisPointer: {
        link: {xAxisIndex: 'all'}
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [{
        left: 50,
        right: 50,
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '55%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: getoneculumn(dataobj,0)
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: getoneculumn(dataobj,0),
            position: 'top'
        }
    ],
    yAxis : [
        {
            name : columntemp[0],
            type : 'value',
            max : 500
        },
        {
            gridIndex: 1,
            name : columntemp[1],
            type : 'value',
            inverse: true
        }
    ],
    series : [
        {
            name:columntemp[0],
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:getoneculumn(dataobj,1)
        },
        {
            name:columntemp[1],
            type:'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: getoneculumn(dataobj,2)
        }
    ]
};