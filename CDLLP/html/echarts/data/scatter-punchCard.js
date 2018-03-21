addtable(dataobj);
var columntemp = getcolumnname(dataobj);
var xdata = getlegend(dataobj,0);
var ydata = getlegend(dataobj,1);
option = {
    title: {
        text: titleobj.text
    },
    tooltip: {
        formatter: function (obj) {
            var value = obj.value;
            var str = "";
            for (var i = 0; i < columntemp.length; i++) {
                str += columntemp[i].text + "：" + value[i] + '<br>';
            }
            return str;
        }
    },
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: xdata,
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
    yAxis: {
        type: 'category',
        data: ydata,
        axisLine: {
            show: false
        }
    },
    series: [{
        name: seriesobj.name,
        type: 'scatter',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: dataobj,
        animationDelay: function (idx) {
            return idx * 5;
        }
    }]
};