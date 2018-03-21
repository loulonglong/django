myChart.showLoading();
addtable(dataobj);
var maxmin = getcolumnmaxmin(dataobj,1);
var columntemp =getcolumnname(dataobj);
seriesobj.name = columntemp[1];
var dataobj1 = getdataelseonerow(dataobj,0);


$.get('data/asset/geo/HK.json', function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('HK', geoJson);

    myChart.setOption(option = {
        title: {
            text: titleobj.text,
            subtext:titleobj.subtext,
            left:titleobj.left,
            top: titleobj.top
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (p / km2)'
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
                mapType: 'HK', // 自定义扩展图表类型
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:dataobj1.map(function (item) {
                    return {name: item[0], value: item[1]}
                }),
                // 自定义名称映射
                nameMap: {
                    'Central and Western': '中西区',
                    'Eastern': '东区',
                    'Islands': '离岛',
                    'Kowloon City': '九龙城',
                    'Kwai Tsing': '葵青',
                    'Kwun Tong': '观塘',
                    'North': '北区',
                    'Sai Kung': '西贡',
                    'Sha Tin': '沙田',
                    'Sham Shui Po': '深水埗',
                    'Southern': '南区',
                    'Tai Po': '大埔',
                    'Tsuen Wan': '荃湾',
                    'Tuen Mun': '屯门',
                    'Wan Chai': '湾仔',
                    'Wong Tai Sin': '黄大仙',
                    'Yau Tsim Mong': '油尖旺',
                    'Yuen Long': '元朗'
                }
            }
        ]
    });
});