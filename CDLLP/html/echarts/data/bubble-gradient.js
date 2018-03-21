addtable(dataobj);
itemStyle = [{
    normal: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
            offset: 0,
            color: 'rgb(251, 118, 123)'
        }, {
            offset: 1,
            color: 'rgb(204, 46, 72)'
        }])
    }
},
    {
        normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(129, 227, 238)'
            }, {
                offset: 1,
                color: 'rgb(25, 183, 207)'
            }])
        }
    }
];

//查找最大值，用来归一化图标大小
var maxdata = dataobj[1][2];
for(var i=1;i<dataobj.length;i++)
{

    try{
        if(dataobj[i][2]>maxdata)
        maxdata =  dataobj[i][2];
    }
    catch (err)
    {}
}
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
        data: datatemp.arr,
        type: 'scatter',
        symbolSize: function (data) {
            return data[2]/maxdata*seriesobj.symbolSize;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    var str="";
                    for(var i=0;i<columntemp.length;i++)
                    {
                        str+=columntemp[i].text+"："+param.data[i]+"\n";
                    }
                    return str;
                },
                position: 'top'
            }
        },
        itemStyle: itemStyle[i],
    })
});




option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: titleobj.text
    },
    legend: {
        right: 10,
        data: legenddata
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: serisetemp
};