//登陆界面初始化函数

var nowqun;
//初始化  设置合同可选项
function qun_detail_init()
{
	var qunstr = localStorage["luanpeng_nowqun"];
	nowqun =JSON.parse(qunstr);
	document.getElementById("aname").value = nowqun.aname;
	document.getElementById("bname").value = nowqun.bname;
	document.getElementById("identity").value = nowqun.type1;
	document.getElementById("ab").value = nowqun.ab;

	document.getElementById("huokuanzhuti").value = nowqun.type2;
	document.getElementById("xiaoshouzonge").value =  nowqun.type3;
	document.getElementById("zaiwaihuokuan").value =  nowqun.type4;
	document.getElementById("huokuangengxinri").value =  nowqun.type5;

	document.getElementById("apeople").value = nowqun.type6;
	document.getElementById("aphone").value =  nowqun.type7;
	document.getElementById("aemail").value =  nowqun.type8;
	document.getElementById("bpoeple").value =  nowqun.type9;

	document.getElementById("bidnum").value = nowqun.type10;
	document.getElementById("bphone").value =  nowqun.type11;
	document.getElementById("bwechat").value =  nowqun.type12;
	document.getElementById("balipay").value =  nowqun.type13;
}
