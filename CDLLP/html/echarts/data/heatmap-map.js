addtable(dataobj);
var dataobj1 =getdataelseonerow(dataobj,0);

var maxmin = getcolumnmaxmin(dataobj1,2);
option = {
    title: {
        text:titleobj.text,
        subtext: titleobj.subtext,
        left: titleobj.left,
        top: titleobj.top,
        textStyle: {
            color: '#fff'
        }
    },
    backgroundColor: '#404a59',
    visualMap: {
        min: maxmin[0],
        max: maxmin[1],
        splitNumber: 5,
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'].reverse()
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
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
    series: [{
        name: seriesobj.name,
        type: 'heatmap',
        coordinateSystem: 'geo',
        data:dataobj1
    }]
};