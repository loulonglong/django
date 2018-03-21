var columntemp =getcolumnname(dataobj);

var maxdata =getonerow(dataobj,1);//取第二行为峰值数据
var dataobj1 = getdataelseonerow(dataobj,1);
maxdata.splice(maxdata.length-1,1);   //删除最后一个

addtable(dataobj1);

var colorarr=['#F9713C','#B3E4A1','rgb(238, 197, 102)'];
//查询类目  最后一个类目
var legenddata = getlegend(dataobj1,columntemp.length-1);
//数据分类
var dataobjtemp = getdataforlegend(dataobj1,legenddata,columntemp.length-1);
var serisetemp=[];
dataobjtemp.forEach(function(datatemp,i){
    serisetemp.push({
        name: datatemp.name,
        type: 'radar',
        data: datatemp.arr
    })
});


option = {
    title: {
        text: titleobj.text
    },
    tooltip: {},
    legend: {
        data:legenddata
    },
    radar: {
        // shape: 'circle',
        indicator: maxdata.map(function(item,i){
            return {name: item, max: maxdata[i]}
        }),
    },
    series: serisetemp
};