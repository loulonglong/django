/**
 * Created by cdl on 18-3-17.
 */



function sendinfo(url,jsonstr,callback){
    $.ajax({
        url : url,
        type : "post",
        dataType : "json",
        contentType: "application/x-www-form-urlencoded",
        //contentType: "application/json;charset=UTF-8",
        data : jsonstr,
        success : callback,
        error : function (data) {
            alert("前端发送数据失败");
        }
    })
}