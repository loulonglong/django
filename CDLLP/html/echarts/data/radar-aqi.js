
var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};
var columntemp =getcolumnname(dataobj);


var maxdata =getonerow(dataobj,1);//取第二行为峰值数据
var dataobj1 = getdataelseonerow(dataobj,1);
maxdata.splice(maxdata.length-1,1);   //删除最后一个

addtable(dataobj1);

var colorarr=['#F9713C','#B3E4A1','rgb(238, 197, 102)'];
//查询类目  最后一个类目
var legenddata = getlegend(dataobj1,columntemp.length-1);
//数据分类
var dataobjtemp = getdataforlegend(dataobj1,legenddata,columntemp.length-1);
var serisetemp=[];
dataobjtemp.forEach(function(datatemp,i){
    serisetemp.push({
        name: datatemp.name,
        type: 'radar',
        lineStyle: lineStyle,
        data: datatemp.arr,
        symbol: 'none',
        itemStyle: {
            normal: {
                color: colorarr[i]
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.05
            }
        }
    })
});



option = {
    backgroundColor: '#161627',
    title: {
        text:titleobj.text,
        left: 'center',
        textStyle: {
            color: '#eee'
        }
    },
    legend: {
        bottom: 5,
        data: legenddata,
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    // visualMap: {
    //     show: true,
    //     min: 0,
    //     max: 20,
    //     dimension: 6,
    //     inRange: {
    //         colorLightness: [0.5, 0.8]
    //     }
    // },
    radar: {
        indicator: maxdata.map(function(item,i){
            return {name: item, max: maxdata[i]}
        }),
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: serisetemp
};