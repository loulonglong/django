addtable(dataobj);
option = {
    backgroundColor: '#404a59',
    title: {
        text: titleobj.text,
        subtext:titleobj.subtext,
        left:titleobj.left,
        top:titleobj.top,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (obj) {
            var value = obj.value;
            var str =value[3]+ "<br>经度："+value[0]+"<br>纬度："+value[1]+"<br>"+seriesobj.name+"："+value[2];
            return str;
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 200,
        calculable: true,
        dimension: 2,
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
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
    series: [
        {
            name: seriesobj.name,
            type: 'scatter',
            coordinateSystem: 'geo',
            data: dataobj,
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}