//登陆界面初始化函数

var userme;
var qun;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=1;
var type="";
var qunid="";
var canshu;
var openid="";
var money="";
function chongzhiinit(obj) {
    money = obj.getAttribute("money");
    openid = obj.getAttribute("openid");
    //alert(openid);
    if(openid.indexOf("=")<0){
        document.title = "支付中..";
        var url = "http://www.525heart.com/wxpay/wxprepay";
        var json = {
            "openid":openid,
            "money":money
        };
        sendDataByPost(url,json,function(backstr)
        {
            canshu=backstr;
            document.getElementById("timeStamp").innerText ="时间戳="+ backstr.timeStamp;
            document.getElementById("nonceStr").innerText ="订单号="+ backstr.nonceStr;
            document.getElementById("packAge").innerText = "package="+backstr.package;
            document.getElementById("partnerId").innerText ="商户号="+ backstr.partnerId;
            document.getElementById("prepayId").innerText ="预支付号="+ backstr.prepayId;
            document.getElementById("paySign").innerText = "签名="+ backstr.paySign;
            document.getElementById("appId").innerText = "appid="+backstr.appId;
            chongzhifun();
        });
    }

}



function chongzhifun() {
    if (typeof WeixinJSBridge == "undefined"){

        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    }else{
        onBridgeReady();
    }
}


function onBridgeReady(){
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
        "appId" : canshu.appId,
        "package" : canshu.package,
        "nonceStr" : canshu.nonceStr,
        "timeStamp" : canshu.timeStamp,
        "signType": "MD5",
        "paySign":canshu.paySign, //微信签名
            //"total_fee":"100" //微信签名
        },
            function(res){
                if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                    document.title = "支付成功";
                    alert("充值成功");
                }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                else
                {
                    alert(JSON.stringify(res));
                }
            }
        );
}



