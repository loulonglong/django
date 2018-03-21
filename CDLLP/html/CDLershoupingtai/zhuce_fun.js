/**
 * Created by cdl on 18-3-17.
 */

function callback(backstr){
    alert("hhhhhhhhhhhhhhhh");
    if(backstr.respcode == "0"){
        localStorage["luanpeng_user"] =JSON.stringify(backstr.data);
        window.location.href="setting.html";
    }else{
        alert(backstr.message);
    }
}

function zhuce(){
    var zhanghao = "";
    var mima = "";
    zhanghao = $("#login_zhanghao").val();
    mima = $("#login_mima").val();

    if(zhanghao=="" || mima==""){
        alert("账号密码不能为空");
    }
    else{
        var jsonstr = {
            "phone": zhanghao,
            "password": mima
        };
        url = "http://127.0.0.1:8000/user/userRegist/";
        sendinfo(url,jsonstr,callback);
    }
}