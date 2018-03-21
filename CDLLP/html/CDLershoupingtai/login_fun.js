/**
 * Created by cdl on 18-3-17.
 */

function check(){
    //登录后应该检查些什么？
}

function callback(backstr){
    alert("hhhhhhhhhhhhhhhh");
    if(backstr.respcode == "0"){
        localStorage["luanpeng_user"] =JSON.stringify(backstr.data);
        window.location.href="setting.html";
    }else{
        alert(backstr.message);
        $("#login_button").innerText="登陆";
    }
}

function login(){
    var zhanghao = "";
    var mima = "";
    zhanghao = $("#login_zhanghao").val();
    mima = $("#login_mima").val();

    if(zhanghao=="" || mima==""){
        alert("账号密码不能为空");
    }
    else{
//        var jsonstr = {};
//        jsonstr["phone"] = zhanghao;
//        jsonstr["password"] = mima;
        var jsonstr = {
            "phone": zhanghao,
            "password": mima
        };
        url = "http://127.0.0.1:8000/user/userLogin/";
        sendinfo(url,jsonstr,callback);
    }
}