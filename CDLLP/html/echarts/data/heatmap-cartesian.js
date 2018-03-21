addtable(dataobj);
var datalegengd = data2griddata(dataobj,0,1);
var xlegengd = datalegengd[0];
var ylegengd = datalegengd[1];
var dataobj1 =getdataelseonerow(dataobj,0);
for(var i=0;i<dataobj1.length;i++)
{
    if(dataobj1[i][2] ==0)
        dataobj1[i][2]='-'
}
option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        y: '10%'
    },
    xAxis: {
        type: 'category',
        data: xlegengd,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: ylegengd,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: dataobj1,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};