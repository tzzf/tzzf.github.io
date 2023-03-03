(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{391:function(t,e,n){t.exports=n.p+"assets/img/react(1)1.29f6751c.jpg"},410:function(t,e,n){"use strict";n.r(e);var a=n(17),s=Object(a.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("项目中reacthook的迭代")]),t._v(" "),a("p",[t._v("Hooks是React v16.7.0-alpha中加入的新特性。")]),t._v(" "),a("p",[t._v("本文主要是使用教程，记录下本人在持续开发中的react项目中对之前的页面的迭代笔记和一些总结。如果不了解，可以先看下我看到末尾的相关链接，我也是看这些教程的。")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("react生命周期有componentDidMount,componentDidUpdate等生命周期，那么想用hooks来替换原先的class component，那么必然要找到替代这写生命周期的方法。\n"),a("br"),t._v("\n下面就是介绍个人觉得hooks最最最常用到的一个api\n"),a("br"),t._v("\nuseEffect，该 Hook 接收一个包含命令式、且可能有副作用代码的函数。\n"),a("br"),t._v("\n在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。\n"),a("br"),t._v("\n执行时间\n"),a("br"),t._v("\n默认情况下，effect 将在每轮渲染结束后执行，但你可以选择让它 在只有某些值改变的时候 才执行。\n"),a("br"),t._v("\n那么，开始讲解下是如何代替那些生命周期\n"),a("br")]),t._v(" "),a("h6",{attrs:{id:"componentdidmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount","aria-hidden":"true"}},[t._v("#")]),t._v(" componentDidMount")]),t._v(" "),a("p",[t._v("组件在被挂载了之后会被调用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// useEffect 写法\nReact.useEffect(() => {\n    // do somthing\n}, []);\n")])])]),a("h6",{attrs:{id:"componentdidupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate","aria-hidden":"true"}},[t._v("#")]),t._v(" componentDidUpdate")]),t._v(" "),a("p",[t._v("更新阶段，当组件的props改变了，或组件内部调用了setState或者forceUpdate发生，会发生多次")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// useEffect 写法\nReact.useEffect(() => {\n   // do somthing\n}, [props, state]);\n")])])]),a("p",[t._v("在第二个参数（arr）,所指向的值的内存地址更换了，他就会执行。注意我说的是，内存地址。这里我有遇到自己写的一个坑，导致当时卡了很久。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("React.useEffect(() => {\n    // do somthing\n}, [props.goodsListPage.current]);\n// 换页\nfunction handleTableChange({ current: pages }) {\n  dispatch({\n    type: 'goods/changGoodsPage',\n    payload: {\n      page: pages\n    },\n  });\n}\n\nchangGoodsPage(state, { payload }) {\n  const { page } = payload;\n  const { goodsListPage } = state;\n  goodsListPage.current = page;\n  return {\n    ...state,\n    goodsListPage\n  }\n},\n")])])]),a("p",[t._v("可以看出我实际是改变这个值，但是useEffect并没有执行,然后我更改了changGoodsPage函数的写法，将goodsListPage的值重新赋值，更改其的内存地址，这样就可以执行了。\n"),a("br")]),t._v(" "),a("h6",{attrs:{id:"componentwillunmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount","aria-hidden":"true"}},[t._v("#")]),t._v(" componentWillUnmount")]),t._v(" "),a("p",[t._v("卸载阶段，当我们的组件被卸载或者销毁了")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// useEffect 写法\nReact.useEffect(() => {\n  return () => {\n    // do somthing\n  }\n}, []);\n")])])]),a("p",[t._v("因为实际项目中，我在写的时候，基本上没写过不传第二个参数的useEffect，所以就不介绍了。想学习就可以通过最下面的相关链接学习。\n"),a("br")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("备注： 这里为什么被介绍useLayoutEffect（useEffect的同步api）？\n因为我一是在项目中基本不用，二是因为文档中并不推荐一开始就使用这个。只有当useEffect出问题的时候再去尝试使用seLayoutEffect。\n")])])]),a("br"),t._v(" "),a("p",[t._v("下面就开始介绍useState\n"),a("br"),t._v("\n基本使用方法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const [count, setCount] = useState(0);\n")])])]),a("p",[t._v("第一个参数是变量名，第二参数是函数方法去改变这个变量，useState里放的是这参数的默认值\n"),a("br"),t._v("\n这里有个小tip，也是我当时写的时候，犯的错误。\n"),a("br")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const [count, setCount] = useState(0);\nconst [obj] = useState({ count });\n")])])]),a("p",[t._v("当你使用setCount函数改变count的值时，变量obj是不是更改，因为在useState在定义变量时，是用深拷贝的。所以你直接定义const obj = { count }就可以了，不需要使用useState来定义。\n"),a("br"),t._v("\n最后讲一下，我用hooks写组件，当这个组件被引入到ant Design的from组件时，遇到的一个警告，虽然只是一个警告，并不影响程序运行，但是还是很想解决下。\n"),a("br"),t._v(" "),a("img",{staticStyle:{height:"40px"},attrs:{src:n(391)}}),t._v(" "),a("br"),t._v("\n这个警告大致意思是因为hooks是function component没有refs，需要用forwardRef()创建组件的refs。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("export default React.forwardRef((props, ref) => {\n  return <UploadImg {...props} forwardedRef={ref} />;\n});\n")])])]),a("p",[t._v("直接贴代码吧，有想详细了解的朋友可以看相关链接。\n"),a("br")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("在项目将class component改成hooks版的function component，在内部打印执行的次数，可以看出渲染次数明显减少，而且代码量也大大减少。\n这只是仅仅讲解了两个hooks的api，和我在实践犯的错误。后续若新的hooks的新的心得体会，在后续写上。")]),t._v(" "),a("h2",{attrs:{id:"更新于05-19"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新于05-19","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v("\n更新于05-19")]),t._v(" "),a("p",[t._v("tip1:如果需要获取dom的ref,可以useRef获取")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('function TestUseRef() {\nconst inputEl = React.useRef(null);\nconst onButtonClick = () => {\n// 点击按钮会设置input获取焦点\ninputEl.current.focus(); // 设置useRef返回对象的值\n};\nreturn (\n<div>\n<p>TestUseRef</p>\n<div>\n<input ref={inputEl} type="text" />\n<Button onClick={onButtonClick}>input聚焦</Button>\n</div>\n</div>\n)\n}\n')])])]),a("p",[t._v("tip2:如果你在一个function component需要维护一些复杂的state的业务逻辑，可以使用useReducer来维护业务逻辑。")]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("p",[t._v("1。"),a("a",{attrs:{href:"https://juejin.im/post/5c0dd44b51882530e4617e92",target:"_blank",rel:"noopener noreferrer"}},[t._v("译React高级话题之Forwarding Refs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\n2。"),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect",target:"_blank",rel:"noopener noreferrer"}},[t._v("react文档hooks"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\n3。"),a("a",{attrs:{href:"https://github.com/monsterooo/blog/issues/28",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Hooks 实用指南"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\n4。"),a("a",{attrs:{href:"https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("useEffect 完整指南"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\n4。"),a("a",{attrs:{href:"https://segmentfault.com/a/1190000017576343",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用React Hooks复用复杂业务组件"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.default=s.exports}}]);