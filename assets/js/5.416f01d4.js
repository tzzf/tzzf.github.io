(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{381:function(t,a,r){t.exports=r.p+"assets/img/other(1)1.6534bb1a.jpg"},382:function(t,a,r){t.exports=r.p+"assets/img/other(1)2.ae169f85.jpg"},383:function(t,a,r){t.exports=r.p+"assets/img/other(1)3.18a2fe30.jpg"},384:function(t,a,r){t.exports=r.p+"assets/img/other(1)4.eeec7306.png"},404:function(t,a,r){"use strict";r.r(a);var s=r(17),e=Object(s.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("个人的家庭组网的演变")]),t._v(" "),s("p",[t._v("每个人的家都不一样，所以我只是讲讲自己的组网过程，希望对各位有帮助，偏入门。")]),t._v(" "),s("h2",{attrs:{id:"期望"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#期望","aria-hidden":"true"}},[t._v("#")]),t._v(" 期望")]),t._v(" "),s("p",[t._v("主要功能就是上上网，打打游戏，然后不要手动切换wifi。于是就有目标，翻墙+全屋覆盖无缝漫游。方案有两种，一种是mesh组网，另一种就是ac+ap的方式。\n"),s("br")]),t._v(" "),s("h4",{attrs:{id:"mesh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mesh","aria-hidden":"true"}},[t._v("#")]),t._v(" mesh")]),t._v(" "),s("p",[t._v("无线Mesh网络是一种新无线局域网类型。与传统WLAN不同的是，无线Mesh网络中的AP可以采用无线连接的方式进行互连，并且AP间可以建立多跳的无线链路。每个节点之前的通路不再只有一条，每个节点至少与两个节点相互连接，如此可靠性和稳定性大大提高。AP均采用点对点方式通过无线中继链路互联，将传统WLAN中的无线“热点”扩展为真正大面积覆盖的无线“热区”。具有自配置、自愈合、高带宽、高利用率和兼容性5大特点。这个方案比较需要购买力，且比较复杂，所以我就放弃这个方案")]),t._v(" "),s("h4",{attrs:{id:"ac-ap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ac-ap","aria-hidden":"true"}},[t._v("#")]),t._v(" ac+ap")]),t._v(" "),s("p",[t._v("AC即无线控制器(Wireless AccessPoint Controller)，是一种网络设备，用来集中化控制局域网内可控的无线AP，是一个无线网络的核心，负责管理无线网络中的所有无线AP，对AP管理包括：下发配置、修改相关配置参数、射频智能管理、接入安全控制等。AP即无线访问接入点(WirelessAccessPoint)，传统有线网络中的HUB。AP相当于一个连接有线网和无线网的桥梁，其主要作用是将各个无线网络客户端连接到一起，然后将无线网络接入以太网，从而达到网络无线覆盖的目的。这方案常规，对购买力也没什么要求，且比较简单，还可以拓展（加旁路由）。故我就选择了这种")]),t._v(" "),s("h2",{attrs:{id:"演变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演变","aria-hidden":"true"}},[t._v("#")]),t._v(" 演变")]),t._v(" "),s("h3",{attrs:{id:"第一阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 第一阶段")]),t._v(" "),s("img",{staticStyle:{height:"200px"},attrs:{src:r(381)}}),t._v(" "),s("p",[t._v("将斐讯k2p和k2都刷成老毛子固件，利用固件上功能无线中继和vpn功能，达到我自己期望。这个阶段就是将k2p当主路由，让k2p来分配内网设置的ip。这个阶段出现两个问题，导致使用的体验的感受不是很好。无线中继是基于k2p的无线范围在扩展，导致离k2p过远的话，其实网速和vpn效果不是很好。")]),t._v(" "),s("h3",{attrs:{id:"第二阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 第二阶段")]),t._v(" "),s("img",{staticStyle:{height:"200px"},attrs:{src:r(382)}}),t._v(" "),s("p",[t._v("这个阶段是将猫当主路由，虽然猫的性能不是很好，主路由降级了，但是还好勉强能用。这里有些细节，需要关掉k2p和k2的DHCP和设置k2p和k2的ip，让主路由来分配ip，不然不能达到无缝漫游的功能。这个阶段解决了上个阶段的wifi的扩展不理想的，让wifi中实现真正的全屋覆盖，而且还可以拓展。通过加ap的方式，wifi达到真正的无死角，当然这也得易于家里的布线非常的好。但是还有有些问题，k2不能开启vpn，导致连k2的wifi的时候不能翻墙。")]),t._v(" "),s("h3",{attrs:{id:"第三阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 第三阶段")]),t._v(" "),s("img",{staticStyle:{height:"200px"},attrs:{src:r(383)}}),t._v(" "),s("p",[t._v("这个阶段主要是为了解决第二阶段的vpn的不够广，我在加了个旁路由（n1）。并将DHCP的功能给了n1，这样所有的流量都会走n1，n1只要开了vpn的，这样所有的ap都有这个功能。虽然DHCP的功能在n1上，但是因为猫在拨号，所有猫还是主路由。基于这个旁路由，这样ap就不一定需要刷固件的机器，普通的水星等都是可以的，可以说是又降低了成本。然后我还开启了qos了，改善了网络质量。")]),t._v(" "),s("h4",{attrs:{id:"qos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qos","aria-hidden":"true"}},[t._v("#")]),t._v(" qos")]),t._v(" "),s("p",[t._v("经常会出现一边在玩游戏（要求低延迟）的同时一边在下载东西（要求高速度）。这样就需要保证不同网络业务的优先级，达到在一定容量的网络环境中的最大化。")]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("作为一个垃圾佬，较低成本满足了自己的期望还是挺舒服的。虽然还是有些问题，主路由是猫，性能不是很高。后续也有在计划换成新路由3。文中虽然未提及如何刷斐讯看k2p、k2、n1，这个百度是还是挺多的就不多说了。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("-------------------2020.10.28 更新-----------------")]),t._v(" "),s("h3",{attrs:{id:"第四阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 第四阶段")]),t._v(" "),s("img",{staticStyle:{width:"500px"},attrs:{src:r(384)}}),t._v(" "),s("p",[t._v("最近搞了一台黑群晖，用的方法是，在主机上装一个unraid,然后unraid上在跑个黑群晖虚拟机。当然这里你也可以把unraid当黑群晖用，也是可以。毕竟unriad上也有docker。")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("本文只是提供组网思路，方法需要自行百度。")])])},[],!1,null,null,null);a.default=e.exports}}]);