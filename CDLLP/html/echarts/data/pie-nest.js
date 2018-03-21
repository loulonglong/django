addtable(dataobj);
var columnname = getcolumnname(dataobj);
var legendtemp = getlegend(dataobj,0);
var showset = getlegend(dataobj,columnname.length-1);
datatemp = getdataforlegend(dataobj,showset,columnname.length-1);

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:legendtemp
    },
    series: [
        {
            name:seriesobj.name,
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:datatemp[0].arr.map(function (item){
                return {value:item[1], name:item[0]}
            })
        },
        {
            name:seriesobj.name,
            type:'pie',
            radius: ['40%', '55%'],

            data:datatemp[1].arr.map(function (item){
                return {value:item[1], name:item[0]}
            })
        }
    ]
};