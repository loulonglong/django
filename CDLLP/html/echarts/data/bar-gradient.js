addtable(dataobj);
var maxmin=getcolumnmaxmin(dataobj,1);
var yMax = maxmin[0];
var dataShadow = [];

for (var i = 0; i < dataobj.length; i++) {
    dataShadow.push(yMax);
}

option = {
    title: {
        text:titleobj.text,
        subtext: titleobj.subtext
    },
    xAxis: {
        data: getoneculumn(dataobj,0),
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: getoneculumn(dataobj,1)
        }
    ]
};

// Enable data zoom when user click bar.
var zoomSize = 6;
myChart.on('click', function (params) {
    console.log(getoneculumn(dataobj,0)[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: getoneculumn(dataobj,0)[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: getoneculumn(dataobj,0)[Math.min(params.dataIndex + zoomSize / 2, dataobj.length - 1)]
    });
});