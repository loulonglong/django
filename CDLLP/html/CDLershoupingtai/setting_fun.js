/**
 * Created by cdl on 18-3-17.
 */
info = "";

function callback1(data){
    if(data.respcode == '0'){
        localStorage["luanpeng_user"] = JSON.stringify(data.data);
        alert("修改成功")
    }else{
        alert(data.message);
    }
}

function loadinfo(){
    info = localStorage["luanpeng_user"];
    info = JSON.parse(info);
    $("#user_phone").val(info["phone"]);
    $("#user_name").val(info["name"]);
    $("#user_email").val(info["email"]);
    $("#user_address").val(info["address"]);
}

function submit(){
    url = "http://127.0.0.1:8000/user/updateuserinf";
    alert($("#user_phone").val());
    jsonstr =  {
        id:info["id"],
        phone:$("#user_phone").val(),
        name:$("#user_name").val(),
        email:$("#user_email").val(),
        address:$("#user_address").val()
    }
    sendinfo(url,jsonstr,callback1);
}