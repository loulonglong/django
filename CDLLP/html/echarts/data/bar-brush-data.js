
titleobj.text ='柱状图框选';

dataobj=[];
dataobj.push(['class','bar1','bar2','bar3','bar4']);

for (var i = 0; i < 10; i++) {
    dataobj.push(['class' + i,(Math.random() * 2).toFixed(2),-Math.random().toFixed(2),(Math.random() * 5).toFixed(2),(Math.random() + 0.3).toFixed(2)]);
}


