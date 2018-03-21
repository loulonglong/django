addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});


var serisetemp=[];
for(var i=0;i<columntemp.length;i++)
{
    serisetemp.push({
        name:columntemp[i],
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:getoneculumn(dataobj,i+1)
    })
}

option = {
    title: {
        text:titleobj.text
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:columntemp
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : getoneculumn(dataobj,0)
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : serisetemp
};
