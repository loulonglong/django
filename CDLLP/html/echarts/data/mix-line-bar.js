addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});



option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:columntemp
    },
    xAxis: [
        {
            type: 'category',
            data: getoneculumn(dataobj,0),
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: columntemp[0]+"和"+columntemp[1],
            min: 0,
            max: 250,
           // interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: columntemp[2],
            min: 0,
            max: 25,
           // interval: 5,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:columntemp[0],
            type:'bar',
            data:getoneculumn(dataobj,1)
        },
        {
            name:columntemp[1],
            type:'bar',
            data:getoneculumn(dataobj,2)
        },
        {
            name:columntemp[2],
            type:'line',
            yAxisIndex: 1,
            data:getoneculumn(dataobj,3)
        }
    ]
};
