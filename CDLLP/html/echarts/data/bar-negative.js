addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});
var labletemp = [
   {
        normal: {
            show: true,
                position: 'inside'
        }
   },
    {
        normal: {
            show: true
        }
    },
    {
        normal: {
            show: true,
            position: 'left'
        }
    }
];
var seriestemp=[];
for(var i=0;i<columntemp.length;i++)
{
    seriestemp.push({
        name:columntemp[i],
        type:'bar',
        label:labletemp[i],
        data:getoneculumn(dataobj,i+1)
    });
}

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:columntemp
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : getoneculumn(dataobj,0)
        }
    ],
    series : seriestemp
};
