
titleobj.text = 'iphone销量';
titleobj.subtext='纯属虚构';
dataobj=[
    ['地点','iphone3','iphone4','iphone5'],
    ['北京'],
    ['天津'],
    ['上海'],
    ['重庆'],
    ['河北'],
    ['河南'],
    ['云南'],
    ['辽宁'],
    ['黑龙江'],
    ['湖南'],
    ['安徽'],
    ['山东'],
    ['新疆'],
    ['江苏'],
    ['浙江'],
    ['江西'],
    ['湖北'],
    ['广西'],
    ['甘肃'],
    ['山西'],
    ['内蒙古'],
    ['陕西'],
    ['吉林'],
    ['福建'],
    ['贵州'],
    ['广东'],
    ['青海'],
    ['西藏'],
    ['四川'],
    ['宁夏'],
    ['海南'],
    ['台湾'],
    ['香港'],
    ['澳门']
];

function randomData() {
    return Math.round(Math.random()*1000);
}
for(var i=1;i<35;i++)
{
    dataobj[i].push(randomData());
    dataobj[i].push(randomData());
    dataobj[i].push(randomData());
}
