var province = [["00","安徽省"],["01","澳门特别行政区"],["02","北京"],["03","重庆"],["04","福建省"],["05","甘肃省"],["06","广东省"],["07","广西壮族自治区"],["08","贵州省"],["09","海南省"],["10","河北省"],["11","河南省"],["12","黑龙江省"],["13","湖北省"],["14","湖南省"],["15","吉林省"],["16","江苏省"],["17","江西省"],["18","辽宁省"],["19","内蒙古自治区"],["20","宁夏回族自治区"],["21","青海省"],["22","山东省"],["23","山西省"],["24","陕西省"],["25","上海"],["26","四川省"],["27","台湾省"],["28","天津"],["29","西藏自治区"],["30","香港特别行政区"],["31","新疆维吾尔自治区"],["32","云南省"],["33","浙江省"],["99","其它"]];
var proSchool = {"00":["合肥工业大学","中国科学技术大学","安徽大学","安徽理工大学","安徽工业大学","安徽工程大学","安徽农业大学","安徽医科大学","安徽师范大学","淮北师范大学","安徽财经大学","安徽三联学院","安徽建筑工业学院","安徽文达信息工程学院","安徽中医学院","皖南医学院","蚌埠医学院","淮南师范学院","安徽科技学院","阜阳师范学院","安庆师范学院","合肥师范学院","安徽外国语学院","滁州学院","池州学院","皖西学院","宿州学院","黄山学院","巢湖学院","蚌埠学院","铜陵学院","安徽新华学院","合肥学院","安徽医学高等专科学校","安徽中医药高等专科学校","安庆医药高等专科学校","合肥幼儿师范高等专科学校","亳州师范高等专科学校","桐城师范高等专科学校","马鞍山师范高等专科学校","安徽汽车职业技术学院","皖西卫生职业学院","安徽职业技术学院","芜湖职业技术学院","安徽水利水电职业技术学院","淮北职业技术学院","安徽警官职业学院","安徽商贸职业技术学院","淮南职业技术学院","淮南联合大学","民办万博科技职业学院","铜陵职业技术学院","安徽财贸职业学院","安徽国际商务职业学院","马鞍山职业技术学院","安徽人口职业学院","安徽新闻出版职业技术学院","安徽城市管理职业学院","安徽林业职业技术学院","徽商职业学院","滁州职业技术学院","民办安徽旅游职业学院","安徽邮电职业技术学院","安庆职业技术学院","安徽广播影视职业技术学院","安徽涉外经济职业学院","安徽公安职业学院","安徽审计职业学院","宣城职业技术学院","亳州职业技术学院","安徽中澳科技职业学院","安徽工业职业技术学院","安徽机电职业技术学院","安徽绿海商务职业学院","合肥共达职业技术学院","合肥科技职业学院","蚌埠经济技术职业学院","合肥职业技术学院","阜阳科技职业学院","池州职业技术学院","安徽矿业职业技术学院","安徽黄梅戏艺术职业学院","六安职业技术学院","民办合肥滨湖职业技术学院","合肥通用职业技术学院","安徽体育运动职业技术学院","安徽粮食工程职业学院","合肥信息技术职业学院","安徽艺术职业学院","民办合肥经济技术职业学院","安徽国防科技职业学院","安徽工商职业学院","宿州职业技术学院","安徽冶金科技职业学院","阜阳职业技术学院","安徽工业经济职业技术学院","安徽电子信息职业技术学院","安徽交通职业技术学院","安徽电气工程职业技术学院","安徽工贸职业技术学院","安徽长江职业学院","安徽扬子职业技术学院","安徽现代信息工程职业学院","民办合肥财经职业学院","芜湖信息技术职业学院","黄山职业技术学院","滁州城市职业学院"],"01":["澳门高等校际学院","澳门理工学院","澳门科技大学","联合国大学-国际软件技术研究所","澳门大学"],"02":["北京大学","中国人民大学","清华大学","北京交通大学","北京科技大学","中国石油大学(北京）","中国矿业大学(北京)","中国地质大学(北京)","北京邮电大学","华北电力大学（北京）","北京化工大学","中国农业大学","北京林业大学","北京中医药大学","北京师范大学","北京外国语大学","北京语言大学","对外经济贸易大学","中央财经大学","中国政法大学","中央民族大学","中国人民公安大学","北京协和医学院","北京体育大学","北京理工大学","北京航空航天大学","北京信息科技大学","北京工商大学","北京联合大学","北京工业大学","北方工业大学","首都医科大学","首都师范大学","首都经济贸易大学","中国传媒大学","国际关系学院","中央戏剧学院","中央美术学院","中央音乐学院","北京电子科技学院","外交学院","中国劳动关系学院","中国青年政治学院","中华女子学院","北京服装学院","北京建筑工程学院","北京印刷学院","首钢工学院","北京石油化工学院","北京农学院","首都体育学院","北京第二外国语学院","北京物资学院","北京警察学院","中国音乐学院","中国戏曲学院","北京电影学院","北京舞蹈学院","北京城市学院","北京青年政治学院","北京交通运输职业学院","北京信息职业技术学院","北京科技经营管理学院","北京电子科技职业学院","北京工业职业技术学院","北京科技职业学院","北京戏曲艺术职业学院","北京农业职业学院","北京汇佳职业学院","北京财贸职业学院","北京经济技术职业学院","北京北大方正软件职业技术学院","北京交通职业技术学院","北京培黎职业学院","北京吉利大学","北京经济管理职业学院","北京卫生职业学院","北京政法职业学院","北京体育职业学院","北京社会管理职业学院","北京新圆明职业学院","北京现代职业技术学院","北京京北职业技术学院","北京经贸职业学院","北京劳动保障职业学院","清华大学五道口金融学院","财政部财政科学研究所","中国科学院","中国农业科学院","中国社会科学院研究生院"],"03":["重庆大学","西南大学","重庆交通大学","重庆邮电大学","重庆理工大学","重庆医科大学","重庆师范大学","重庆工商大学","西南政法大学","重庆科技学院","长江师范学院","重庆第二师范学院","四川外语学院","重庆警察学院","四川美术学院","重庆三峡学院","重庆文理学院","重庆电力高等专科学校","重庆三峡医药高等专科学校","重庆医药高等专科学校","重庆化工职业学院","重庆工业职业技术学院","重庆正大软件职业技术学院","重庆城市管理职业学院","重庆公共运输职业学院","重庆安全技术职业学院","重庆三峡职业学院","重庆工贸职业技术学院","重庆民生职业技术学院","重庆轻工职业学院","重庆机电职业技术学院","重庆电信职业学院","重庆电子工程职业学院","重庆城市职业学院","重庆水利电力职业技术学院","重庆商务职业学院","重庆电讯职业学院","重庆能源职业学院","重庆传媒职业学院","重庆工商职业学院","重庆经贸职业学院","重庆建筑工程职业学院","重庆青年职业技术学院","重庆财经职业学院","重庆科创职业学院","重庆房地产职业学院","重庆海联职业技术学院","重庆信息技术职业学院","重庆航天职业技术学院","重庆工程职业技术学院","重庆艺术工程职业学院","重庆旅游职业学院","重庆交通职业学院"],"04":["厦门大学","华侨大学","福建农林大学","集美大学","福州大学","仰恩大学","福建医科大学","福建中医药大学","福建师范大学","厦门理工学院","闽南理工学院","福建工程学院","宁德师范学院","泉州师范学院","漳州师范学院","福州外语外贸学院","福建警察学院","闽江学院","三明学院","龙岩学院","莆田学院","武夷学院","福建江夏学院","厦门医学高等专科学校","泉州医学高等专科学校","福建幼儿师范高等专科学校","泉州幼儿师范高等专科学校","福建商业高等专科学校","福州英华职业学院","福建船政交通职业学院","厦门华厦职业学院","泉州纺织服装职业学院","漳州职业技术学院","黎明职业大学","福建华南女子职业学院","闽西职业技术学院","福州黎明职业技术学院","厦门东海职业技术学院","漳州卫生职业学院","福州职业技术学院","福州海峡职业技术学院","泉州理工职业学院","福建警官职业学院","闽北职业技术学院","泉州华光摄影艺术职业学院","福建林业职业技术学院","泉州经贸职业技术学院","福建卫生职业技术学院","厦门华天涉外职业技术学院","漳州理工职业学院","厦门兴才职业技术学院","泉州信息职业技术学院","湄洲湾职业技术学院","福州软件职业技术学院","福州科技职业技术学院","福建艺术职业学院","福建生物工程职业技术学院","德化陶瓷职业技术学院","福建体育职业技术学院","宁德职业技术学院","厦门软件职业技术学院","三明职业技术学院","福建对外经济贸易职业技术学院","厦门海洋职业技术学院","福建农业职业技术学院","福建信息职业技术学院","厦门演艺职业学院","武夷山职业学院","福建电力职业技术学院","漳州科技职业学院","厦门城市职业学院","厦门南洋职业学院","漳州城市职业学院","福建水利电力职业技术学院","泉州轻工职业学院","泉州泰山航海职业学院","厦门安防科技职业学院"],"05":["兰州大学","西北民族大学","兰州理工大学","兰州交通大学","甘肃农业大学","西北师范大学","兰州工业学院","甘肃中医学院","陇东学院","甘肃民族师范学院","天水师范学院","兰州商学院","甘肃政法学院","河西学院","兰州城市学院","平凉医学高等专科学校","张掖医学高等专科学校","陇南师范高等专科学校","定西师范高等专科学校","甘肃机电职业技术学院","甘肃联合大学","兰州石化职业技术学院","兰州资源环境职业技术学院","甘肃畜牧工程职业技术学院","甘肃农业职业技术学院","甘肃警察职业学院","甘肃交通职业技术学院","武威职业学院","甘肃有色冶金职业技术学院","白银矿冶职业技术学院","甘肃钢铁职业技术学院","甘肃工业职业技术学院","兰州职业技术学院","酒泉职业技术学院","甘肃建筑职业技术学院","甘肃林业职业技术学院","兰州外语职业学院"],"06":["中山大学","华南理工大学","暨南大学","汕头大学","深圳大学","五邑大学","广东工业大学","南方科技大学","华南农业大学","广东海洋大学","广州中医药大学","南方医科大学","华南师范大学","广东外语外贸大学","广州大学","北京师范大学-香港浸会大学联合国际学院","广东石油化工学院","肇庆学院","东莞理工学院","广东科技学院","仲恺农业工程学院","广东医学院","广州医学院","广东药学院","韶关学院","湛江师范学院","嘉应学院","韩山师范学院","惠州学院","广东第二师范学院","广东商学院","广东金融学院","广东警官学院","广州体育学院","广州美术学院","星海音乐学院","广东技术师范学院","广东培正学院","佛山科学技术学院","广东白云学院","广州航海高等专科学校","肇庆医学高等专科学校","私立华联学院","民办南华工商学院","广州民航职业技术学院","广东食品药品职业学院","广东松山职业技术学院","深圳职业技术学院","潮汕职业技术学院","顺德职业技术学院","广东新安职业技术学院","广东农工商职业技术学院","广东交通职业技术学院","广东水利电力职业技术学院","广东轻工职业技术学院","佛山职业技术学院","广州珠江职业技术学院","广州现代信息工程职业技术学院","广东亚视演艺职业学院","清远职业技术学院","汕头职业技术学院","广东邮电职业技术学院","揭阳职业技术学院","广州南洋理工职业学院","广州科技职业技术学院","广东科贸职业学院","深圳信息职业技术学院","中山职业技术学院","广东司法警官职业学院","广州松田职业学院","广东省外语艺术职业学院","广东文理职业学院","广州番禺职业技术学院","广州铁路职业技术学院","广州华南商贸职业学院","广州华立科技职业学院","广州城市职业学院","广东工程职业技术学院","广州科技贸易职业学院","肇庆工商职业技术学院","广东体育职业技术学院","广东行政职业学院","广东文艺职业学院","广州体育职业技术学院","广东科学技术职业学院","中山火炬职业技术学院","江门职业技术学院","茂名职业技术学院","广州工程技术职业学院","广州涉外经济职业技术学院","惠州经济职业技术学院","广州城建职业学院","肇庆科技职业技术学院","珠海艺术职业学院","南海东软信息技术职业学院","广州康大职业技术学院","广州工商职业技术学院","广东青年职业学院","广州东华职业学院","广东创新科技职业学院","广东工贸职业技术学院","珠海城市职业技术学院","汕尾职业技术学院","广东财经职业学院","广东职业技术学院","罗定职业技术学院","河源职业技术学院","广东岭南职业技术学院","广东女子职业技术学院","广东建设职业技术学院","广东机电职业技术学院","广东理工职业学院","惠州卫生职业技术学院","阳江职业技术学院","广东舞蹈戏剧职业学院","广东南方职业学院","广州华商职业学院","广州华夏职业学院","广东环境保护工程职业学院","广东信息工程职业学院","东莞职业技术学院"],"07":["广西大学","桂林电子科技大学","桂林理工大学","广西医科大学","广西中医药大学","广西师范大学","广西民族大学","桂林航天工业学院","广西工学院","桂林医学院","右江民族医学院","广西师范学院","广西民族师范学院","河池学院","玉林师范学院","广西外国语学院","广西财经学院","广西艺术学院","百色学院","贺州学院","钦州学院","梧州学院","柳州医学高等专科学校","柳州师范高等专科学校","桂林师范高等专科学校","广西幼儿师范高等专科学校","桂林旅游高等专科学校","广西警官高等专科学校","广西体育高等专科学校","广西科技职业学院","广西卫生职业技术学院","广西机电职业技术学院","广西职业技术学院","柳州职业技术学院","南宁职业技术学院","广西国际商务职业技术学院","广西经贸职业技术学院","北海职业学院","北海艺术设计职业学院","广西现代职业技术学院","桂林山水职业学院","广西演艺职业学院","广西工业职业技术学院","广西电力职业技术学院","广西经济职业学院","广西生态工程职业技术学院","贵港职业学院","广西城市职业学院","广西工商职业技术学院","百色职业学院","广西农业职业技术学院","广西工程职业学院","柳州铁道职业技术学院","广西理工职业技术学院","梧州职业学院","广西英华国际职业学院","广西建设职业技术学院","广西水利电力职业技术学院","广西交通职业技术学院","柳州城市职业学院","邕江大学"],"08":["贵州大学","贵州师范大学","贵州财经大学","贵州民族大学","贵阳医学院","遵义医学院","贵阳中医学院","毕节学院","遵义师范学院","黔南民族师范学院","六盘水师范学院","兴义民族师范学院","贵州师范学院","安顺学院","贵阳学院","凯里学院","铜仁学院","黔南民族医学高等专科学校","遵义医药高等专科学校","贵州商业高等专科学校","贵州航天职业技术学院","贵州电子信息职业技术学院","贵州交通职业技术学院","贵州警官职业学院","遵义职业技术学院","贵阳护理职业学院","贵州工业职业技术学院","贵州盛华职业学院","黔东南民族职业技术学院","安顺职业技术学院","贵州职业技术学院","毕节职业技术学院","贵州电力职业技术学院","贵州工商职业学院","黔南民族职业技术学院","铜仁职业技术学院","贵州亚泰职业学院","贵州轻工职业技术学院","贵阳职业技术学院","六盘水职业技术学院","黔西南民族职业技术学院"],"09":["海南大学","海南师范大学","海口经济学院","海南医学院","琼州学院","三亚学院","琼台师范高等专科学校","海南职业技术学院","三亚城市职业学院","海南科技职业学院","三亚航空旅游职业学院","海南软件职业技术学院","海南经贸职业技术学院","海南工商职业学院","三亚理工职业学院","海南政法职业学院","海南外国语职业学院"],"10":["河北大学","河北工业大学","华北电力大学（保定）","燕山大学","河北联合大学","河北科技大学","石家庄铁道大学","河北工程大学","河北农业大学","河北医科大学","河北师范大学","河北经贸大学","中国人民武装警察部队学院","中央司法警官学院","防灾科技学院","华北科技学院","北华航天工业学院","河北建筑工程学院","石家庄经济学院","河北科技学院","承德医学院","唐山师范学院","廊坊师范学院","沧州师范学院","河北民族师范学院","邢台学院","河北科技师范学院","河北外国语学院","河北金融学院","河北体育学院","河北传媒学院","河北美术学院","邯郸学院","衡水学院","石家庄学院","保定学院","唐山学院","河北北方学院","承德石油高等专科学校","河北工程技术高等专科学校","石家庄人民医学高等专科学校","邢台医学高等专科学校","石家庄医学高等专科学校","沧州医学高等专科学校","石家庄幼儿师范高等专科学校","承德护理职业学院","河北化工医药职业技术学院","邯郸职业技术学院","张家口职业技术学院","沧州职业技术学院","保定职业技术学院","石家庄铁路职业技术学院","河北能源职业技术学院","石家庄职业技术学院","邢台职业技术学院","河北工业职业技术学院","石家庄科技职业学院","河北劳动关系职业学院","唐山职业技术学院","渤海石油职业学院","石家庄科技工程职业学院","石家庄邮电职业技术学院","河北司法警官职业学院","冀中职业学院","石家庄工商职业学院","石家庄经济职业学院","石家庄城市职业学院","石家庄工程职业学院","河北省艺术职业学院","河北旅游职业学院","河北女子职业技术学院","廊坊职业技术学院","保定电力职业技术学院","河北机电职业技术学院","石家庄科技信息职业学院","河北公安警察职业学院","石家庄外国语职业学院","河北建材职业技术学院","河北政法职业学院","河北石油职业技术学院","唐山工业职业技术学院","衡水职业技术学院","秦皇岛职业技术学院","唐山科技职业技术学院","泊头职业学院","河北轨道运输职业技术学院","宣化科技职业学院","廊坊东方职业技术学院","廊坊卫生职业学院","河北软件职业技术学院","石家庄理工职业学院","石家庄信息工程职业学院","河北交通职业技术学院","石家庄财经职业学院","河北外国语职业学院","廊坊燕京职业技术学院"],"11":["信息工程大学","郑州大学","河南大学","河南科技大学","河南理工大学","河南工业大学","河南农业大学","河南师范大学","河南财经政法大学","郑州华信学院","郑州科技学院","华北水利水电学院","郑州轻工业学院","中原工学院","郑州航空工业管理学院","河南城建学院","安阳工学院","南阳理工学院","黄河科技学院","河南工程学院","商丘工学院","洛阳理工学院","河南中医学院","新乡医学院","信阳师范学院","周口师范学院","商丘师范学院","安阳师范学院","南阳师范学院","洛阳师范学院","郑州师范学院","郑州升达经贸管理学院","郑州成功财经学院","河南警察学院","河南科技学院","新乡学院","平顶山学院","黄淮学院","许昌学院","商丘学院","铁道警官高等专科学校","郑州电力高等专科学校","河南机电高等专科学校","郑州牧业工程高等专科学校","信阳农业高等专科学校","南阳医学高等专科学校","商丘医学高等专科学校","漯河医学高等专科学校","郑州澍青医学高等专科学校","安阳幼儿师范高等专科学校","郑州幼儿师范高等专科学校","焦作师范高等专科学校","河南财政税务高等专科学校","河南商业高等专科学校","焦作工贸职业学院","河南化工职业学院","郑州理工职业学院","郑州信息工程职业学院","河南艺术职业学院","开封文化艺术职业学院","三门峡职业技术学院","郑州铁路职业技术学院","黄河水利职业技术学院","漯河职业技术学院","开封大学","河南职业技术学院","中州大学","焦作大学","许昌职业技术学院","郑州信息科技职业学院","郑州经贸职业学院","河南工业职业技术学院","河南司法警官职业学院","周口职业技术学院","鹤壁职业技术学院","平顶山工业职业技术学院","商丘职业技术学院","濮阳职业技术学院","嵩山少林武术职业学院","许昌电气职业学院","河南护理职业学院","河南机电职业学院","郑州电力职业技术学院","安阳职业技术学院","信阳涉外职业技术学院","郑州电子信息职业技术学院","洛阳职业技术学院","郑州工业安全职业学院","永城职业学院","郑州旅游职业学院","郑州职业技术学院","信阳职业技术学院","郑州商贸旅游职业学院","新乡职业技术学院","驻马店职业技术学院","河南经贸职业学院","河南交通职业技术学院","河南农业职业学院","南阳职业学院","济源职业技术学院","周口科技职业学院","河南推拿职业学院","郑州城市职业学院","河南检察职业学院","河南工业贸易职业学院","郑州黄河护理职业学院","河南质量工程职业学院","漯河食品职业学院","郑州交通职业学院","河南建筑职业技术学院","鹤壁汽车工程职业学院","许昌陶瓷职业学院","长垣烹饪职业技术学院"],"12":["东北林业大学","哈尔滨工业大学","哈尔滨工程大学","黑龙江大学","佳木斯大学","齐齐哈尔大学","哈尔滨理工大学","东北石油大学","东北农业大学","黑龙江八一农垦大学","哈尔滨医科大学","黑龙江中医药大学","哈尔滨师范大学","哈尔滨商业大学","哈尔滨学院","黑龙江工程学院","齐齐哈尔工程学院","黑龙江科技学院","哈尔滨远东理工学院","哈尔滨石油学院","齐齐哈尔医学院","牡丹江医学院","牡丹江师范学院","大庆师范学院","黑龙江外国语学院","哈尔滨金融学院","哈尔滨德强商务学院","哈尔滨体育学院","黑龙江东方学院","绥化学院","哈尔滨剑桥学院","哈尔滨广厦学院","黑河学院","哈尔滨华德学院","黑龙江护理高等专科学校","大庆医学高等专科学校","齐齐哈尔高等师范专科学校","黑龙江幼儿师范高等专科学校","鹤岗师范高等专科学校","鸡西大学","黑龙江司法警官职业学院","黑龙江建筑职业技术学院","牡丹江大学","伊春职业学院","黑龙江农垦职业学院","黑龙江农业职业技术学院","黑龙江林业职业技术学院","黑龙江农业工程职业学院","大庆职业学院","黑龙江农业经济职业学院","黑龙江旅游职业技术学院","大兴安岭职业学院","黑龙江职业学院","哈尔滨现代公共关系职业学院","黑龙江三江美术职业学院","黑龙江煤炭职业技术学院","黑龙江信息技术职业学院","黑龙江生态工程职业学院","七台河职业学院","黑龙江艺术职业学院","哈尔滨华夏计算机职业技术学院","黑龙江生物科技职业学院","黑龙江公安警官职业学院","黑龙江农垦科技职业学院","黑龙江商业职业学院","哈尔滨科学技术职业学院","黑龙江民族职业学院","哈尔滨铁道职业技术学院","黑龙江粮食职业学院","哈尔滨江南职业技术学院","哈尔滨应用职业技术学院","黑龙江交通职业技术学院","佳木斯职业学院","齐齐哈尔理工职业学院","哈尔滨工程技术职业学院","哈尔滨职业技术学院","哈尔滨电力职业技术学院"],"13":["武汉大学","中南财经政法大学","华中科技大学","武汉理工大学","中国地质大学(武汉）","华中农业大学","华中师范大学","中南民族大学","湖北大学","长江大学","江汉大学","三峡大学","武汉科技大学","湖北工业大学","武汉工程大学","武汉纺织大学","湖北中医药大学","荆楚理工学院","武汉工业学院","湖北汽车工业学院","武昌工学院","武昌理工学院","湖北医药学院","湖北师范学院","黄冈师范学院","湖北工程学院","湖北第二师范学院","湖北经济学院","武汉长江工商学院","湖北警官学院","武汉体育学院","湖北美术学院","武汉音乐学院","湖北民族学院","湖北科技学院","湖北理工学院","湖北文理学院","武汉生物工程学院","汉口学院","武汉东湖学院","湖北中医药高等专科学校","郧阳师范高等专科学校","武汉工贸职业学院","鄂州职业大学","荆州理工职业学院","武汉商业服务学院","恩施职业技术学院","襄阳职业技术学院","湖北职业技术学院","十堰职业技术学院","长江职业学院","武汉职业技术学院","武汉船舶职业技术学院","黄冈职业技术学院","武汉信息传播职业技术学院","湖北财税职业学院","武汉城市职业学院","湖北国土资源职业学院","咸宁职业技术学院","鄂东职业技术学院","黄冈科技职业学院","湖北艺术职业学院","三峡旅游职业技术学院","江汉艺术职业学院","湖北生态工程职业技术学院","长江工程职业技术学院","湖北生物科技职业学院","天门职业学院","随州职业技术学院","武汉警官职业学院","湖北开放职业学院","武汉科技职业学院","武汉交通职业学院","武汉商贸职业学院","武汉外语外事职业学院","湖北水利水电职业技术学院","湖北城市建设职业技术学院","武昌职业学院","湖北三峡职业技术学院","武汉民政职业学院","湖北体育职业学院","襄阳汽车职业技术学院","武汉航海职业技术学院","三峡电力职业学院","武汉铁路职业技术学院","湖北科技职业学院","湖北青年职业学院","黄石职业技术学院","武汉工业职业技术学院","武汉电力职业技术学院","仙桃职业学院","武汉工程职业技术学院","荆州职业技术学院","武汉软件工程职业学院","湖北轻工职业技术学院","湖北交通职业技术学院"],"14":["国防科学技术大学","中南大学","湖南大学","湘潭大学","湖南科技大学","吉首大学","长沙理工大学","南华大学","湖南工业大学","湖南农业大学","湖南中医药大学","湖南师范大学","长沙学院","湖南第一师范学院","湖南工学院","湖南理工学院","湖南城市学院","湖南工程学院","中南林业科技大学","长沙医学院","衡阳师范学院","湘南学院","湖南涉外经济学院","湖南财政经济学院","湖南商学院","湖南警察学院","湖南女子学院","湖南科技学院","湖南人文科技学院","湖南文理学院","邵阳学院","怀化学院","怀化医学高等专科学校","邵阳医学高等专科学校","益阳医学高等专科学校","湖南中医药高等专科学校","株洲师范高等专科学校","长沙师范学校","湖南税务高等专科学校","长沙航空职业技术学院","湖南冶金职业技术学院","湖南信息职业技术学院","湖南大众传媒职业技术学院","湖南工业职业技术学院","湖南环境生物职业技术学院","湖南铁道职业技术学院","长沙民政职业技术学院","永州职业技术学院","湖南外国语职业学院","湖南电子科技职业学院","湖南都市职业学院","湖南科技经贸职业学院","湖南软件职业学院","湖南信息科学职业学院","湘西民族职业技术学院","衡阳财经工业职业技术学院","益阳职业技术学院","湖南同德职业学院","湖南体育职业学院","湖南艺术职业学院","湖南司法警官职业学院","湖南工程职业技术学院","湖南工艺美术职业学院","湖南电气职业技术学院","湖南民族职业学院","湖南外贸职业学院","邵阳职业技术学院","湖南吉利汽车职业技术学院","湖南水利水电职业技术学院","长沙商贸旅游职业技术学院","湖南科技工业职业技术学院","湖南有色金属职业技术学院","湖南食品药品职业学院","长沙卫生职业学院","湖南网络工程职业学院","长沙环境保护职业技术学院","张家界航空工业职业技术学院","长沙电力职业技术学院","株洲职业技术学院","湖南石油化工职业技术学院","湖南城建职业技术学院","湖南化工职业技术学院","潇湘职业学院","长沙职业技术学院","怀化职业技术学院","岳阳职业技术学院","常德职业技术学院","湖南交通职业技术学院","娄底职业技术学院","湖南理工职业技术学院","长沙通信职业技术学院","湖南九嶷职业技术学院","湘潭职业技术学院","湖南商务职业技术学院","郴州职业技术学院","湖南生物机电职业技术学院","保险职业学院","湖南科技职业学院","湖南现代物流职业技术学院","湖南安全技术职业学院","湖南高速铁路职业技术学院","湖南机电职业技术学院","湖南铁路科技职业技术学院","湖南三一工业职业技术学院","长沙南方职业学院","湖南高尔夫旅游职业学院","湖南工商职业学院"],"15":["吉林大学","东北师范大学","延边大学","北华大学","长春大学","长春理工大学","长春工业大学","吉林农业大学","长春中医药大学","吉林师范大学","吉林财经大学","东北电力大学","长春工程学院","吉林建筑工程学院","吉林化工学院","长春建筑学院","吉林农业科技学院","吉林医药学院","通化师范学院","白城师范学院","吉林工程技术师范学院","长春师范学院","吉林华桥外国语学院","吉林工商学院","吉林警察学院","吉林体育学院","吉林艺术学院","吉林动画学院","长春汽车工业高等专科学校","长春医学高等专科学校","白城医学高等专科学校","长春金融高等专科学校","吉林科技职业技术学院","四平职业大学","辽源职业技术学院","长春东方职业学院","吉林交通职业技术学院","吉林铁道职业技术学院","吉林司法警官职业学院","白城职业技术学院","吉林工业职业技术学院","吉林电子信息职业技术学院","长白山职业技术学院","松原职业技术学院","长春信息技术职业学院","延边职业技术学院","长春职业技术学院","吉林农业工程职业技术学院","吉林城市职业技术学院"],"16":["南京大学","东南大学","中国矿业大学（徐州）","河海大学","江南大学","南京农业大学","中国药科大学","南京理工大学","南京航空航天大学","苏州大学","扬州大学","江苏大学","江苏科技大学","南京邮电大学","南京工业大学","常州大学","南京林业大学","南京医科大学","南京中医药大学","南京师范大学","江苏师范大学","南京财经大学","南通大学","西交利物浦大学","南京森林警察学院","南京信息工程大学","金陵科技学院","徐州工程学院","盐城工学院","淮阴工学院","常州工学院","南京工程学院","淮海工学院","徐州医学院","盐城师范学院","南京晓庄学院","苏州科技学院","江苏技术师范学院","淮阴师范学院","南京审计学院","江苏警官学院","南京体育学院","南京艺术学院","常熟理工学院","三江学院","无锡太湖学院","连云港师范高等专科学校","泰州师范高等专科学校","徐州幼儿师范高等专科学校","镇江市高等专科学校","江苏畜牧兽医职业技术学院","无锡职业技术学院","南通纺织职业技术学院","苏州工艺美术职业技术学院","南京工业职业技术学院","无锡商业职业技术学院","泰州职业技术学院","南通职业大学","连云港职业技术学院","民办明达职业技术学院","苏州职业大学","江苏城市职业学院","沙洲职业工学院","扬州市职业大学","江苏建筑职业技术学院","南通航运职业技术学院","宿迁职业技术学院","江苏信息职业技术学院","江苏农林职业技术学院","江苏食品职业技术学院","徐州工业职业技术学院","常州机电职业技术学院","常州轻工职业技术学院","南京旅游职业学院","常州工程职业技术学院","南京信息职业技术学院","苏州高博软件技术职业学院","盐城卫生职业技术学院","苏州工业职业技术学院","江阴职业技术学院","南京城市职业学院","徐州生物工程职业技术学院","苏州信息职业技术学院","南京机电职业技术学院","江苏建康职业学院","苏州卫生职业技术学院","江苏海事职业技术学院","苏州经贸职业技术学院","江苏经贸职业技术学院","南京特殊教育职业技术学院","扬州环境资源职业技术学院","金肯职业技术学院","应天职业技术学院","南京化工职业技术学院","炎黄职业技术学院","苏州农业职业技术学院","无锡工艺职业技术学院","常州纺织服装职业技术学院","紫琅职业技术学院","常州信息职业技术学院","健雄职业技术学院","江苏财经职业技术学院","盐城纺织职业技术学院","扬州工业职业技术学院","江海职业技术学院","南京铁道职业技术学院","九州职业技术学院","江苏联合职业技术学院","金山职业技术学院","无锡科技职业学院","硅湖职业技术学院","无锡城市职业技术学院","苏州托普信息职业技术学院","正德职业技术学院","江南影视艺术职业学院","南通农业职业技术学院","苏州工业园区职业技术学院","太湖创意职业技术学院","淮安信息职业技术学院","无锡南洋职业技术学院","钟山职业技术学院","南京交通职业技术学院","建东职业技术学院","南京视觉艺术职业学院","昆山登云科技职业学院","苏州港大思培科技职业学院","宿迁泽达职业技术学院","苏州工业园区服务外包职业学院"],"17":["南昌大学","江西理工大学","华东交通大学","东华理工大学","南昌航空大学","江西农业大学","江西师范大学","江西科技师范大学","江西财经大学","井冈山大学","景德镇陶瓷学院","南昌工程学院","南昌理工学院","南昌工学院","江西中医学院","赣南医学院","上饶师范学院","赣南师范学院","江西警察学院","江西服装学院","九江学院","江西科技学院","新余学院","宜春学院","江西中医药高等专科学校","南昌师范高等专科学校","景德镇高等专科学校","萍乡高等专科学校","江西护理职业技术学院","九江职业技术学院","江西工业职业技术学院","九江职业大学","江西泰豪动漫职业学院","江西先锋软件职业技术学院","江西工业贸易职业技术学院","江西枫林涉外经贸职业学院","江西司法警官职业学院","江西城市职业学院","江西太阳能科技职业学院","江西生物科技职业学院","江西电力职业技术学院","江西外语外贸职业学院","宜春职业技术学院","江西旅游商贸职业学院","抚州职业技术学院","江西青年职业学院","江西工程职业学院","江西建设职业技术学院","江西管理职业学院","江西农业工程职业学院","江西航空职业技术学院","江西经济管理职业学院","上饶职业技术学院","江西应用工程职业学院","江西制造职业技术学院","景德镇陶瓷职业技术学院","鹰潭职业技术学院","江西应用技术职业学院","江西渝州科技职业学院","共青科技职业学院","江西冶金职业技术学院","江西机电职业技术学院","江西新闻出版职业技术学院","江西现代职业技术学院","江西艺术职业学院","赣西科技职业学院","江西科技职业学院","江西交通职业技术学院","南昌职业学院","江西工业工程职业技术学院","江西工商职业技术学院","江西信息应用职业技术学院","江西环境工程职业学院","江西陶瓷工艺美术职业技术学院","江西财经职业学院"],"18":["大连理工大学","东北大学","大连海事大学","辽宁大学","大连大学","沈阳大学","沈阳理工大学","辽宁工程技术大学","沈阳工业大学","沈阳建筑大学","辽宁石油化工大学","大连交通大学","沈阳化工大学","辽宁科技大学","大连工业大学","辽宁工业大学","沈阳航空航天大学","沈阳农业大学","大连海洋大学","中国医科大学","大连医科大学","辽宁中医药大学","沈阳药科大学","辽宁师范大学","沈阳师范大学","渤海大学","东北财经大学","大连民族学院","中国刑事警察学院","沈阳工程学院","辽宁科技学院","大连东软信息学院","大连科技学院","辽宁医学院","沈阳医学院","辽宁何氏医学院","鞍山师范学院","大连外国语学院","辽宁财贸学院","沈阳体育学院","鲁迅美术学院","沈阳音乐学院","大连艺术学院","辽东学院","辽宁对外经贸学院","辽宁交通高等专科学校","朝阳师范高等专科学校","抚顺师范高等专科学校","铁岭师范高等专科学校","锦州师范高等专科学校","辽宁税务高等专科学校","辽宁警官高等专科学校","阜新高等专科学校","辽宁城市建设职业技术学院","辽宁冶金职业技术学院","辽宁工程职业学院","铁岭卫生职业学院","辽宁卫生职业技术学院","抚顺职业技术学院","辽阳职业技术学院","大连职业技术学院","渤海船舶职业学院","盘锦职业技术学院","大连商务职业学院","辽宁农业职业技术学院","营口职业技术学院","沈阳职业技术学院","辽宁金融职业学院","辽河石油职业技术学院","辽宁装备制造职业技术学院","辽宁现代服务职业技术学院","辽宁政法职业学院","沈阳北软信息职业技术学院","辽宁体育运动职业技术学院","辽宁职业学院","大连装备制造职业技术学院","沈阳航空职业技术学院","辽宁地质工程职业学院","辽宁铁道职业技术学院","辽宁建筑职业技术学院","大连枫叶职业技术学院","辽宁商贸职业学院","大连翻译职业学院","辽宁理工职业学院","大连软件职业学院","辽宁美术职业学院","大连航运职业技术学院","辽宁林业职业技术学院","辽宁经济职业技术学院","辽宁信息职业技术学院","辽宁广告职业学院","大连汽车职业技术学院","辽宁机电职业技术学院","辽宁石化职业技术学院"],"19":["内蒙古大学","内蒙古科技大学","内蒙古民族大学","内蒙古工业大学","内蒙古农业大学","内蒙古医科大学","内蒙古师范大学","内蒙古财经大学","河套学院","赤峰学院","集宁师范学院","呼伦贝尔学院","呼和浩特民族学院","乌兰察布医学高等专科学校","满洲里俄语职业学院","包头职业技术学院","内蒙古建筑职业技术学院","内蒙古机电职业技术学院","乌海职业技术学院","呼和浩特职业学院","内蒙古交通职业技术学院","阿拉善职业技术学院","赤峰工业职业技术学院","内蒙古能源职业学院","乌兰察布职业学院","内蒙古电子信息职业技术学院","通辽职业学院","内蒙古化工职业学院","内蒙古商贸职业学院","包头铁道职业技术学院","包头钢铁职业技术学院","内蒙古美术职业学院","科尔沁艺术职业学院","包头轻工职业技术学院","锡林郭勒职业学院","兴安职业技术学院","内蒙古警察职业学院","内蒙古体育职业学院","内蒙古经贸外语职业学院","赤峰职业技术学院","内蒙古北方职业技术学院","鄂尔多斯职业学院","内蒙古科技职业学院","内蒙古丰州职业学院","呼伦贝尔职业技术学院","内蒙古工业职业学院"],"20":["北方民族大学","宁夏大学","宁夏理工学院","宁夏医科大学","宁夏师范学院","银川能源学院","宁夏民族职业技术学院","宁夏司法警官职业学院","宁夏财经职业技术学院","宁夏工商职业技术学院","宁夏防沙治沙职业技术学院","宁夏职业技术学院","宁夏工业职业学院","宁夏建设职业技术学院"],"21":["青海大学","青海师范大学","青海民族大学","青海畜牧兽医职业技术学院","青海卫生职业技术学院","青海建筑职业技术学院","青海交通职业技术学院","青海警官职业学院"],"22":["山东大学","中国石油大学(华东）","中国海洋大学","青岛大学","山东科技大学","山东理工大学","烟台大学","聊城大学","青岛科技大学","青岛理工大学","济南大学","山东建筑大学","山东农业大学","青岛农业大学","山东中医药大学","山东师范大学","曲阜师范大学","临沂大学","山东财经大学","鲁东大学","山东万杰医学院","潍坊科技学院","山东英才学院","山东轻工业学院","潍坊学院","山东交通学院","青岛工学院","潍坊医学院","泰山医学院","滨州医学院","济宁医学院","德州学院","齐鲁师范学院","山东工商学院","山东警察学院","山东青年政治学院","山东政法学院","山东体育学院","山东艺术学院","山东工艺美术学院","泰山学院","枣庄学院","烟台南山学院","青岛滨海学院","济宁学院","菏泽学院","滨州学院","山东女子学院","山东协和学院","青岛黄海学院","山东电力高等专科学校","菏泽医学专科学校","山东医学高等专科学校","山东中医药高等专科学校","淄博师范高等专科学校","济南幼儿师范高等专科学校","山东畜牧兽医职业学院","山东商业职业技术学院","日照职业技术学院","曲阜远东职业技术学院","青岛职业技术学院","济宁职业技术学院","山东劳动职业技术学院","聊城职业技术学院","莱芜职业技术学院","威海职业学院","滨州职业学院","山东杏林科技职业学院","山东工业职业学院","山东胜利职业学院","山东华宇职业技术学院","山东商务职业学院","枣庄科技职业学院","山东水利职业学院","山东力明科技职业学院","东营职业学院","潍坊职业学院","山东职业学院","德州职业技术学院","青岛飞洋职业技术学院","青岛港湾职业技术学院","潍坊护理职业学院","潍坊工商职业学院","山东凯文科技职业学院","烟台汽车工程职业学院","山东城市建设职业学院","山东大王职业学院","烟台职业学院","山东海事职业学院","山东科技职业学院","泰山护理职业学院","山东圣翰财贸职业学院","青岛酒店管理职业技术学院","山东服装职业学院","枣庄职业学院","山东外国语职业学院","潍坊工程职业学院","济南工程职业技术学院","青岛求实职业技术学院","青岛恒星职业技术学院","山东传媒职业学院","济南职业学院","德州科技职业学院","泰山职业技术学院","济南护理职业学院","淄博职业学院","山东电子职业技术学院","山东现代职业学院","山东药品食品职业学院","菏泽家政职业学院","山东旅游职业学院","临沂职业学院","山东信息职业技术学院","山东理工职业学院","山东铝业职业学院","山东经贸职业学院","山东司法警官职业学院","烟台工程职业技术学院","山东丝绸纺织职业学院","山东外贸职业学院","山东化工职业学院","山东交通职业学院","山东外事翻译职业学院","青岛远洋船员职业学院","山东文化产业职业学院","哈尔滨工业大学（威海校区）"],"23":["山西大学","太原理工大学","中北大学","太原科技大学","山西农业大学","山西医科大学","山西师范大学","山西大同大学","山西财经大学","太原工业学院","山西中医学院","长治医学院","吕梁学院","忻州师范学院","太原师范学院","运城学院","长治学院","晋中学院","山西工商学院","太原电力高等专科学校","运城幼儿师范高等专科学校","晋中师范高等专科学校","阳泉师范高等专科学校","山西省财政税务专科学校","山西警官高等专科学校","太原大学","山西药科职业学院","山西兴华职业学院","山西建筑职业技术学院","山西轻工职业技术学院","山西工程职业技术学院","运城职业技术学院","山西老区职业技术学院","大同煤炭职业技术学院","山西交通职业技术学院","山西艺术职业学院","长治职业技术学院","晋城职业技术学院","山西电力职业技术学院","山西体育职业学院","山西警官职业学院","山西国际商务职业学院","山西华澳商贸职业学院","山西机电职业技术学院","山西戏剧职业学院","山西财贸职业技术学院","山西林业职业技术学院","山西水利职业技术学院","阳泉职业技术学院","晋中职业技术学院","运城护理职业学院","忻州职业技术学院","山西金融职业学院","临汾职业技术学院","山西职业技术学院","太原城市职业技术学院","山西运城农业职业技术学院","山西青年职业学院","山西经贸职业学院","山西同文职业技术学院","山西信息职业技术学院","山西管理职业学院","山西旅游职业学院","潞安职业技术学院","太原旅游职业学院","朔州职业技术学院","山西煤炭职业技术学院"],"24":["第四军医大学","西安交通大学","长安大学","西安电子科技大学","西北农林科技大学","陕西师范大学","西北工业大学","西北大学","延安大学","西安理工大学","西安建筑科技大学","西安科技大学","西安石油大学","西安工程大学","西安工业大学","西安邮电大学","西安外国语大学","西北政法大学","陕西科技大学","西安思源学院","陕西国际商贸学院","西安航空学院","陕西中医学院","西安医学院","宝鸡文理学院","渭南师范学院","榆林学院","陕西理工学院","咸阳师范学院","陕西学前师范学院","西安财经学院","西安体育学院","西安美术学院","西安音乐学院","陕西服装工程学院","西京学院","西安翻译学院","西安外事学院","西安文理学院","西安欧亚学院","西安培华学院","商洛学院","安康学院","西安电力高等专科学校","西安医学高等专科学校","陕西工业职业技术学院","杨凌职业技术学院","西安东方亚太职业技术学院","西安汽车科技职业学院","西安科技商贸职业学院","西安海棠职业学院","陕西邮电职业技术学院","陕西警官职业学院","商洛职业技术学院","陕西经济管理职业技术学院","陕西铁路工程职业技术学院","陕西电子信息职业技术学院","西安职业技术学院","陕西旅游烹饪职业学院","咸阳职业技术学院","铜川职业技术学院","安康职业技术学院","西安铁路职业技术学院","西安航空职业技术学院","陕西职业技术学院","陕西能源职业技术学院","陕西交通职业技术学院","渭南职业技术学院","陕西国防工业职业技术学院","陕西航空职业技术学院","陕西电子科技职业学院","陕西工商职业学院","陕西青年职业学院","西安高新科技职业学院","西安城市建设职业学院","延安职业技术学院","汉中职业技术学院","宝鸡职业技术学院","陕西财经职业技术学院","榆林职业技术学院"],"25":["复旦大学","同济大学","上海交通大学","华东理工大学","东华大学","华东师范大学","上海外国语大学","上海财经大学","上海大学","上海理工大学","上海海事大学","上海工程技术大学","上海海洋大学","上海中医药大学","上海师范大学","华东政法大学","上海海关学院","上海建桥学院","上海政法学院","上海电机学院","上海第二工业大学","上海电力学院","上海应用技术学院","上海对外贸易学院","上海立信会计学院","上海金融学院","上海商学院","上海体育学院","上海音乐学院","上海戏剧学院","上海杉达学院","第二军医大学","上海出版印刷高等专科学校","上海医疗器械高等专科学校","上海医药高等专科学校","上海旅游高等专科学校","上海公安高等专科学校","上海民航职业技术学院","上海电影艺术职业学院","上海健康职业技术学院","上海东海职业技术学院","上海新侨职业技术学院","上海工会管理职业学院","上海工艺美术职业学院","上海震旦职业学院","上海立达职业技术学院","上海中华职业技术学院","上海兴韦信息技术职业学院","上海邦德职业技术学院","上海农林职业技术学院","上海思博职业技术学院","上海欧华职业技术学院","上海民远职业技术学院","上海交通职业技术学院","上海建峰职业技术学院","上海城市管理职业技术学院","上海体育职业学院","上海电子信息职业技术学院","上海行健职业学院","上海济光职业技术学院","上海工商外国语职业学院","上海海事职业技术学院","上海科学技术职业学院","上海中侨职业技术学院"],"26":["四川大学","西南交通大学","电子科技大学","西南财经大学","西南民族大学","成都理工大学","西华大学","西南科技大学","四川农业大学","成都中医药大学","四川师范大学","西华师范大学","中国民用航空飞行学院","西南石油大学","成都工业学院","成都信息工程学院","四川理工学院","成都东软学院","泸州医学院","川北医学院","成都医学院","乐山师范学院","内江师范学院","四川文理学院","成都师范学院","四川警察学院","成都体育学院","四川音乐学院","四川民族学院","绵阳师范学院","攀枝花学院","成都学院","宜宾学院","西昌学院","成都纺织高等专科学校","四川烹饪高等专科学校","四川中医药高等专科学校","阿坝师范高等专科学校","川北幼儿师范高等专科学校","四川幼儿师范高等专科学校","民办四川天一学院","成都航空职业技术学院","四川商务职业学院","四川卫生康复职业学院","四川三河职业学院","四川电影电视职业学院","四川城市职业学院","四川汽车职业技术学院","成都农业科技职业学院","四川科技职业学院","宜宾职业技术学院","四川文化产业职业学院","四川华新现代职业学院","四川长江职业学院","四川司法警官职业学院","四川警安职业学院","四川信息职业技术学院","广安职业技术学院","四川现代职业学院","四川艺术职业学院","内江职业技术学院","成都职业技术学院","南充职业技术学院","四川水利职业技术学院","四川化工职业技术学院","四川航天职业技术学院","四川邮电职业技术学院","四川国际标榜职业学院","乐山职业技术学院","四川管理职业学院","四川财经职业学院","四川文化传媒职业学院","泸州职业技术学院","眉山职业技术学院","四川职业技术学院","四川托普信息技术职业学院","成都艺术职业学院","雅安职业技术学院","四川建筑职业技术学院","四川机电职业技术学院","四川交通职业技术学院","达州职业技术学院","四川工商职业技术学院","绵阳职业技术学院","四川电力职业技术学院","四川工程职业技术学院"],"27":["国立台湾大学","国立清华大学","国立成功大学","国立阳明大学","台湾交通大学","台北医学大学","国立中央大学","国立台湾大学科学与技术学院(原名国立台湾科技学院）","国立中山大学","国立台湾师范大学","国立政治大学","国立中兴大学"],"28":["南开大学","天津大学","中国民航大学","天津工业大学","天津科技大学","天津理工大学","天津医科大学","天津中医药大学","天津师范大学","天津职业技术师范大学","天津外国语大学","天津财经大学","天津商业大学","天津天狮学院","天津城市建设学院","天津农学院","天津体育学院","天津美术学院","天津音乐学院","天津医学高等专科学校","天津工程职业技术学院","天津机电职业技术学院","天津现代职业技术学院","天津公安警官职业学院","天津轻工职业技术学院","天津职业大学","天津渤海职业技术学院","天津滨海职业学院","天津电子信息职业技术学院","天津石油职业技术学院","天津交通职业学院","天津中德职业技术学院","天津城市职业学院","天津冶金职业技术学院","天津商务职业学院","天津城市建设管理职业技术学院","天津生物工程职业技术学院","天津艺术职业学院","天津国土资源和房屋职业学院","天津海运职业学院","天津青年职业学院","天津广播影视职业学院","天津铁道职业技术学院","天津开发区职业技术学院","天津工艺美术职业学院"],"29":["西藏大学","西藏藏医学院","西藏民族学院","拉萨师范高等专科学校","西藏警官高等专科学校","西藏职业技术学院"],"30":["香港大学","香港中文大学","香港科技大学","香港城市大学","香港理工大学","香港浸会大学","香港岭南大学","香港教育学院"],"31":["新疆大学","石河子大学","新疆农业大学","塔里木大学","新疆医科大学","新疆师范大学","新疆财经大学","新疆工程学院","伊犁师范学院","喀什师范学院","新疆警察学院","新疆艺术学院","昌吉学院","新疆维吾尔医学专科学校","和田师范专科学校","新疆兵团警官高等专科学校","新疆农业职业技术学院","乌鲁木齐职业大学","新疆机电职业技术学院","新疆轻工职业技术学院","克拉玛依职业技术学院","新疆职业大学","伊犁职业技术学院","新疆建设职业技术学院","巴音郭楞职业技术学院","阿克苏职业技术学院","新疆天山职业技术学院","新疆现代职业技术学院","新疆交通职业技术学院","新疆石河子职业技术学院","新疆能源职业技术学院","新疆体育职业技术学院","新疆应用职业技术学院","昌吉职业技术学院","新疆师范高等专科学校"],"32":["云南大学","昆明理工大学","云南农业大学","西南林业大学","昆明医科大学","云南师范大学","云南财经大学","云南民族大学","云南中医学院","昭通学院","曲靖师范学院","玉溪师范学院","楚雄师范学院","普洱学院","红河学院","云南工商学院","云南警官学院","云南艺术学院","大理学院","昆明学院","保山学院","文山学院","昆明冶金高等专科学校","曲靖医学高等专科学校","楚雄医药高等专科学校","保山中医药高等专科学校","丽江师范高等专科学校","德宏师范高等专科学校","临沧师范高等专科学校","云南经贸外事职业学院","云南农业职业技术学院","昆明工业职业技术学院","云南机电职业技术学院","云南热带作物职业学院","云南司法警官职业学院","云南国防工业职业技术学院","云南锡业职业技术学院","云南能源职业技术学院","云南三鑫职业技术学院","德宏职业学院","云南新兴职业学院","云南旅游职业学院","云南经济管理职业学院","云南外事外语职业学院","红河卫生职业学院","玉溪农业职业技术学院","云南文化艺术职业学院","昆明艺术职业学院","昆明扬帆职业技术学院","云南城市建设职业学院","西双版纳职业技术学院","云南林业职业技术学院","云南国土资源职业学院","昆明卫生职业学院","云南科技信息职业学院","云南体育运动职业技术学院","云南现代职业技术学院","云南交通职业技术学院","云南商务职业学院"],"33":["浙江大学","宁波大学","浙江工业大学","杭州电子科技大学","浙江理工大学","浙江农林大学","浙江中医药大学","浙江师范大学","杭州师范大学","浙江工商大学","宁波诺丁汉大学","温州大学","公安海警学院","宁波大红鹰学院","浙江越秀外国语学院","宁波工程学院","中国计量学院","嘉兴学院","浙江科技学院","浙江海洋学院","温州医学院","绍兴文理学院","台州学院","湖州师范学院","浙江传媒学院","浙江外国语学院","浙江财经学院","浙江警察学院","中国美术学院","丽水学院","浙江树人学院","浙江万里学院","衢州学院","浙江水利水电专科学校","浙江医药高等专科学校","浙江医学高等专科学校","宁波职业技术学院","金华职业技术学院","浙江交通职业技术学院","温州职业技术学院","台州职业技术学院","浙江旅游职业学院","宁波城市职业技术学院","浙江工商职业技术学院","浙江经济职业技术学院","浙江机电职业技术学院","杭州万向职业技术学院","浙江商业职业技术学院","浙江汽车职业技术学院","浙江横店影视职业学院","浙江警官职业学院","嘉兴南洋职业技术学院","浙江工业职业技术学院","杭州科技职业技术学院","浙江建设职业技术学院","浙江经贸职业技术学院","浙江育英职业技术学院","温州科技职业学院","浙江长征职业技术学院","绍兴职业技术学院","杭州职业技术学院","浙江纺织服装职业技术学院","台州科技职业学院","浙江邮电职业技术学院","浙江同济科技职业学院","浙江广厦建设职业技术学院","浙江体育职业技术学院","宁波卫生职业技术学院","浙江工贸职业技术学院","浙江国际海运职业技术学院","嘉兴职业技术学院","湖州职业技术学院","衢州职业技术学院","丽水职业技术学院","浙江金融职业学院","义乌工商职业技术学院","浙江东方职业技术学院","浙江艺术职业学院","浙江农业商贸职业学院","浙江电力职业技术学院"]};


/*
$(function(){
    //province;
    //proSchool;
    //学校名称 激活状态
    $("#schoolName").focus(function(){
        var top = $(this).position().top+22;
        var left = $(this).position().left;
        $("div[class='provinceSchool']").css({top:top,left:left});
        $("div[class='provinceSchool']").show();
    });
    //初始化省下拉框
    var provinceArray = "";
    var provicneSelectStr = "";
    for(var i=0,len=province.length;i<len;i++){
        provinceArray = province[i];
        provicneSelectStr = provicneSelectStr + "<option value='"+provinceArray[0]+"'>"+provinceArray[1]+"</option>"
    }
    $("div[class='proSelect'] select").html(provicneSelectStr);
    //初始化学校列表
    var selectPro = $("div[class='proSelect'] select").val();
    var schoolUlStr = "";
    var schoolListStr = new String(proSchool[selectPro]);
    var schoolListArray = schoolListStr.split(",");
    var tempSchoolName = "";
    for(var i=0,len=schoolListArray.length;i<len;i++){
        tempSchoolName = schoolListArray[i];
        //console.log(tempSchoolName.length);
        if(tempSchoolName.length>13){
            schoolUlStr = schoolUlStr + "<li class='DoubleWidthLi'>"+schoolListArray[i]+"</li>"
        }else {
            schoolUlStr = schoolUlStr + "<li>"+schoolListArray[i]+"</li>"
        }
    }
    $("div[class='schoolList'] ul").html(schoolUlStr);
    //省切换事件
    $("div[class='proSelect'] select").change(function(){
        if("99"!=$(this).val()){
            $("div[class='proSelect'] span").show();
            $("div[class='proSelect'] input").hide();
            schoolUlStr = "";
            schoolListStr = new String(proSchool[$(this).val()]);
            schoolListArray = schoolListStr.split(",");
            for(var i=0,len=schoolListArray.length;i<len;i++){
                tempSchoolName = schoolListArray[i];
                if(tempSchoolName.length>13){
                    schoolUlStr = schoolUlStr + "<li class='DoubleWidthLi'>"+schoolListArray[i]+"</li>"
                }else {
                    schoolUlStr = schoolUlStr + "<li>"+schoolListArray[i]+"</li>"
                }
            }
            $("div[class='schoolList'] ul").html(schoolUlStr);
        }else {
            $("div[class='schoolList'] ul").html("");
            $("div[class='proSelect'] span").hide();
            $("div[class='proSelect'] input").show();
        }
    });
    //学校列表mouseover事件
    $("div[class='schoolList'] ul li").live("mouseover",function(){
        $(this).css("background-color","#72B9D7");
    });
    //学校列表mouseout事件
    $("div[class='schoolList'] ul li").live("mouseout",function(){
        $(this).css("background-color","");
    });
    //学校列表点击事件
    $("div[class='schoolList'] ul li").live("click",function(){
        $("#schoolName").val($(this).html());
        $("div[class='provinceSchool']").hide();
    });
    //按钮点击事件
    $("div[class='button'] button").live("click",function(){
        var flag = $(this).attr("flag");
        if("0"==flag){
            $("div[class='provinceSchool']").hide();
        }else if("1"==flag){
            var selectPro = $("div[class='proSelect'] select").val();
            if("99"==selectPro){
                $("#schoolName").val($("div[class='proSelect'] input").val());
            }
            $("div[class='provinceSchool']").hide();
        }
    });
});*/
