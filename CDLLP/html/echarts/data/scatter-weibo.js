addtable(dataobj);
itemStyle=[
    {
        normal: {
            shadowBlur: 2,
            shadowColor: 'rgba(37, 140, 249, 0.8)',
            color: 'rgba(37, 140, 249, 0.8)'
        }
    },
    {
        normal: {
            shadowBlur: 2,
            shadowColor: 'rgba(14, 241, 242, 0.8)',
            color: 'rgba(14, 241, 242, 0.8)'
        }
    },
    {
        normal: {
            shadowBlur: 2,
            shadowColor: 'rgba(255, 255, 255, 0.8)',
            color: 'rgba(255, 255, 255, 0.8)'
        }
    }];
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
        coordinateSystem: 'geo',
        symbolSize: 1,
        large: true,
        itemStyle: itemStyle[i],
        data:datatemp.arr
    })
});
//myChart.hideLoading();


option = {
    backgroundColor: '#404a59',
    title : {
        text: titleobj.text,
        subtext:titleobj.subtext,
        left:titleobj.left,
        top:titleobj.top,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {},
    legend: {
        left: 'left',
        data: legenddata,
        textStyle: {
            color: '#ccc'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: serisetemp
};