addtable(dataobj);
var dataobj1 = getdataelseonerow(dataobj,0);
option = {
    singleAxis: {
        max: 'dataMax'
    },
    series: [{
        type: 'themeRiver',
        data: dataobj1,
        label: {
            normal: {
                show: false
            }
        }
    }]
};