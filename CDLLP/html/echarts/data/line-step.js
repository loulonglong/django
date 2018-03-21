addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});

var step=['start','middle','end'];
var serisetemp=[];
for(var i=0;i<columntemp.length;i++)
{
    serisetemp.push({
        name:columntemp[i],
        type:'line',
        step: step[i],
        data:getoneculumn(dataobj,i+1)
    })
}


option = {
    title: {
        text:titleobj.text
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:columntemp
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: getoneculumn(dataobj,0)
    },
    yAxis: {
        type: 'value'
    },
    series:serisetemp
};
