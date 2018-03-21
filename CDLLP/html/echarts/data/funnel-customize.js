addtable(dataobj);
var columndata = getcolumnname(dataobj);
var legenddata = getoneculumn(dataobj,columndata.length-1);

option = {
    title: {
        text:titleobj.text,
        subtext:titleobj.subtext
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: legenddata
    },
    series: [
        {
            name: columndata[0].text,
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}' + columndata[0].text
                },
                emphasis: {
                    position: 'inside',
                    formatter: '{b}' + columndata[0].text + ': {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: getoneculumn(dataobj, 0).map(function (item, i) {
                return {value: item, name: legenddata[i]}
            }),
        },
        {
            name: columndata[1].text,
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}'+columndata[1].text+': {c}%'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            data: getoneculumn(dataobj, 1).map(function (item, i) {
                return {value: item, name: legenddata[i]}
            }),
        }
    ]
};
