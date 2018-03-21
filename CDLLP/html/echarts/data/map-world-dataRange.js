addtable(dataobj);
var maxmin = getcolumnmaxmin(dataobj,1);
var columntemp =getcolumnname(dataobj);
seriesobj.name = columntemp[1];
var dataobj1 = getdataelseonerow(dataobj,0);

option = {
    title: {
        text: titleobj.text,
        subtext:titleobj.subtext,
        left:titleobj.left,
        top: titleobj.top
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    + '.' + value[1];
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
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
    visualMap: {
        min: maxmin[1],
        max: maxmin[0],
        text:['High','Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['lightskyblue','yellow', 'orangered']
        }
    },
    series: [
        {
            name:  seriesobj.name,
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            data:dataobj1.map(function (item) {
                return {name: item[0], value: item[1]}
            })
        }
    ]
};
