addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});

option = {
    title: {
        text: titleobj.text,
        subtext: titleobj.subtext,
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data:[columntemp[1],columntemp[2]]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data :  getoneculumn(dataobj,0)
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: columntemp[0],
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: getoneculumn(dataobj,1)
        },
        {
            name: columntemp[1],
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: getoneculumn(dataobj,2)
        },
        {
            name: columntemp[2],
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            },
            data: getoneculumn(dataobj,3)
        }
    ]
};
