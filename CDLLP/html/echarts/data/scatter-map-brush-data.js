titleobj.text = '全国主要城市 PM 2.5';
titleobj.subtext='data from PM25.in';
seriesobj.name = 'pm2.5';

dataobj = [
    ['经度','纬度','pm2.5','城市'],
    [121.15,31.89,9,"海门"],
    [109.781327,39.608266,12,"鄂尔多斯"],
    [120.38,37.35,12,"招远"],
    [122.207216,29.985295,12,"舟山"],
    [123.97,47.33,14,"齐齐哈尔"],
    [120.13,33.38,15,"盐城"],
    [118.87,42.28,16,"赤峰"],
    [120.33,36.07,18,"青岛"],
    [121.52,36.89,18,"乳山"],
    [102.188043,38.520089,19,"金昌"],
    [118.58,24.93,21,"泉州"],
    [120.53,36.86,21,"莱西"],
    [119.46,35.42,21,"日照"],
    [119.97,35.88,22,"胶南"],
    [121.05,32.08,23,"南通"],
    [91.11,29.97,24,"拉萨"],
    [112.02,22.93,24,"云浮"],
    [116.1,24.55,25,"梅州"],
    [122.05,37.2,25,"文登"],
    [121.48,31.22,25,"上海"],
    [101.718637,26.582347,25,"攀枝花"],
    [122.1,37.5,25,"威海"],
    [117.93,40.97,25,"承德"],
    [118.1,24.46,26,"厦门"],
    [115.375279,22.786211,26,"汕尾"],
    [116.63,23.68,26,"潮州"],
    [124.37,40.13,27,"丹东"],
    [121.1,31.45,27,"太仓"],
    [103.79,25.51,27,"曲靖"],
    [121.39,37.52,28,"烟台"],
    [119.3,26.08,29,"福州"],
    [121.979603,39.627114,30,"瓦房店"],
    [120.45,36.38,30,"即墨"],
    [123.97,41.97,31,"抚顺"],
    [102.52,24.35,31,"玉溪"],
    [114.87,40.82,31,"张家口"],
    [113.57,37.85,31,"阳泉"],
    [119.942327,37.177017,32,"莱州"],
    [120.1,30.86,32,"湖州"],
    [116.69,23.39,32,"汕头"],
    [120.95,31.39,33,"昆山"],
    [121.56,29.86,33,"宁波"],
    [110.359377,21.270708,33,"湛江"],
    [116.35,23.55,34,"揭阳"],
    [122.41,37.16,34,"荣成"],
    [119.16,34.59,35,"连云港"],
    [120.836932,40.711052,35,"葫芦岛"],
    [120.74,31.64,36,"常熟"],
    [113.75,23.04,36,"东莞"],
    [114.68,23.73,36,"河源"],
    [119.15,33.5,36,"淮安"],
    [119.9,32.49,36,"泰州"],
    [108.33,22.84,37,"南宁"],
    [122.18,40.65,37,"营口"],
    [114.4,23.09,37,"惠州"],
    [120.26,31.91,37,"江阴"],
    [120.75,37.8,37,"蓬莱"],
    [113.62,24.84,38,"韶关"],
    [98.289152,39.77313,38,"嘉峪关"],
    [113.23,23.16,38,"广州"],
    [109.47,36.6,38,"延安"],
    [112.53,37.87,39,"太原"],
    [113.01,23.7,39,"清远"],
    [113.38,22.52,39,"中山"],
    [102.73,25.04,39,"昆明"],
    [118.73,36.86,40,"寿光"],
    [122.070714,41.119997,40,"盘锦"],
    [113.08,36.18,41,"长治"],
    [114.07,22.62,41,"深圳"],
    [113.52,22.3,42,"珠海"],
    [118.3,33.96,43,"宿迁"],
    [108.72,34.36,43,"咸阳"],
    [109.11,35.09,44,"铜川"],
    [119.97,36.77,44,"平度"],
    [113.11,23.05,44,"佛山"],
    [110.35,20.02,44,"海口"],
    [113.06,22.61,45,"江门"],
    [117.53,36.72,45,"章丘"],
    [112.44,23.05,46,"肇庆"],
    [121.62,38.92,47,"大连"],
    [111.5,36.08,47,"临汾"],
    [120.63,31.16,47,"吴江"],
    [106.39,39.04,49,"石嘴山"],
    [123.38,41.8,50,"沈阳"],
    [120.62,31.32,50,"苏州"],
    [110.88,21.68,50,"茂名"],
    [120.76,30.77,51,"嘉兴"],
    [125.35,43.88,51,"长春"],
    [120.03336,36.264622,52,"胶州"],
    [106.27,38.47,52,"银川"],
    [120.555821,31.875428,52,"张家港"],
    [111.19,34.76,53,"三门峡"],
    [121.15,41.13,54,"锦州"],
    [115.89,28.68,54,"南昌"],
    [109.4,24.33,54,"柳州"],
    [109.511909,18.252847,54,"三亚"],
    [104.778442,29.33903,56,"自贡"],
    [126.57,43.87,56,"吉林"],
    [111.95,21.85,57,"阳江"],
    [105.39,28.91,57,"泸州"],
    [101.74,36.56,57,"西宁"],
    [104.56,29.77,58,"宜宾"],
    [111.65,40.82,58,"呼和浩特"],
    [104.06,30.67,58,"成都"],
    [113.3,40.12,58,"大同"],
    [119.44,32.2,59,"镇江"],
    [110.28,25.29,59,"桂林"],
    [110.479191,29.117096,59,"张家界"],
    [119.82,31.36,59,"宜兴"],
    [109.12,21.49,60,"北海"],
    [108.95,34.27,61,"西安"],
    [119.56,31.74,62,"金坛"],
    [118.49,37.46,62,"东营"],
    [129.58,44.6,63,"牡丹江"],
    [106.9,27.7,63,"遵义"],
    [120.58,30.01,63,"绍兴"],
    [119.42,32.39,64,"扬州"],
    [119.95,31.79,64,"常州"],
    [119.1,36.62,65,"潍坊"],
    [106.54,29.59,66,"重庆"],
    [121.420757,28.656386,67,"台州"],
    [118.78,32.04,67,"南京"],
    [118.03,37.36,70,"滨州"],
    [106.71,26.57,71,"贵阳"],
    [120.29,31.59,71,"无锡"],
    [123.73,41.3,71,"本溪"],
    [84.77,45.59,72,"克拉玛依"],
    [109.5,34.52,72,"渭南"],
    [118.48,31.56,72,"马鞍山"],
    [107.15,34.38,72,"宝鸡"],
    [113.21,35.24,75,"焦作"],
    [119.16,31.95,75,"句容"],
    [116.46,39.92,79,"北京"],
    [117.2,34.26,79,"徐州"],
    [115.72,37.72,80,"衡水"],
    [110,40.58,80,"包头"],
    [104.73,31.48,80,"绵阳"],
    [87.68,43.77,84,"乌鲁木齐"],
    [117.57,34.86,84,"枣庄"],
    [120.19,30.26,84,"杭州"],
    [118.05,36.78,85,"淄博"],
    [122.85,41.12,86,"鞍山"],
    [119.48,31.43,86,"溧阳"],
    [86.06,41.68,86,"库尔勒"],
    [114.35,36.1,90,"安阳"],
    [114.35,34.79,90,"开封"],
    [117,36.65,92,"济南"],
    [104.37,31.13,93,"德阳"],
    [120.65,28.01,95,"温州"],
    [115.97,29.71,96,"九江"],
    [114.47,36.6,98,"邯郸"],
    [119.72,30.23,99,"临安"],
    [103.73,36.03,99,"兰州"],
    [116.83,38.33,100,"沧州"],
    [118.35,35.05,103,"临沂"],
    [106.110698,30.837793,104,"南充"],
    [117.2,39.13,105,"天津"],
    [119.95,30.07,106,"富阳"],
    [117.13,36.18,112,"泰安"],
    [120.23,29.71,112,"诸暨"],
    [113.65,34.76,113,"郑州"],
    [126.63,45.75,114,"哈尔滨"],
    [115.97,36.45,116,"聊城"],
    [118.38,31.33,117,"芜湖"],
    [118.02,39.63,119,"唐山"],
    [113.29,33.75,119,"平顶山"],
    [114.48,37.05,119,"邢台"],
    [116.29,37.45,120,"德州"],
    [116.59,35.38,120,"济宁"],
    [112.239741,30.335165,127,"荆州"],
    [111.3,30.7,130,"宜昌"],
    [120.06,29.32,132,"义乌"],
    [119.92,28.45,133,"丽水"],
    [112.44,34.7,134,"洛阳"],
    [119.57,39.95,136,"秦皇岛"],
    [113.16,27.83,143,"株洲"],
    [114.48,38.03,147,"石家庄"],
    [117.67,36.19,148,"莱芜"],
    [111.69,29.05,152,"常德"],
    [115.48,38.85,153,"保定"],
    [112.91,27.87,154,"湘潭"],
    [119.64,29.12,157,"金华"],
    [113.09,29.37,169,"岳阳"],
    [113,28.21,175,"长沙"],
    [118.88,28.97,177,"衢州"],
    [116.7,39.53,193,"廊坊"],
    [115.480656,35.23375,194,"菏泽"],
    [117.27,31.86,229,"合肥"],
    [114.31,30.52,273,"武汉"],
    [125.03,46.58,279,"大庆"],
];







