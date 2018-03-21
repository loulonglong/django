addtable(dataobj);
//查询列名（参数）
var columntemp = getcolumnname(dataobj);
//查询类目  最后一个类目
var legenddata = getlegend(dataobj,columntemp.length-1);
//数据分类
var dataobjtemp = getdataforlegend(dataobj,legenddata,columntemp.length-1);

var serisetemp=[];
dataobjtemp.forEach(function(datatemp,i){
    serisetemp.push({
        name: datatemp.name,
        type: 'scatter',
        markArea: {
            silent: true,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 1,
                    borderType: 'dashed'
                }
            },
            data: [[{
                name:datatemp.name,
                xAxis: 'min',
                yAxis: 'min'
            }, {
                xAxis: 'max',
                yAxis: 'max'
            }]]
        },
        markPoint : {
            data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
            ]
        },
        markLine : {
            lineStyle: {
                normal: {
                    type: 'solid'
                }
            },
            data : [
                {type : 'average', name: '平均值'},
                { xAxis: 160+10*i }
            ]
        },
        data:datatemp.arr
    })
});
option = {
    title : {
        text: titleobj.text,
        subtext: titleobj.subtext
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        // trigger: 'axis',
        showDelay : 0,
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {
    },
    legend: {
        data:legenddata,
        left: 'center'
    },
    xAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} cm'
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} kg'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series :serisetemp
};
