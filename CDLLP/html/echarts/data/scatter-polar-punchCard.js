addtable(dataobj);
var columntemp = getcolumnname(dataobj);
var radiusdata = getlegend(dataobj,0);
var angledata = getlegend(dataobj,1);

option = {
    title: {
        text:titleobj.text,
    },
    polar: {},
    tooltip: {
        formatter: function (obj) {
            var value = obj.value;
            var str="";
            for(var i=0;i<columntemp.length;i++)
            {
                str+=columntemp[i].text+"："+value[i]+'<br>';
            }
            return str;
        }
    },
    angleAxis: {
        type: 'category',
        data: angledata,
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        data: radiusdata,
        axisLine: {
            show: false
        },
        axisLabel: {
            rotate: 45
        }
    },
    series: [{
        name: seriesobj.name,
        type: 'scatter',
        coordinateSystem: 'polar',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: dataobj,
        animationDelay: function (idx) {
            return idx * 5;
        }
    }]
};