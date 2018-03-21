titleobj.text = '柱状图动画延迟';

dataobj=[];
dataobj.push(['类目','bar1','bar2']);

for (var i = 0; i < 100; i++) {
    dataobj.push(['类目' + i,((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5).toFixed(2)-0,((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5).toFixed(2)-0]);
}

