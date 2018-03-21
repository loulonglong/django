addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});

var seriestemp=[];
for(var i=0;i<columntemp.length;i++)
{
    seriestemp.push({
        name:columntemp[i],
        type:'bar',
        data:getoneculumn(dataobj,i+1),
        markPoint : {
            data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
            ]
        },
        markLine : {
            data : [
                {type : 'average', name: '平均值'}
            ]
        }
    });
}


option = {
    title : {
        text: titleobj.text,
        subtext: titleobj.subtext,
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:columntemp
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data :getoneculumn(dataobj,0)
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series :seriestemp
};
