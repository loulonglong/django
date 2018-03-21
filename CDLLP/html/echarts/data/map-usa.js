addtable(dataobj);
myChart.showLoading();
var maxmin = getcolumnmaxmin(dataobj,1);
var columntemp =getcolumnname(dataobj);
seriesobj.name = columntemp[1];
var dataobj1 = getdataelseonerow(dataobj,0);
$.get('data/asset/geo/USA.json', function (usaJson) {
    myChart.hideLoading();

    echarts.registerMap('USA', usaJson, {
        Alaska: {              // 把阿拉斯加移到美国主大陆左下方
            left: -131,
            top: 25,
            width: 15
        },
        Hawaii: {
            left: -110,        // 夏威夷
            top: 28,
            width: 5
        },
        'Puerto Rico': {       // 波多黎各
            left: -76,
            top: 26,
            width: 2
        }
    });
    option = {
        title: {
            text: titleobj.text,
            subtext:titleobj.subtext,
            left:titleobj.left,
            top: titleobj.top
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + params.name + ': ' + value;
            }
        },
        visualMap: {
            left: 'right',
            min: maxmin[1],
            max: maxmin[0],
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text:['High','Low'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: seriesobj.name,
                type: 'map',
                roam: true,
                map: 'USA',
                itemStyle:{
                    emphasis:{label:{show:true}}
                },
                // 文本位置修正
                textFixed: {
                    Alaska: [20, -20]
                },
                data:dataobj1.map(function (item) {
                    return {name: item[0], value: item[1]}
                })
            }
        ]
    };

    myChart.setOption(option);
});