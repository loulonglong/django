addtable(dataobj);
var labelRight = {
    normal: {
        position: 'right'
    }
};
var datatemp=[];
for(var i=1;i<dataobj.length;i++)
{
    if(dataobj[i][1]>0)
        datatemp.push({value:dataobj[i][1]});
    else
        datatemp.push({value:dataobj[i][1],label: labelRight});

}

option = {
    title: {
        text: titleobj.text,
        subtext:titleobj.subtext
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type : 'value',
        position: 'top',
        splitLine: {lineStyle:{type:'dashed'}},
    },
    yAxis: {
        type : 'category',
        axisLine: {show: false},
        axisLabel: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
        data : getoneculumn(dataobj,0)
    },
    series : [
        {
            name:seriesobj.name,
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}'
                }
            },
            data:datatemp
        }
    ]
};
