addtable(dataobj);
//查询列名（参数）
var columntemp = getcolumnname(dataobj);
//第一列横坐标
xAxisobj.name = columntemp[0].name;
//第二列纵坐标
yAxisobj.name = columntemp[1].name;
//查询类目  最后一个类目
var legenddata = getlegend(dataobj,columntemp.length-1);

//数据分类
var dataobjtemp = getdataforlegend(dataobj,legenddata,columntemp.length-1);
var serisetemp=[];
dataobjtemp.forEach(function(datatemp){
    serisetemp.push({
        name:datatemp.name,
        type:'scatter',
        large: true,
        symbolSize: 2,
        data:datatemp.arr
    })
});


option = {
    title: {
        text: titleobj.text
    },
    tooltip : {
        trigger: 'axis',
        showDelay : 0,
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        },
        zlevel: 1
    },
    legend:{
        data:legenddata
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis : [
        {
            type : 'value',
            scale:true
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true
        }
    ],
    series : serisetemp
};
