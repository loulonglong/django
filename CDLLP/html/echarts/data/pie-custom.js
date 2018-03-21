addtable(dataobj);

var dataobj1 = getdataelseonerow(dataobj,0);
var maxmin = getcolumnmaxmin(dataobj1,1);
option = {
    backgroundColor: '#2c343c',

    title: {
        text: titleobj.text,
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: maxmin[1],
        max: maxmin[0],
        inRange: {
            colorLightness: [0.2, 0.8]
        }
    },
    series : [
        {
            name:seriesobj.name,
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:dataobj1.map(function(item){
                return {value:item[1], name:item[0]}
            }),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};