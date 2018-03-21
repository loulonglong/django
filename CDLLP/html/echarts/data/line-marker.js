addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});
var timetemp = getoneculumn(dataobj,0);
var serisetemp=[];
for(var i=0;i<columntemp.length;i++)
{
    serisetemp.push(
    {
        name:columntemp[i],
        type:'line',
        data:getoneculumn(dataobj,i+1),
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'},
            ]
        }
    })
}



option = {
    title: {
        text: titleobj.text,
        subtext: titleobj.subtext,
        left:titleobj.left,
        top:titleobj.top
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:columntemp
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: timetemp
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: serisetemp
};
