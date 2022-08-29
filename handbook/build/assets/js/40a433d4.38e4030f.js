"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2205],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(n),k=r,c=d["".concat(m,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(c,p(p({ref:t},s),{},{components:n})):a.createElement(c,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),p=n(4996),o=["components"],m={id:"pm2",title:"34.6 pm2 \u90e8\u7f72",sidebar_label:"34.6 pm2 \u90e8\u7f72"},l=void 0,s={unversionedId:"pm2",id:"pm2",title:"34.6 pm2 \u90e8\u7f72",description:"",source:"@site/docs/pm2.mdx",sourceDirName:".",slug:"/pm2",permalink:"/furion/docs/pm2",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/pm2.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1660021283,formattedLastUpdatedAt:"Aug 9, 2022",frontMatter:{id:"pm2",title:"34.6 pm2 \u90e8\u7f72",sidebar_label:"34.6 pm2 \u90e8\u7f72"},sidebar:"docs",previous:{title:"34.5. \u5355\u6587\u4ef6\u53d1\u5e03",permalink:"/furion/docs/singlefile"},next:{title:"35.1 Docker \u73af\u5883\u6301\u7eed\u90e8\u7f72",permalink:"/furion/docs/deploy-docker-auto"}},u={},d=[{value:"34.6.1 \u5173\u4e8e <code>pm2</code>",id:"3461-\u5173\u4e8e-pm2",level:2},{value:"34.6.2 \u5982\u4f55\u5b89\u88c5",id:"3462-\u5982\u4f55\u5b89\u88c5",level:2},{value:"34.6.3 \u6258\u7ba1 <code>.NET5/6</code> \u5e94\u7528\u7a0b\u5e8f",id:"3463-\u6258\u7ba1-net56-\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"34.6.3.1 \u975e\u5355\u6587\u4ef6/\u975e\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f",id:"34631-\u975e\u5355\u6587\u4ef6\u975e\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f",level:3},{value:"34.6.3.2 \u5355\u6587\u4ef6/\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f",id:"34632-\u5355\u6587\u4ef6\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f",level:3},{value:"34.6.3.3 \u542f\u7528\u5e94\u7528\u7a0b\u5e8f",id:"34633-\u542f\u7528\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"34.6.4 <code>pm2</code> \u5e38\u89c1\u64cd\u4f5c",id:"3464-pm2-\u5e38\u89c1\u64cd\u4f5c",level:2},{value:"34.6.4.1 \u5b9e\u65f6\u76d1\u542c\u8fd0\u884c\u72b6\u6001",id:"34641-\u5b9e\u65f6\u76d1\u542c\u8fd0\u884c\u72b6\u6001",level:3},{value:"34.6.4.2 \u663e\u793a\u8fd0\u884c\u65e5\u5fd7",id:"34642-\u663e\u793a\u8fd0\u884c\u65e5\u5fd7",level:3},{value:"34.6.4.3 \u67e5\u770b\u5e94\u7528\u4fe1\u606f",id:"34643-\u67e5\u770b\u5e94\u7528\u4fe1\u606f",level:3},{value:"34.6.4.4 \u968f\u673a\u542f\u52a8",id:"34644-\u968f\u673a\u542f\u52a8",level:3},{value:"34.6.4.5 \u96c6\u7fa4\u6a21\u5f0f\uff08\u8d1f\u8f7d\u5747\u8861\uff09",id:"34645-\u96c6\u7fa4\u6a21\u5f0f\u8d1f\u8f7d\u5747\u8861",level:3},{value:"34.6.4.6 \u5176\u4ed6\u64cd\u4f5c",id:"34646-\u5176\u4ed6\u64cd\u4f5c",level:3},{value:"34.6.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3465-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],k={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"3461-\u5173\u4e8e-pm2"},"34.6.1 \u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"h2"},"pm2")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pm2")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeJS")," \u5e73\u53f0\u9ad8\u7ea7\u751f\u4ea7\u6d41\u7a0b\u7ba1\u7406\u5668\uff0c\u4e5f\u662f\u4e00\u4e2a\u5b88\u62a4\u8fdb\u7a0b\u7ba1\u7406\u5668\uff0c\u5b83\u80fd\u591f\u7ba1\u7406\u548c\u4fdd\u6301\u5e94\u7528\u7a0b\u5e8f 7","*","24 \u5c0f\u65f6\u5728\u7ebf\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pm2")," \u4f18\u70b9:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u8de8\u5e73\u53f0"),(0,i.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u96c6\u6210"),(0,i.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u96c6\u7fa4\u3001\u8d1f\u8f7d\u5747\u8861"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u6a21\u5757\u7cfb\u7edf"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5b9e\u65f6\u76d1\u6d4b"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u65e5\u5fd7\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5173\u952e\u6307\u6807\u76d1\u63a7\n....")),(0,i.kt)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"pm2")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://pm2.keymetrics.io/"},"https://pm2.keymetrics.io/"),"\u3002"),(0,i.kt)("h2",{id:"3462-\u5982\u4f55\u5b89\u88c5"},"34.6.2 \u5982\u4f55\u5b89\u88c5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u7cfb\u7edf\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"strong"},"NodeJS")," \u73af\u5883 ",(0,i.kt)("a",{parentName:"strong",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")))),(0,i.kt)("p",null,"\u76f8\u4fe1\u5927\u90e8\u5206\u4eba\u7535\u8111\u90fd\u5df2\u7ecf\u5b89\u88c5\u3002"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"strong"},"npm")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"strong"},"yarn")," \u5168\u5c40\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"strong"},"pm2")," \u5de5\u5177"))),(0,i.kt)("p",null,"npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"npm install pm2@latest -g\n")),(0,i.kt)("p",null,"yarn:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"yarn global add pm2\n")),(0,i.kt)("h2",{id:"3463-\u6258\u7ba1-net56-\u5e94\u7528\u7a0b\u5e8f"},"34.6.3 \u6258\u7ba1 ",(0,i.kt)("inlineCode",{parentName:"h2"},".NET5/6")," \u5e94\u7528\u7a0b\u5e8f"),(0,i.kt)("h3",{id:"34631-\u975e\u5355\u6587\u4ef6\u975e\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f"},"34.6.3.1 \u975e\u5355\u6587\u4ef6/\u975e\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f"),(0,i.kt)("p",null,"\u8fd9\u79cd\u6a21\u5f0f\u7684\u7279\u70b9\u5c31\u662f\u9700\u8981\u670d\u52a1\u5668\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},".NET5/6")," \u7684\u73af\u5883"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 start --name xxx dotnet -- xxx.dll\n")),(0,i.kt)("admonition",{title:"\u6307\u5b9a\u7aef\u53e3",type:"important"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u9700\u6307\u5b9a\u7aef\u53e3\uff0c\u53ef\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\uff1a"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 start --name xxx dotnet -- PMS.Web.Entry.dll --urls=https://localhost:8089\n")),(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," \u540e\u9762\u53ef\u4ee5\u5199\u5b8c\u6574\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet")," \u547d\u4ee4\u3002")),(0,i.kt)("admonition",{title:"\u547d\u4ee4\u8bf4\u660e",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"xxx.dll")," \u4e3a\u9879\u76ee\u53d1\u5e03\u540e\u7684\u542f\u52a8\u5c42\u540d\u79f0\u3002"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"--name")," \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"pm2")," \u4e2d\u7684\u552f\u4e00\u6807\u8bc6\u3002")),(0,i.kt)("admonition",{title:"\u7ec8\u7aef\u8bf4\u660e",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," \u4f20\u9012\u53c2\u6570\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell")," \u7ec8\u7aef\u4e0b\u65e0\u6548\uff0c\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," \u7ec8\u7aef\u4e0b\u624d\u884c\u3002\u6bd4\u5982\u51fa\u73b0\u8fd9\u6837\u7684\u9519\u8bef\uff1a"),(0,i.kt)("img",{src:(0,p.Z)("img/pm2err.png")})),(0,i.kt)("h3",{id:"34632-\u5355\u6587\u4ef6\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f"},"34.6.3.2 \u5355\u6587\u4ef6/\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f"),(0,i.kt)("p",null,"\u8fd9\u79cd\u6a21\u5f0f\u7684\u7279\u70b9\u5c31\u662f\u65e0\u9700\u670d\u52a1\u5668\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},".NET")," \u4efb\u4f55\u73af\u5883\uff0c\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/furion/docs/singlefile"},"\u5355\u6587\u4ef6\u53d1\u5e03\u6587\u6863")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 start --name xxx PMS.Web.Entry.exe\n")),(0,i.kt)("admonition",{title:"\u6307\u5b9a\u7aef\u53e3",type:"important"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u9700\u6307\u5b9a\u7aef\u53e3\uff0c\u53ef\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\uff1a"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 start --name xxx PMS.Web.Entry.exe -- --urls=https://localhost:8089\n")),(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," \u540e\u9762\u53ef\u4ee5\u5199\u5b8c\u6574\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet")," \u547d\u4ee4\u3002")),(0,i.kt)("admonition",{title:"\u547d\u4ee4\u8bf4\u660e",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"xxx.exe")," \u4e3a\u9879\u76ee\u53d1\u5e03\u540e\u7684\u542f\u52a8\u5c42\u540d\u79f0\uff0c\u5982\u679c\u540d\u79f0\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"\u7a7a\u683c"),"\uff0c\u5219\u4f7f\u7528\u53cc\u5f15\u53f7\u5305\u88f9\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},'"x xx.exe"'),"\u3002"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"--name")," \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"pm2")," \u4e2d\u7684\u552f\u4e00\u6807\u8bc6\u3002")),(0,i.kt)("admonition",{title:"\u7ec8\u7aef\u8bf4\u660e",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," \u4f20\u9012\u53c2\u6570\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell")," \u7ec8\u7aef\u4e0b\u65e0\u6548\uff0c\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," \u7ec8\u7aef\u4e0b\u624d\u884c\u3002"),(0,i.kt)("img",{src:(0,p.Z)("img/pm2err.png")})),(0,i.kt)("h3",{id:"34633-\u542f\u7528\u5e94\u7528\u7a0b\u5e8f"},"34.6.3.3 \u542f\u7528\u5e94\u7528\u7a0b\u5e8f"),(0,i.kt)("p",null,"\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e\u4f1a\u663e\u793a\u542f\u52a8\u6210\u529f\u65e5\u5fd7\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"PS C:\\Users\\bqrjsoft\\Desktop\\pms> pm2 start --name pms PMS.Web.Entry.exe\n[PM2] Starting C:\\Users\\bqrjsoft\\Desktop\\pms\\PMS.Web.Entry.exe in fork_mode (1 instance)\n[PM2] Done.\n\u250c\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 id  \u2502 name   \u2502 namespace   \u2502 version \u2502 mode    \u2502 pid      \u2502 uptime \u2502 \u21ba    \u2502 status    \u2502 cpu      \u2502 mem      \u2502 user     \u2502 watching \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0   \u2502 pms    \u2502 default     \u2502 N/A     \u2502 fork    \u2502 41764    \u2502 0s     \u2502 0    \u2502 online    \u2502 0%       \u2502 85.0mb   \u2502 bqrjsoft \u2502 disabled \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nPS C:\\Users\\bqrjsoft\\Desktop\\pms>\n")),(0,i.kt)("img",{src:(0,p.Z)("img/sf30.png")}),(0,i.kt)("admonition",{title:"\u5173\u4e8e\u7aef\u53e3",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u7a0b\u5e8f\u9ed8\u8ba4\u7aef\u53e3\u90fd\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"5000"),"\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),"\u3002")),(0,i.kt)("h2",{id:"3464-pm2-\u5e38\u89c1\u64cd\u4f5c"},"34.6.4 ",(0,i.kt)("inlineCode",{parentName:"h2"},"pm2")," \u5e38\u89c1\u64cd\u4f5c"),(0,i.kt)("h3",{id:"34641-\u5b9e\u65f6\u76d1\u542c\u8fd0\u884c\u72b6\u6001"},"34.6.4.1 \u5b9e\u65f6\u76d1\u542c\u8fd0\u884c\u72b6\u6001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 monit\n")),(0,i.kt)("img",{src:(0,p.Z)("img/sf4.png")}),(0,i.kt)("h3",{id:"34642-\u663e\u793a\u8fd0\u884c\u65e5\u5fd7"},"34.6.4.2 \u663e\u793a\u8fd0\u884c\u65e5\u5fd7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 logs\n")),(0,i.kt)("img",{src:(0,p.Z)("img/sf5.png")}),(0,i.kt)("h3",{id:"34643-\u67e5\u770b\u5e94\u7528\u4fe1\u606f"},"34.6.4.3 \u67e5\u770b\u5e94\u7528\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 info pms\n")),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"pms")," \u4e3a\u60a8\u914d\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," \u540d\u79f0\u3002"),(0,i.kt)("img",{src:(0,p.Z)("img/sf6.png")}),(0,i.kt)("h3",{id:"34644-\u968f\u673a\u542f\u52a8"},"34.6.4.4 \u968f\u673a\u542f\u52a8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 startup\npm2 save\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Windows")," \u4e0b\u968f\u673a\u542f\u52a8"),(0,i.kt)("p",{parentName:"admonition"},"\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pm2-windows-startup"},"pm2-windows-startup"),"\u3002"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"npm install pm2-windows-startup -g\npm2-startup install\npm2 save\n"))),(0,i.kt)("h3",{id:"34645-\u96c6\u7fa4\u6a21\u5f0f\u8d1f\u8f7d\u5747\u8861"},"34.6.4.5 \u96c6\u7fa4\u6a21\u5f0f\uff08\u8d1f\u8f7d\u5747\u8861\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u975e\u5355\u6587\u4ef6/\u975e\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'pm2 start "xxx.dll" -i max\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5355\u6587\u4ef6/\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 start xxx.exe -i max\n")),(0,i.kt)("h3",{id:"34646-\u5176\u4ed6\u64cd\u4f5c"},"34.6.4.6 \u5176\u4ed6\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"// \u91cd\u542f\u5e94\u7528\npm2 restart app_name\n\n// \u91cd\u8f7d\u5e94\u7528\npm2 reload app_name\n\n// \u505c\u6b62\u5e94\u7528\npm2 stop app_name\n\n// \u5220\u9664\u5e94\u7528\npm2 delete app_name\n")),(0,i.kt)("p",null,"\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"pm2")," \u6587\u6863\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://pm2.keymetrics.io/docs/usage/quick-start/"},"https://pm2.keymetrics.io/docs/usage/quick-start/")),(0,i.kt)("h2",{id:"3465-\u53cd\u9988\u4e0e\u5efa\u8bae"},"34.6.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}c.isMDXComponent=!0}}]);