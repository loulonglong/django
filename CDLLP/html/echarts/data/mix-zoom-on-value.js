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
        type:'bar',
        data:getoneculumn(dataobj,i+1),
    });
}


option = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    legend: {
        data:columntemp,
        itemGap: 5
    },
    grid: {
        top: '12%',
        left: '1%',
        right: '10%',
        containLabel: true
    },
    xAxis: [
        {
            type : 'category',
            data :getoneculumn(dataobj,0)
        }
    ],
    yAxis: [
        {
            type : 'value',
            name : yAxisobj.name,
            axisLabel: {
                formatter: function (a) {
                    a = +a;
                    return isFinite(a)
                        ? echarts.format.addCommas(+a / 1000)
                        : '';
                }
            }
        }
    ],
    dataZoom: [
        {
            show: true,
            start: 94,
            end: 100
        },
        {
            type: 'inside',
            start: 94,
            end: 100
        },
        {
            show: true,
            yAxisIndex: 0,
            filterMode: 'empty',
            width: 30,
            height: '80%',
            showDataShadow: false,
            left: '93%'
        }
    ],
    series : seriestemp
};
