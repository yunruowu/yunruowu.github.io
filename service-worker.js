if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,a,r)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const n={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return d;case"module":return n;default:return e(i)}}))).then((e=>{const i=r(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-484247ff"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/04/02/test-my-site/index.html",revision:"7cb4093c4badd5851b258976f3fa1874"},{url:"2020/04/02/开始我的博客之旅/index.html",revision:"5827848ce6d076aff1e5325f64d74261"},{url:"2020/04/08/LeetCode-1/index.html",revision:"84d9a29501480ed0dfff8b2f9884fc5c"},{url:"2020/04/09/LeetCode-2/index.html",revision:"63cda1210cf38fff55e80660939a4513"},{url:"2020/04/10/LeetCode-3/index.html",revision:"cb29443a1a94df4c8d81b9091d1362f6"},{url:"2020/04/10/powershell和cmd一次执行多个命令/index.html",revision:"bbf5e00db2dfb52f3853d6ef15ceae58"},{url:"2020/04/11/一点感悟2020-4-11/index.html",revision:"01b558d6303d59131b5a74f2467fde05"},{url:"2020/04/12/LeetCode-4/index.html",revision:"63692965ed49dc04d9193900e70a82ec"},{url:"2020/04/15/LeetCode-5/index.html",revision:"be04b1fb1897528a97803105b98383c6"},{url:"2020/04/16/本地git连接GitHub/index.html",revision:"b6a9536e32de60c2be98d8fd834f1f23"},{url:"2020/04/17/C-中：：的使用/index.html",revision:"4fdfe7f836a5a93eead75a99be97a957"},{url:"2020/04/29/python中plt画图出现警告/index.html",revision:"2a6ab6c354698c7f550f5b6907563403"},{url:"2020/05/05/2020年五四的一些感想/index.html",revision:"adfeac5ebce264056a4eb129f592d705"},{url:"2020/05/17/准备复试的某一天/index.html",revision:"876280fdc71ae82cf62e79601be488f2"},{url:"2020/05/17/强烈推荐Typora/index.html",revision:"94be51bc63291b3f884c04380ffefd39"},{url:"2020/05/22/复试出成绩的一天/index.html",revision:"6c1b6baa3de93a7ae1f5616311dd126a"},{url:"2020/05/28/5-28最近的一些计划/index.html",revision:"6814a4c491084b8ef63bf49addcb2ccf"},{url:"2020/05/29/C艹-创建无重复元素的Vector/index.html",revision:"50cf5766b954839391c95c6c0b031b8a"},{url:"2020/05/29/LeetCode-6/index.html",revision:"9985ace000f04544e50b0330465a853d"},{url:"2020/05/30/LeetCode-7/index.html",revision:"c7fdbbf0a98e4d54087cafcd154a65d0"},{url:"2020/06/01/LeetCode-8/index.html",revision:"d28ab7c30c400d21652721cef01b4ab9"},{url:"2020/06/01/并查集/index.html",revision:"1c29130c705f92fd1762a80d5d606e7e"},{url:"2020/06/05/Typora上传图片/index.html",revision:"03f9d6d5882762019a58acdbef698e7c"},{url:"2020/06/05/Typora绘图/index.html",revision:"7af8a2a738d88b0f86f6fddb56d49959"},{url:"2020/06/05/回溯算法题目/index.html",revision:"40881cd8014648560bae6c1bb06efefe"},{url:"2020/06/06/LeetCode-9/index.html",revision:"6d02bade858ec36eead5960730eab0a2"},{url:"2020/06/07/c-plus-plus的小知识1/index.html",revision:"02d7c1995e95e8af1ea701fedc4e2d65"},{url:"2020/06/07/我的团长我的团—1/index.html",revision:"179374cfd7e55518479274896c75f64b"},{url:"2020/06/11/Floyd判圈算法（龟兔赛跑算法）/index.html",revision:"ce8ea7a1f72eb377a58e848e1643ca81"},{url:"2020/06/11/Ubuntu命令行更换软件源/index.html",revision:"ff154b666746069413ce78af3c0903a2"},{url:"2020/06/13/win10汇编学习的环境配置/index.html",revision:"0c0dd6a2947db82ab7d329d11d59da56"},{url:"2020/06/13/汇编语言中Debug的使用/index.html",revision:"a0e13b40bd3c8f4253f26ba3c30540f0"},{url:"2020/06/16/LeetCode-10/index.html",revision:"8ee7a98382a8ae8d33c16bbf9f352ae6"},{url:"2020/06/17/LeetCode-11/index.html",revision:"065a5965d9dd8cafb423f8a8407de9e2"},{url:"2020/06/17/一点点小想法/index.html",revision:"11d484aa11a5baa827a3c7bc8846c75d"},{url:"2020/06/18/动态规划我来康康/index.html",revision:"94a05c0647b071d728eed6bac5aadb8d"},{url:"2020/06/23/一次Ubuntu的安装记录/index.html",revision:"26de2fede4254c5a0594ee3a1c2483ea"},{url:"2020/06/24/Interconnection-Networks-ch1/index.html",revision:"4fe2bedbe1cd3232a05eb1469d219464"},{url:"2020/06/24/Linux命令积累/index.html",revision:"70e2cf9ca509519476ff3b722e32e9ed"},{url:"2020/06/25/20-6-25一点杂念/index.html",revision:"d8f64fa91ff9d71a32f1a10f0ae6b83e"},{url:"2020/06/29/动态规划一点收获/index.html",revision:"121484a31a81415d70520217d92ca745"},{url:"2020/07/04/书生/index.html",revision:"e31dcb942fe8ae5891d43767d246afb1"},{url:"2020/07/09/Interconnection-Networks-ch2/index.html",revision:"1f3cdb0a027a296ed8d671836d25bb12"},{url:"2020/07/19/Interconnection-Networks-ch3/index.html",revision:"967a4e42c849dd11b1680b5e25a14934"},{url:"2020/07/20/Interconnection-Networks-ch5-1/index.html",revision:"3eeddbd65cb7ceacc6a2c735b6f6c963"},{url:"2020/07/20/Interconnection-Networks-ch5/index.html",revision:"705d2bb57ed0d83e03e32eb9f7a28669"},{url:"2020/07/28/Interconnection-Networks-ch6/index.html",revision:"6008c1f930cffc6999042c95dde0ef89"},{url:"2020/07/29/Interconnection-Networks-ch7/index.html",revision:"371676ec7cdb142e5eedf8b821a60c04"},{url:"2020/07/29/Network-Congestion-Avoidance-Through-Speculative-Reservation/index.html",revision:"78684a616581b29c92069160b6bb77a9"},{url:"2020/07/29/Network-Endpoint-Congestion-Control-for-Fine-Grained-Communication/index.html",revision:"be510bb54e53a9bccd1a40faea355c81"},{url:"2020/08/03/BFRP-Endpoint-Congestion-Avoidance-Through-Bilateral-Flow-Reservation/index.html",revision:"b5ffe5bbb92da1888b964c00d3eb1d96"},{url:"2020/08/03/Channel-Reservation-Protocol-for-Over-Subscribed-Channels-and-Destinations/index.html",revision:"eab3103ce5fb4824490bcd26f06f1770"},{url:"2020/08/03/CRSP-Network-Congestion-Control-Through-Credit-Reservation/index.html",revision:"caad03dff8c29d6beb3c08ca5d6590b0"},{url:"2020/08/03/Network-Congestion-Avoidance-through-Packet-chaining-Reservation/index.html",revision:"aefdafa3ee2229a250ec13c9a1ab1109"},{url:"2020/08/03/Omnet++/index.html",revision:"9b5215159eb0992ad0110a416dcfdad9"},{url:"2020/08/04/win-ununtu双系统/index.html",revision:"865deceec9c5ba016b2e30c791f48780"},{url:"2020/08/06/杂曲歌辞•杨柳枝/index.html",revision:"200fc8ff279f19394176b167cb800b23"},{url:"2020/08/07/WSL无法使用/index.html",revision:"f7f1753d842131d9fea435719b1e8c96"},{url:"2020/08/07/且行且珍惜/index.html",revision:"67dc728b2596023c73b7c0729a13dd3a"},{url:"2020/08/08/hexo-Next添加Valine评论/index.html",revision:"6a1e42d57d72b62fe57692a7388552b7"},{url:"2020/08/08/南园十三首（其五）/index.html",revision:"452a49314bfed6e98a6f6a2660104de4"},{url:"2020/08/09/江南春/index.html",revision:"81c54f8b5c09222fb68a6bcb8f929e03"},{url:"2020/08/10/道德经（第七十六章）/index.html",revision:"7c526d02571aa098b0c57de28f4a8774"},{url:"2020/08/11/游园不值/index.html",revision:"b57d089442f1166d03c14dbf5a97a87b"},{url:"2020/08/13/一次计算机体系结构会议/index.html",revision:"023098d7682c90d67c7cbe15559a8c22"},{url:"2020/08/14/8-14计算机年会/index.html",revision:"6a772b342995837fc36f4262a3dc9c16"},{url:"2020/08/20/送别歌/index.html",revision:"cb4b6e66ca4cdf9e111b5f24700ba998"},{url:"2020/08/21/学习MakeFile/index.html",revision:"5e161c5f093c90873fee4fbe4f0700da"},{url:"2020/08/28/Evaluation-of-an-InfiniBand-Switch-Choose-Latency-or-Bandwidth-but-Not-Both/index.html",revision:"509c00de9b52c27e73bb17a1b7ff2d74"},{url:"2020/09/03/LeetCode-12/index.html",revision:"ed4f1b284ded492ac76484edc559cebc"},{url:"2020/09/06/Tales-of-the-Tail-Hardware-OS-and-Application-level-Sources-of-Tail-Latency/index.html",revision:"530837a02d1055bed982bcf8628d1a57"},{url:"2020/09/28/PCF-Provably-Resilient-Flexible-Routing/index.html",revision:"143db1d24fd2dd4401e4d7493ea860a8"},{url:"2020/10/09/Traffic-Engineering-with-Forward-Fault-Correction/index.html",revision:"283b850fce1b39816d213895e1f1cce8"},{url:"2020/10/16/python打包为-exe程序/index.html",revision:"faeedf9c63774dc9c2a60a973e7ae841"},{url:"2020/10/17/test/index.html",revision:"7e3fb53ddb9833d3f08c29f9c5f75368"},{url:"2020/10/21/中国计算机学会推荐会议/index.html",revision:"3e6c866e6595145c79bafd8a285b3280"},{url:"2020/10/25/Evaluation-of-an-InfiniBand-Switch-Choose-Latency-or-Bandwidth-but-Not-Both-1/index.html",revision:"894daff25e174a4a9ed105c981b55b0c"},{url:"2020/11/05/glex/index.html",revision:"ed028393b9faddf333b89e9deaf685f1"},{url:"2021/03/07/testy/index.html",revision:"9f118c57ee8d0e14dbf63bb1fca69843"},{url:"2021/06/01/dsdddddd/index.html",revision:"528de4eeccd66c26273834088c6bd38a"},{url:"2021/06/01/hexo-todo/index.html",revision:"909aa082f16079c58317d047aec35eca"},{url:"about/index.html",revision:"e837add594d498ef2512deedef0c3e14"},{url:"archives/2020/04/index.html",revision:"b0b953675326219ed87e3bf10cf40835"},{url:"archives/2020/05/index.html",revision:"01b92a7c362ad9aecb8451f21f5e59f3"},{url:"archives/2020/06/index.html",revision:"521f55c9b8e5fd2e16ba99ff69d5eb1e"},{url:"archives/2020/07/index.html",revision:"548cfd263dff4b8caf5d4451ccf084ef"},{url:"archives/2020/08/index.html",revision:"2aa7342e03f64302011a1c71b1bb0665"},{url:"archives/2020/09/index.html",revision:"05239481c9c78d18d5172fc56babbd5d"},{url:"archives/2020/10/index.html",revision:"e750a8332bb8874a092dd3859d1d4c0b"},{url:"archives/2020/11/index.html",revision:"3784c1e88af8ea4c6e20609593f9ddfa"},{url:"archives/2020/index.html",revision:"ad2e41905220ba1936015c38da8658d1"},{url:"archives/2020/page/2/index.html",revision:"b8c7f7f3bab4d754e0a06c9ade699b44"},{url:"archives/2020/page/3/index.html",revision:"facf349a7ba7cbd302ff84a6f7a81442"},{url:"archives/2021/03/index.html",revision:"26f511e3bfe7630eee6cfd11cba74585"},{url:"archives/2021/06/index.html",revision:"957a81285eab9c1353c3709b8141683d"},{url:"archives/2021/index.html",revision:"084cff5a84eadfababa31f3b0222a932"},{url:"archives/index.html",revision:"8ce96d46591c946ddee02548e9175629"},{url:"archives/page/2/index.html",revision:"95367f50f488de527a0834de331bbae5"},{url:"archives/page/3/index.html",revision:"05821b8ef8c1f9ed7de92dca2e8b791e"},{url:"categories/c/index.html",revision:"0622e3a39d7e4cb0f0f84d8589353006"},{url:"categories/ccf/index.html",revision:"58d0715ea9436072042a9ceaa3d8f4b9"},{url:"categories/code/index.html",revision:"dee6503433ea32a23938359a9f2b3d51"},{url:"categories/hexo/index.html",revision:"2e59bc808f570cada4f3bf7afe75cd3f"},{url:"categories/HiNA/index.html",revision:"7cfd07505ca8e9c261d9c04dda5f6344"},{url:"categories/HiNA/page/2/index.html",revision:"266f0fbfb2aec3e9e97263a8567f0dcc"},{url:"categories/HiNA/Papers/IB/index.html",revision:"e4cb1e051310d0132d5044245b70960c"},{url:"categories/HiNA/Papers/index.html",revision:"1fc232a19c673036320efb7fd47a4529"},{url:"categories/HiNA/Papers/拥塞控制/index.html",revision:"bc37146b9f11d25dd15caa1e51e26ea3"},{url:"categories/index.html",revision:"78c02d978948e58d11861dc7c4cf8017"},{url:"categories/Interconnection-Networks/index.html",revision:"9d34ba98b9bc7c499ccbbbb609e22e6c"},{url:"categories/LeetCode/index.html",revision:"482acf3ec870cfa7d8d8b350023da892"},{url:"categories/Linux/index.html",revision:"344c6a3b4b393bf34d902741c17a4b6f"},{url:"categories/markdown/index.html",revision:"a9211238541e4a53e1fad9117460e01d"},{url:"categories/Omnet/index.html",revision:"b6d68287c17e268e6014058c37efebb5"},{url:"categories/python/index.html",revision:"25f840331132583d00d9cc1931d36eff"},{url:"categories/WSL/index.html",revision:"99783c8aed0e2411d58d7829c5b60b19"},{url:"categories/WSL/Linux/index.html",revision:"2bff8a9000631af1cc5d34468479c68c"},{url:"categories/任务/index.html",revision:"111b7658b7077c99241307c34b30e7ec"},{url:"categories/内省/index.html",revision:"a92c229a9899e10f8d5d9a49971564a2"},{url:"categories/思想的火花/index.html",revision:"53402b32ef6622c55a86af292d8efd33"},{url:"categories/我团/index.html",revision:"a3ab8fd911dd2aec4dd3d10f6723af5e"},{url:"categories/教程/index.html",revision:"bef5ac985d81eb7d500ae478d9e85382"},{url:"categories/汇编/index.html",revision:"e0cdf2811c2c22244e2ea9b4fe199289"},{url:"categories/算法/index.html",revision:"f6aeb3577e7a3c2b741fed0f339c7dd4"},{url:"categories/诗/index.html",revision:"e073cb11e4801b884997867ceb36df93"},{url:"categories/诗词赋-白居易/index.html",revision:"5ec5e1d84488052253cc72a6ec28eb75"},{url:"categories/诗词赋/index.html",revision:"f6a0f798f0e49cfa5c9b2aa8540a9eed"},{url:"categories/诗词赋/叶绍翁/index.html",revision:"8912ca508dec0375d483557ed7bf7620"},{url:"categories/诗词赋/无名氏/index.html",revision:"c3b8a9dd73318c9e0464f90096650080"},{url:"categories/诗词赋/李贺/index.html",revision:"eee77dcacd4f17ea32f3532b2d05f417"},{url:"categories/诗词赋/杜牧/index.html",revision:"1253e6856138d28906d42f7700d3969b"},{url:"categories/软件安装/index.html",revision:"a8fda6d1f24566db0a756e6aa56ac6af"},{url:"categories/软件安装/Linux/index.html",revision:"842f3713ff748643bb2caa1b9da25031"},{url:"categories/道德经/index.html",revision:"297f23e0e34eb5290fc364028b7e3b43"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"93f0102a7815942b03c3f2b8c2c63000"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"410bc187b06aabdc4487906a37e22309"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/2/index.html",revision:"17742aec4630b2f1e4431cb5abfca2da"},{url:"page/3/index.html",revision:"50ef0685fcd14fdeb50000651a3c60c8"},{url:"page/4/index.html",revision:"d09cc7d47451fc53e736df4ffed24939"},{url:"page/5/index.html",revision:"276851ab7e5675a748e5c00570f14815"},{url:"page/6/index.html",revision:"002ce7d9b18f79d73a4e8a971567136a"},{url:"page/7/index.html",revision:"aad954ada52e99101fccf410f0de646a"},{url:"page/8/index.html",revision:"e1810cb9c1bcb6a50800fceb719e1c9d"},{url:"page/9/index.html",revision:"bbc4196062d24f526b31a31b527c89bd"},{url:"sitemap/index.html",revision:"511a0e8428b515fef8e2b33a50d6d01c"},{url:"tags/BFRP/index.html",revision:"19b5a2a2ead84920b20ec294b95a59bf"},{url:"tags/Binary-Search/index.html",revision:"88e10db8694b44e34b82cbba4906cbbf"},{url:"tags/BUG/index.html",revision:"b7f1188dfd477260fb07039fb00597ea"},{url:"tags/C/index.html",revision:"64730f954e41a5ac4ffad64aec65bd22"},{url:"tags/congestion/index.html",revision:"ab6bf6d589138637a9ba929ea9ca489a"},{url:"tags/CRP/index.html",revision:"79eb0dd196dc2d9af8b912c3ec482473"},{url:"tags/CRSP/index.html",revision:"a714df856a6f608ed2404caf4906d266"},{url:"tags/debug/index.html",revision:"271721ff0aa8cba35aa23bbca9497a31"},{url:"tags/git，小技巧/index.html",revision:"27751a49ee5b6c0ff4db55f32eba59c6"},{url:"tags/GitHub/index.html",revision:"726260a038f16f118fd2bd1c269e5f21"},{url:"tags/IB/index.html",revision:"20068a653a15ec683a7e2d036b9d3125"},{url:"tags/index.html",revision:"2a07046ca7edf7636d525951cf038c3c"},{url:"tags/Interconnection-Networks/index.html",revision:"026832057fd4f9931389f6fb11f18d1b"},{url:"tags/LeetCode/index.html",revision:"b0ca0acd898c585c105dab06809feaa3"},{url:"tags/LHRP/index.html",revision:"298fef6e06a6bba58906bab8433f1474"},{url:"tags/Linux/index.html",revision:"058fee526a20b5efd388c46551dad2d5"},{url:"tags/Omnet/index.html",revision:"2b7d7d515e50431476a09764d0d2290f"},{url:"tags/PCRP/index.html",revision:"9710f0c01f3311da9eb80f6b37e62c58"},{url:"tags/python/index.html",revision:"e78818d5949bfa828b389aba87d2618b"},{url:"tags/SMSRP/index.html",revision:"609621bef7f3942d996f2a1fb83f63ee"},{url:"tags/SRP/index.html",revision:"46eb743ea45b4e12770cc3378206c3eb"},{url:"tags/STL/index.html",revision:"c21c91598613cb02dd2d7c99b9b46624"},{url:"tags/tail/index.html",revision:"9d72c94dc8463a3b53a9116f6fd927b7"},{url:"tags/Typora/index.html",revision:"002a80f380114318524c6e0d8316049d"},{url:"tags/Ubuntu/index.html",revision:"e790abdfc0f19c4d0683d3a54bcfb8a9"},{url:"tags/内省/index.html",revision:"0adf2bd97fe71e9daba8554270770eab"},{url:"tags/动态规划/index.html",revision:"7eac45a4fbfdc927987bd1017a843da7"},{url:"tags/叶绍翁/index.html",revision:"4e20956072ab5481a8412a15cea3bad4"},{url:"tags/命令行/index.html",revision:"18f8a3642336d4116efa393637959684"},{url:"tags/回溯算法/index.html",revision:"260cf4b926dd64380bd8a2fd1fc9e6cf"},{url:"tags/小技巧/index.html",revision:"b8e755ee6769c5ee211525e4304f96af"},{url:"tags/小知识/index.html",revision:"252abef587610713f6f4de4c5c0a4fa6"},{url:"tags/并查集/index.html",revision:"89f31986852791d2612c3cd1a60d7849"},{url:"tags/悟与梦/index.html",revision:"ec2fa37a7691ade76114ee0d20a87cdb"},{url:"tags/拥塞控制/index.html",revision:"988996fc7447aff7aa8b31f548d451d6"},{url:"tags/无名氏/index.html",revision:"5467a07075edfe175fdb1ce12923217d"},{url:"tags/日常，悟与梦/index.html",revision:"06352af29082a77f47fadbfd50c54322"},{url:"tags/日常/index.html",revision:"7f1ee3cbcbd48b8135ffde767d25579b"},{url:"tags/李叔同/index.html",revision:"61c3daf2f2c203de075ac8ef13a8460a"},{url:"tags/李贺/index.html",revision:"580c772851016798a20f9aa691d94ede"},{url:"tags/杜牧/index.html",revision:"d9387113e72b5da13b4f60091daa1184"},{url:"tags/歌/index.html",revision:"840a7472d562c50a7c6c54af6d8960fd"},{url:"tags/生活的感悟/index.html",revision:"1ce4c6764ee961dd9a78d573887e7211"},{url:"tags/白居易/index.html",revision:"0e4b2a2070876ea4a42feb4dcbc51b75"},{url:"tags/算法/index.html",revision:"4cd18ce86d87291184a7d675ccedb266"},{url:"tags/装软件/index.html",revision:"9e76e31aa712a92f0da5b3a98f12966f"},{url:"tags/计划/index.html",revision:"c66a505871e035353f1b7de9b994ec7c"},{url:"tags/诗/index.html",revision:"e1fa442726ba50ec97353bcde58d625c"},{url:"tags/道德经/index.html",revision:"55cc9144fadb94d89c692a15d37d04bc"}],{})}));
//# sourceMappingURL=service-worker.js.map
