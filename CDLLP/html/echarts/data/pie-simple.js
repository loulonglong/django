addtable(dataobj);
var legendtemp = getoneculumn(dataobj,0);

var dataobj1 = getdataelseonerow(dataobj,0);


option = {
    title : {
        text: titleobj.text,
        subtext:titleobj.subtext,
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:legendtemp
    },
    series : [
        {
            name: seriesobj.name,
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:dataobj1.map(function (item){
                return {value:item[1], name:item[0]}
            }),
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
