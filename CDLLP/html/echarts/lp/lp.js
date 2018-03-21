/*
title:{
 left:titleobj.left,
 top:titleobj.top,
 text:titleobj.text,
 subtext:titleobj.subtext
 },
legend: {
    left:legendobj.left,
        top:legendobj.top,
        data: legenddata,
        textStyle: {
        color:legendobj.textStyle.color,
            fontSize: legendobj.textStyle.fontSize
    }
},
*/

/*var datatemp=[];
 for(var i=0;i<data.length;i++)
 {
 datatemp.push([days[data[i][0]],hours[data[i][1]],data[i][2]]);
 }
 document.getElementById("data-value").value = JSON.stringify(datatemp);*/

var dataobj=[];
var backgroundColorobj = '#ffffff';
function setchart(index,showpar)
{
    switch (index)
    {
        case 0:backgroundColorobj = showpar;break;
    }
    setdatashow();
}


var titleobj={
    text:'这里是大标题',
    subtext:'这里是小标题',
    left:'center',
    top:'top',
    textStyle:{
        color:'#000000',
        fontSize:15
    },
    padding:5
};
function settitle(index,showpar)
{
    switch (index)
    {
        case 0:titleobj.text = showpar;break;
        case 1:titleobj.subtext = showpar;break;
        case 2:titleobj.left = showpar;break;
        case 3:titleobj.top = showpar;break;
        case 4:titleobj.textStyle.color = showpar;break;
        case 5:titleobj.textStyle.fontSize = showpar;break;
    }
    setdatashow();
}


var legendobj={
    itemGap:5,
    orient:'horizontal',
    selectedMode:'multiple',   //multiple多选模式   single单选模式
    left:'center',
    top:'bottom',
    textStyle:{
        color:'#000000',
        fontSize:14
    }
};
function setlegend(index,showpar)
{
    switch (index)
    {
        case 0:legendobj.left = showpar;break;
        case 1:legendobj.top = showpar;break;
        case 2:legendobj.orient = showpar;break;
        case 3:legendobj.selectedMode = showpar;break;
        case 4:legendobj.textStyle.color = showpar;break;
        case 5:legendobj.textStyle.fontSize = showpar;break;
    }
    setdatashow();
}




var tooltipobj={
    trigger:'axis',  //item坐标点触发   axis坐标轴触发
    formatter:'系列:{a}<br/>类目:{b}<br/>数值:{c}'
};
function settooltip(index,showpar)
{
    switch (index)
    {
        case 0:tooltipobj.trigger = showpar;break;
        case 1:tooltipobj.formatter = showpar;break;
    }
    setdatashow();
}


var visualMapobj={
    min:0,
    //max:300,
    text:'强弱',
    left:'right',
    top:'bottom',
    splitNumber:0,
    inRange:{
        color:['#088711','#fc0000','#0c00fc']
    }
};
function setvisualMap(index,showpar)
{
    switch (index)
    {
        case 0:visualMapobj.left = showpar;break;
        case 1:visualMapobj.top = showpar;break;
        case 2:visualMapobj.text = showpar;break;
        case 3:visualMapobj.min = showpar;break;
        case 4:visualMapobj.max = showpar;break;
        case 5:visualMapobj.splitNumber = showpar;break;
        case 6:visualMapobj.inRange.color[0] = showpar;break;
        case 7:visualMapobj.inRange.color[1] = showpar;break;
        case 8:visualMapobj.inRange.color[2] = showpar;break;
    }
    setdatashow();
}



var seriesobj={
    name:'取值',
    symbol:'circle',   //可选自带的标记类型  有circle  rect  roundRect  triangle  diamond  pin  arrow  none
    symbolSize:10,
    label:{
        normal:{
            show:true,
            position:'top',
            color:'#07a0cc',
            formattter:'{c}'   //模板变量有{a}系列名    {b}数据名   {c}数据值
        }
    }
};
function setseries(index,showpar)
{
    switch (index)
    {
        case 0:seriesobj.name = showpar;break;
        case 1:seriesobj.symbol = showpar;break;
        case 2:seriesobj.symbolSize = showpar;break;
        case 3:seriesobj.label.normal.position = showpar;break;
        case 4:seriesobj.label.normal.color = showpar;break;
        case 5:seriesobj.label.normal.formattter = showpar;break;
    }
    setdatashow();
}



var xAxisobj={
    name:'x轴取值',
    min:null,
    max:null,
    splitNumber:10,
    axisLabel:{
        formatter:'{value}',
    }
};
var yAxisobj={
    name:'y轴取值',
    min:null,
    max:null,
    splitNumber:10,
    axisLabel:{
        formatter:'{value}',
    }
};
function setgrid(index,showpar)
{
    switch (index)
    {
        case 0:xAxisobj.name = showpar;break;
        case 1:xAxisobj.min = showpar;break;
        case 2:xAxisobj.max = showpar;break;
        case 3:xAxisobj.splitNumber = showpar;break;
        case 4:xAxisobj.axisLabel.formatter = showpar;break;

        case 10:yAxisobj.name = showpar;break;
        case 11:yAxisobj.min = showpar;break;
        case 12:yAxisobj.max = showpar;break;
        case 13:yAxisobj.splitNumber = showpar;break;
        case 14:yAxisobj.axisLabel.formatter = showpar;break;
    }
    setdatashow();
}



var geoobj={
    label:{
        normal:{
            show:true
        }
    },
    itemStyle:{
        normal:{
            areaColor:'#323c48',
            borderColor:'#111'
        }
    }
};
function setgeo(index,showpar)
{
    switch (index)
    {
        case 0:geoobj.label.normal.show = showpar;break;
        case 1:geoobj.itemStyle.normal.areaColor = showpar;break;
        case 2:geoobj.itemStyle.normal.borderColor = showpar;break;
    }
    setdatashow();
}



function setdatashow()
{
    //标题配置
    document.getElementById("title_text").value = titleobj.text;
    document.getElementById("title_subtext").value = titleobj.subtext;
    //document.getElementById("title_textStyle_color").value = titleobj.textStyle.color;
    document.getElementById("title_textStyle_fontSize").value = titleobj.textStyle.fontSize;
    document.getElementById("title_left_left").className='buttoninput';
    document.getElementById("title_left_center").className='buttoninput';
    document.getElementById("title_left_right").className='buttoninput';
    if(titleobj.left == "left")
        document.getElementById("title_left_left").className='buttoninputfocus';
    if(titleobj.left == "center")
        document.getElementById("title_left_center").className='buttoninputfocus';
    if(titleobj.left == "right")
        document.getElementById("title_left_right").className='buttoninputfocus';

    document.getElementById("title_top_top").className='buttoninput';
    document.getElementById("title_top_center").className='buttoninput';
    document.getElementById("title_top_bottom").className='buttoninput';
    if(titleobj.top == "top")
        document.getElementById("title_top_top").className='buttoninputfocus';
    if(titleobj.top == "center")
        document.getElementById("title_top_center").className='buttoninputfocus';
    if(titleobj.top == "bottom")
        document.getElementById("title_top_bottom").className='buttoninputfocus';



   //图例配置
    //document.getElementById("legend_textStyle_color").value = legendobj.textStyle.color;
    document.getElementById("legend_textStyle_fontSize").value = legendobj.textStyle.fontSize;

    document.getElementById("legend_left_left").className='buttoninput';
    document.getElementById("legend_left_center").className='buttoninput';
    document.getElementById("legend_left_right").className='buttoninput';
    if(legendobj.left == "left")
        document.getElementById("legend_left_left").className='buttoninputfocus';
    if(legendobj.left == "center")
        document.getElementById("legend_left_center").className='buttoninputfocus';
    if(legendobj.left == "right")
        document.getElementById("legend_left_right").className='buttoninputfocus';

    document.getElementById("legend_top_top").className='buttoninput';
    document.getElementById("legend_top_center").className='buttoninput';
    document.getElementById("legend_top_bottom").className='buttoninput';
    if(legendobj.top == "top")
        document.getElementById("legend_top_top").className='buttoninputfocus';
    if(legendobj.top == "center")
        document.getElementById("legend_top_center").className='buttoninputfocus';
    if(legendobj.top == "bottom")
        document.getElementById("legend_top_bottom").className='buttoninputfocus';

    document.getElementById("legend_orient_horizontal").className='buttoninput';
    document.getElementById("legend_orient_vertical").className='buttoninput';
    if(legendobj.orient == "horizontal")
        document.getElementById("legend_orient_horizontal").className='buttoninputfocus';
    if(legendobj.orient == "vertical")
        document.getElementById("legend_orient_vertical").className='buttoninputfocus';

   /* document.getElementById("legend_selectedMode_single").className='buttoninput';
    document.getElementById("legend_selectedMode_multiple").className='buttoninput';
    if(legendobj.selectedMode == "single")
        document.getElementById("legend_selectedMode_single").className='buttoninputfocus';
    if(legendobj.selectedMode == "multiple")
        document.getElementById("legend_selectedMode_multiple").className='buttoninputfocus';*/



  //提示配置
    document.getElementById("tooltip_formatter").value = tooltipobj.formatter;
    document.getElementById("tooltip_trigger_item").className='buttoninput';
    document.getElementById("tooltip_trigger_axis").className='buttoninput';

    if(tooltipobj.trigger == "item")
        document.getElementById("tooltip_trigger_item").className='buttoninputfocus';
    if(tooltipobj.trigger == "axis")
        document.getElementById("tooltip_trigger_axis").className='buttoninputfocus';



    //虚拟映射
    document.getElementById("visualMap_text").value = visualMapobj.text;
    document.getElementById("visualMap_min").value = visualMapobj.min;
    document.getElementById("visualMap_max").value = visualMapobj.max;
    document.getElementById("visualMap_splitNumber").value = visualMapobj.splitNumber;
    //document.getElementById("visualMap_inRange1").value = visualMapobj.inRange.color[0];
    //document.getElementById("visualMap_inRange2").value = visualMapobj.inRange.color[1];
    //document.getElementById("visualMap_inRange3").value = visualMapobj.inRange.color[2];

    document.getElementById("visualMap_left_left").className='buttoninput';
    document.getElementById("visualMap_left_center").className='buttoninput';
    document.getElementById("visualMap_left_right").className='buttoninput';
    if(visualMapobj.left == "left")
        document.getElementById("visualMap_left_left").className='buttoninputfocus';
    if(visualMapobj.left == "center")
        document.getElementById("visualMap_left_center").className='buttoninputfocus';
    if(visualMapobj.left == "right")
        document.getElementById("visualMap_left_right").className='buttoninputfocus';

    document.getElementById("visualMap_top_top").className='buttoninput';
    document.getElementById("visualMap_top_center").className='buttoninput';
    document.getElementById("visualMap_top_bottom").className='buttoninput';
    if(visualMapobj.top == "top")
        document.getElementById("visualMap_top_top").className='buttoninputfocus';
    if(visualMapobj.top == "center")
        document.getElementById("visualMap_top_center").className='buttoninputfocus';
    if(visualMapobj.top == "bottom")
        document.getElementById("visualMap_top_bottom").className='buttoninputfocus';

    //数据配置
    document.getElementById("series_label_normal_formatter").value = seriesobj.label.normal.formattter;
    document.getElementById("series_symbolSize").value = seriesobj.symbolSize;

    document.getElementById("series_label_normal_position_top").className='buttoninput';
    document.getElementById("series_label_normal_position_bottom").className='buttoninput';
    document.getElementById("series_label_normal_position_left").className='buttoninput';
    document.getElementById("series_label_normal_position_right").className='buttoninput';
    if(seriesobj.label.normal.position == "top")
        document.getElementById("series_label_normal_position_top").className='buttoninputfocus';
    if(seriesobj.label.normal.position == "bottom")
        document.getElementById("series_label_normal_position_bottom").className='buttoninputfocus';
    if(seriesobj.label.normal.position == "left")
        document.getElementById("series_label_normal_position_left").className='buttoninputfocus';
    if(seriesobj.label.normal.position == "right")
        document.getElementById("series_label_normal_position_right").className='buttoninputfocus';

    document.getElementById("series_symbol_none").className='buttoninput';
    document.getElementById("series_symbol_circle").className='buttoninput';
    document.getElementById("series_symbol_rect").className='buttoninput';
    document.getElementById("series_symbol_roundRect").className='buttoninput';
    document.getElementById("series_symbol_triangle").className='buttoninput';
    document.getElementById("series_symbol_diamond").className='buttoninput';
    document.getElementById("series_symbol_pin").className='buttoninput';
    document.getElementById("series_symbol_arrow").className='buttoninput';
    if(seriesobj.symbol == "none")
        document.getElementById("series_symbol_none").className='buttoninputfocus';
    if(seriesobj.symbol == "circle")
        document.getElementById("series_symbol_circle").className='buttoninputfocus';
    if(seriesobj.symbol == "rect")
        document.getElementById("series_symbol_rect").className='buttoninputfocus';
    if(seriesobj.symbol == "roundRect")
        document.getElementById("series_symbol_roundRect").className='buttoninputfocus';
    if(seriesobj.symbol == "triangle")
        document.getElementById("series_symbol_triangle").className='buttoninputfocus';
    if(seriesobj.symbol == "diamond")
        document.getElementById("series_symbol_diamond").className='buttoninputfocus';
    if(seriesobj.symbol == "pin")
        document.getElementById("series_symbol_pin").className='buttoninputfocus';
    if(seriesobj.symbol == "arrow")
        document.getElementById("series_symbol_arrow").className='buttoninputfocus';

   //直角坐标系
    document.getElementById("xAxis_name").value = xAxisobj.name;
    document.getElementById("xAxis_min").value = xAxisobj.min;
    document.getElementById("xAxis_max").value = xAxisobj.max;
    document.getElementById("xAxis_splitNumber").value = xAxisobj.splitNumber;
    document.getElementById("xAxis_axisLabel_formatter").value = xAxisobj.axisLabel.formatter;

    document.getElementById("yAxis_name").value = yAxisobj.name;
    document.getElementById("yAxis_min").value = yAxisobj.min;
    document.getElementById("yAxis_max").value = yAxisobj.max;
    document.getElementById("yAxis_splitNumber").value = yAxisobj.splitNumber;
    document.getElementById("yAxis_axisLabel_formatter").value = yAxisobj.axisLabel.formatter;

    //地理坐标系
    document.getElementById("geo_label_normal_show").checked = geoobj.label.normal.show;
    document.getElementById("geo_itemStyle_normal_areaColor").value = geoobj.itemStyle.normal.areaColor;
    document.getElementById("geo_itemStyle_normal_borderColor").value = geoobj.itemStyle.normal.borderColor;

    disposeAndRun();
}



//提取各列数据的名称
function getcolumnname(datatemp)
{
    var columntemp = [];
    for(var i=0;i<datatemp[0].length;i++)
    {
        columntemp.push({
            name:datatemp[0][i],
            index:i,
            text:datatemp[0][i]
        });
    }
    return columntemp;
}

//获取指定列的最大值和最小值
function getcolumnmaxmin(datatemp,index)
{
    if(datatemp.length<2)
    {
        alert("数据量过少");
        return;
    }
    //提取无重复类目
    var max = datatemp[1][index];
    var min = datatemp[1][index];
    for(var i=1;i<datatemp.length;i++)
    {
        if(datatemp[i][index]<min)
            min = datatemp[i][index]
        if(datatemp[i][index]>max)
            max = datatemp[i][index]
    }
    return [max,min]
}

//提取各类目数据  datatemp是表数据  第一行为列名，legendtemp为无重复类目   index列索引
function getlegend(datatemp,index)   //表格数据和列索引
{
    //提取无重复类目
    var legendtemp = [];
    for(var i=1;i<datatemp.length;i++)
    {
        var exist=false;
        for(var t=0;t<legendtemp.length;t++)
        {
            if(legendtemp[t]==datatemp[i][index])
                exist=true;
        }
        if(!exist)
            legendtemp.push(datatemp[i][index]);
    }
    return legendtemp
}

//将数据转化为笛卡尔数据  并提取x轴和y轴数据   修改原数组
function data2griddata(datatemp,xindex,yindex)
{
    //提取无重复类目
    var xlegendtemp = [];
    var ylegendtemp = [];
    for(var i=1;i<datatemp.length;i++)
    {
        var xexist=false;
        for(var t=0;t<xlegendtemp.length;t++)
        {
            if(xlegendtemp[t]==datatemp[i][xindex])
            {
                xexist=true;
                datatemp[i][xindex] = t;
                break;
            }

        }
        if(!xexist)
        {
            xlegendtemp.push(datatemp[i][xindex]);
            datatemp[i][xindex] = xlegendtemp.length-1;

        }


        var yexist=false;
        for(var t=0;t<ylegendtemp.length;t++)
        {
            if(ylegendtemp[t]==datatemp[i][yindex])
            {
                yexist=true;
                datatemp[i][yindex] = t;
                break;
            }

        }
        if(!yexist)
        {
            ylegendtemp.push(datatemp[i][yindex]);
            datatemp[i][yindex] = ylegendtemp.length-1;
        }
    }

    return [xlegendtemp,ylegendtemp];
}


//提取指定列  datatemp是表数据  第一行为列名，  index列索引
function getoneculumn(datatemp,index)   //表格数据和列索引
{
    var onecolumetemp = [];
    for(var i=1;i<datatemp.length;i++)
    {
        onecolumetemp.push(datatemp[i][index]);
    }
    return onecolumetemp
}


//提取指定行  datatemp是表数据  第一行为列名，  index列索引
function getonerow(datatemp,index)   //表格数据和列索引
{
    var onerowtemp = [];
    for(var i=0;i<datatemp[index].length;i++)
    {
        onerowtemp.push(datatemp[index][i]);
    }
    return onerowtemp
}
//提取指定列  datatemp是表数据  第一行为列名，  index列索引
function getdataelseonerow(datatemp,index)   //表格数据和列索引
{
    var datatobj1 = [];
    for(var i=0;i<datatemp.length;i++)
    {
        var rowtemp = [];
        for(var t=0;t<datatemp[i].length;t++)
        {
            rowtemp.push(datatemp[i][t]);
        }
        datatobj1.push(rowtemp);
    }
    datatobj1.splice(index,1);
    return datatobj1
}

//提取各类目数据  datatemp是表数据  第一行为列名，legendtemp为无重复类目   index列索引
function getdataforlegend(datatemp,legendtemp,index)
{
    //dataarr是一个数组的数组，内部每个数组为一个系列的数据
    var dataarr = [];
    for(var i=0;i<legendtemp.length;i++)
    {
        var dataitem = {
            name:null,
            arr:[]    //arr是一个系列的所有数据  即二位数据
        };
        dataitem.name = legendtemp[i];
        dataarr.push(dataitem);
    }
    for(var i=1;i<datatemp.length;i++)
    {
        for(var t=0;t<legendtemp.length;t++)
        {
            if(datatemp[i][index]==legendtemp[t])
            {
                //datatemp[i].splice(index, 1); //从index开始删除一个元素  改变原始数据
                dataarr[t].arr.push(datatemp[i]);
                break;
            }
        }
    }
    return dataarr;
}


//将数据生成表格显示在div中
function addtable(datatemp)
{
    try{
        document.getElementById("data-code-panel").innerHTML="";
        var htmlstr="";
        htmlstr+="<table class='tabletable' id='myTable'>";
        htmlstr+="<tr>";
        for(var t=0;t<datatemp[0].length;t++)
        {
            htmlstr+="<td class='tablehead'>"+datatemp[0][t]+"</td>";
        }
        htmlstr+="</tr>";
        for(var i=1;i<datatemp.length;i++)
        {
            htmlstr+="<tr>";
            for(var t=0;t<datatemp[i].length;t++)
            {
                htmlstr+="<td class='tablecell'>"+datatemp[i][t]+"</td>";
            }
            htmlstr+="</tr>";
        }
        htmlstr+="</table>";
        $('#data-code-panel').append(htmlstr);
    }
   catch (e){}
}

var hasload = false;

//var uploadurl = "http://192.168.137.1/web/uploadxlsfile";
var uploadurl = "http://www.525heart.com/web/uploadxlsfile";
function updataxls()
{
    var file_path_str = $("#pic_file").val();
    strs = file_path_str.split('.');
    var suffix = strs [strs.length - 1];
    if (suffix != 'xls' && suffix != 'xlsx')
    {
        alert("你选择的不是xls表文件");
        return;
    }
    document.getElementById("xmlfilepath").value = file_path_str;
    $("#filexls_upload_form").ajaxSubmit({
        type: 'post',
        url: uploadurl,
        success: function(data){
            dataobj =[];
            var datastr = data.substr(3,data.length-6);  //将两边的"[[      ]]"去掉
           var rowarr = datastr.split("], [");
            for(var i=0;i<rowarr.length;i++)
            {
                var row=[];
                var columnarr = rowarr[i].split(",");
                for(var t=0;t<columnarr.length;t++)
                {
                    try{
                         var dd = Number(columnarr[t]);
                        if(isNaN(dd))
                            row.push(columnarr[t]);
                        else
                            row.push(dd);
                    }
                    catch (err)
                    {
                        row.push(columnarr[t]);
                    }
                }
                dataobj.push(row);
            }
            /*alert(JSON.stringify(dataobj));
            setdata();*/
            disposeAndRun();
            $( "#file_upload_form").resetForm();
        },
        error: function(XmlHttpRequest, textStatus, errorThrown){
            alert( "error");
        }
    });
}
