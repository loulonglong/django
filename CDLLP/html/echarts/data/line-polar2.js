addtable(dataobj);
var columntemp = getcolumnname(dataobj);
var legendtemp = getlegend(dataobj,columntemp.length-1);
//数据分类
var dataobjtemp = getdataforlegend(dataobj,legendtemp,columntemp.length-1);
var serisetemp=[];
dataobjtemp.forEach(function(datatemp){
    serisetemp.push({
        coordinateSystem: 'polar',
        name: datatemp.name,
        type: 'line',
        showSymbol: false,
        data: datatemp.arr
    })
});


option = {
    title: {
        text:titleobj.text
    },
    legend: {
        data: legendtemp
    },
    polar: {
        center: ['50%', '54%']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    angleAxis: {
        type: 'value',
        startAngle: 0
    },
    radiusAxis: {
        min: 0
    },
    series: serisetemp,
    animationDuration: 2000
};