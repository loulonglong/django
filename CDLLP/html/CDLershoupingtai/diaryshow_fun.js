/**
 * Created by cdl on 18-3-18.
 */

var start = 1;

function callback(returndata){
    start = returndata.length+1;
    alert("日志数目为"+returndata.data.length);
    $button = $("#bottombtn");
    for(var i=0;i<returndata.data.length;i++){
        $li1=$("<div data-theme='b'>"+JSON.stringify(returndata.data[i])+"</div>");
        $li1.insertBefore($button);
    }
}

function loaddiary(){
    url = "http://127.0.0.1:8000/qun/getqundiary";
    jsonstr1 = JSON.parse(localStorage["luanpeng_user"]);
    jsonstr = {
        qunid:jsonstr1["qunid"],
        //qunid:16,
        page:start
    }
    sendinfo(url,jsonstr,callback);
}