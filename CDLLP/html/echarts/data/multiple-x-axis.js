addtable(dataobj);

var columntemp = getcolumnname(dataobj);

var legendtemp = getlegend(dataobj,columntemp.length-1);
var colors = ['#5793f3', '#d14a61', '#675bba'];

var datatemp = getdataforlegend(dataobj,legendtemp,columntemp.length-1);
var xAxistemp = [];
var seriestemp=[];
for(var i=0;i<datatemp.length;i++)
{
    xAxistemp.push({
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[i]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return params.value + '：' + params.seriesData[0].data;
                    }
                }
            },
            data: getoneculumn(datatemp[i].arr,0)
        }
    );


    seriestemp.push(
        {
            name:legendtemp[i],
            type:'line',
            xAxisIndex: i,
            smooth: true,
            data: getoneculumn(datatemp[i].arr,1)
        }
    );
}



option = {
    color: colors,

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:legendtemp
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: xAxistemp,
    yAxis: [
        {
            type: 'value'
        }
    ],
    series:seriestemp
};

