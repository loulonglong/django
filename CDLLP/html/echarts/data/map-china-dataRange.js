addtable(dataobj);
var columntemp = getcolumnname(dataobj);
columntemp.splice(0,1);   //
columntemp = columntemp.map(function(item) {
    return item.text;
});
var maxdata=-Infinity;
var mindata=Infinity;
var namearr =getoneculumn(dataobj,0);
var seriestemp=[];
for(var i=0;i<columntemp.length;i++)
{
   var maxmin = getcolumnmaxmin(dataobj,i+1);
    if(maxdata<maxmin[0])
          maxdata = maxmin[0];
    if(mindata>maxmin[1])
        mindata = maxmin[1];
    seriestemp.push({
        name:columntemp[i],
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data:getoneculumn(dataobj,i+1).map(function(item,t)
        {
            return {name: namearr[t],value:item }
        }

        )
    });
}


option = {
    title: {
        text: titleobj.text,
        subtext: titleobj.subtext,
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:columntemp,
        selectedMode:'single'
    },
    visualMap: {
        min: mindata,
        max: maxdata,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: seriestemp
};