addtable(dataobj);

var max = -Infinity;
var min = Infinity;
dataobj.forEach(function (itemOpt) {
    if (itemOpt[2] > max) {
        max = itemOpt[2];
    }
    if (itemOpt[2] < min) {
        min = itemOpt[2];
    }
});
option = {
    backgroundColor: '#404a59',
    title : {
        text: titleobj.text,
        subtext: titleobj.subtext,
        left: titleobj.left,
        top: titleobj.top,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
    },
    visualMap: [{
        show: false,
        calculable: true,
        dimension: 2,
        min: min,
        max: max,
        inRange: {
            symbolSize: [6, 60]
        }
    },
        {
            show: false,
            dimension: 2,
            calculable: true,
            min: min,
            max: max,
            inRange: {
                color: ['#1eff00', '#fdfa00', '#ff0000']
            }
        }
    ],
    geo: {
        type: 'map',
        map: 'world',
        roam: true,
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
    series : [
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            data:dataobj
        }
    ]
};