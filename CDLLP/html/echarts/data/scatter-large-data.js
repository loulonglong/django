titleobj.text='大规模散点图';


dataobj.push(['x值','y值','函数'])
var len = 10000;
var x = 0;
while (len--) {
    x = (Math.random() * 10).toFixed(3) - 0;
    dataobj.push([x, (Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3)-0,'sin']);

}
len = 20000;
while (len--) {
    x = (Math.random() * 10).toFixed(3) - 0;
    dataobj.push([x, (Math.cos(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3)-0,'cos']);
}
