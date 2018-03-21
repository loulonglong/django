var color = ['#a6c84c', '#ffa022', '#46bee9'];
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

addtable(dataobj);
var columntemp = getcolumnname(dataobj);
var legendtemp = getlegend(dataobj,columntemp.length-1);
//数据分类
var dataobjtemp = getdataforlegend(dataobj,legendtemp,columntemp.length-1);
var serisetemp=[];
dataobjtemp.forEach(function(temp,i)
{
    var datatemp=[];
    for(var t=0;t<temp.arr.length;t++)
    {
        datatemp.push([[temp.arr[t][0],temp.arr[t][1]],[temp.arr[t][2],temp.arr[t][3],temp.arr[t][4]]]);
    }

    serisetemp.push({
            name: temp.name,
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: datatemp
        },
        {
            name: temp.name,
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: datatemp
        },
        {
            name: temp.name,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: datatemp.map(function (dataItem) {
                return {
                    name: temp.name,
                    value: dataItem
                };
            })

        });
});




option = {
    backgroundColor: '#404a59',
    title : {
        text: titleobj.text,
        subtext: titleobj.subtext,
        left: 'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:legendtemp,
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'multiple'
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
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: serisetemp
};