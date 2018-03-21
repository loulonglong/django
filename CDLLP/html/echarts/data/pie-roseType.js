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
        x : 'center',
        y : 'bottom',
        data:legendtemp
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series :
        {
            name:seriesobj.name,
            type:'pie',
            radius : [30, 200],
            center : ['50%', '50%'],
            roseType : 'area',
            data:dataobj1.map(function (item){
                return {value:item[1], name:item[0]}
            })
        }

};
