"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[8850],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return s}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),m=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),N=m(a),s=l,d=N["".concat(u,".").concat(s)]||N[s]||k[s]||i;return a?n.createElement(d,r(r({ref:t},o),{},{components:a})):n.createElement(d,r({ref:t},o))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=N;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},6754:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return N}});var n=a(3117),l=a(102),i=(a(7294),a(3905)),r=a(4996),p=["components"],u={id:"local-language",title:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316",sidebar_label:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316\uff08\u591a\u8bed\u8a00\uff09"},m=void 0,o={unversionedId:"local-language",id:"local-language",title:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316",description:"",source:"@site/docs/local-language.mdx",sourceDirName:".",slug:"/local-language",permalink:"/furion/docs/local-language",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/local-language.mdx",tags:[],version:"current",lastUpdatedBy:"mintsoul",lastUpdatedAt:1658823833,formattedLastUpdatedAt:"Jul 26, 2022",frontMatter:{id:"local-language",title:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316",sidebar_label:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316\uff08\u591a\u8bed\u8a00\uff09"},sidebar:"docs",previous:{title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",permalink:"/furion/docs/encryption"},next:{title:"22. \u4e8b\u4ef6\u603b\u7ebf\uff08New\uff09",permalink:"/furion/docs/event-bus"}},k={},N=[{value:"21.1 \u5168\u7403\u5316\u548c\u672c\u5730\u5316",id:"211-\u5168\u7403\u5316\u548c\u672c\u5730\u5316",level:2},{value:"21.2 \u6ce8\u518c\u670d\u52a1",id:"212-\u6ce8\u518c\u670d\u52a1",level:2},{value:"21.3 \u5982\u4f55\u4f7f\u7528",id:"213-\u5982\u4f55\u4f7f\u7528",level:2},{value:"21.3.1 \u914d\u7f6e <code>LocalizationSettings</code>",id:"2131-\u914d\u7f6e-localizationsettings",level:3},{value:"21.3.2 \u521b\u5efa <code>Resources</code> \u6587\u4ef6\u5939",id:"2132-\u521b\u5efa-resources-\u6587\u4ef6\u5939",level:3},{value:"21.4 <code>L</code> \u9759\u6001\u7c7b",id:"214-l-\u9759\u6001\u7c7b",level:2},{value:"21.5 \u4f7f\u7528\u4f8b\u5b50",id:"215-\u4f7f\u7528\u4f8b\u5b50",level:2},{value:"21.5.1 \u5728\u7c7b\u4e2d\u4f7f\u7528",id:"2151-\u5728\u7c7b\u4e2d\u4f7f\u7528",level:3},{value:"21.5.2 \u5728\u89c6\u56fe\u4e2d\u4f7f\u7528",id:"2152-\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528",level:3},{value:"21.5.3 \u5728\u9a8c\u8bc1\u7279\u6027\u4e2d\u4f7f\u7528",id:"2153-\u5728\u9a8c\u8bc1\u7279\u6027\u4e2d\u4f7f\u7528",level:3},{value:"21.5.4 \u5728\u5f02\u5e38\u6d88\u606f\u4e2d\u4f7f\u7528",id:"2154-\u5728\u5f02\u5e38\u6d88\u606f\u4e2d\u4f7f\u7528",level:3},{value:"21.6 \u521b\u5efa\u8bed\u8a00\u7ffb\u8bd1\u6587\u4ef6",id:"216-\u521b\u5efa\u8bed\u8a00\u7ffb\u8bd1\u6587\u4ef6",level:2},{value:"21.6.1 \u5728 <code>Resources</code> \u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u8bed\u8a00\u6587\u4ef6",id:"2161-\u5728-resources-\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u8bed\u8a00\u6587\u4ef6",level:3},{value:"21.7 \u5207\u6362\u8bed\u8a00",id:"217-\u5207\u6362\u8bed\u8a00",level:2},{value:"21.7.1 <code>URL \u53c2\u6570</code> \u65b9\u5f0f",id:"2171-url-\u53c2\u6570-\u65b9\u5f0f",level:3},{value:"21.7.2 <code>Cookies</code> \u65b9\u5f0f",id:"2172-cookies-\u65b9\u5f0f",level:3},{value:"21.7.3 <code>\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u8bed\u8a00\u81ea\u52a8\u5207\u6362</code>",id:"2173-\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u8bed\u8a00\u81ea\u52a8\u5207\u6362",level:3},{value:"21.8 \u4f9d\u8d56\u6ce8\u5165\u65b9\u5f0f\u4f7f\u7528",id:"218-\u4f9d\u8d56\u6ce8\u5165\u65b9\u5f0f\u4f7f\u7528",level:2},{value:"21.9 <code>LocalizationSettings</code> \u914d\u7f6e",id:"219-localizationsettings-\u914d\u7f6e",level:2},{value:"21.10 \u5173\u4e8e\u4e2d\u6587\u4e0d\u80fd\u5207\u6362\u95ee\u9898",id:"2110-\u5173\u4e8e\u4e2d\u6587\u4e0d\u80fd\u5207\u6362\u95ee\u9898",level:2},{value:"21.11 \u533a\u57df\u7801\u5217\u8868",id:"2111-\u533a\u57df\u7801\u5217\u8868",level:2},{value:"21.12 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2112-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],s={toc:N};function d(e){var t=e.components,a=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"211-\u5168\u7403\u5316\u548c\u672c\u5730\u5316"},"21.1 \u5168\u7403\u5316\u548c\u672c\u5730\u5316"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5168\u7403\u5316")," \u662f\u8bbe\u8ba1\u652f\u6301\u4e0d\u540c\u533a\u57df\u6027\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u8fc7\u7a0b\u3002 \u5168\u7403\u5316\u6dfb\u52a0\u4e86\u5bf9\u4e00\u7ec4\u6709\u5173\u7279\u5b9a\u5730\u7406\u533a\u57df\u7684\u5df2\u5b9a\u4e49\u8bed\u8a00\u811a\u672c\u7684\u8f93\u5165\u3001\u663e\u793a\u548c\u8f93\u51fa\u652f\u6301\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u672c\u5730\u5316")," \u662f\u5c06\u5df2\u7ecf\u9488\u5bf9\u53ef\u672c\u5730\u5316\u6027\u8fdb\u884c\u5904\u7406\u7684\u5168\u7403\u5316\u5e94\u7528\u8c03\u6574\u4e3a\u7279\u5b9a\u7684\u533a\u57df\u6027/\u533a\u57df\u8bbe\u7f6e\u7684\u8fc7\u7a0b\u3002"),(0,i.kt)("p",null,"\u901a\u4fd7\u6765\u8bf4\uff0c\u5c31\u662f\u4f7f\u5e94\u7528\u6216\u7cfb\u7edf\u652f\u6301\u591a\u8bed\u8a00\u5207\u6362\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u5b8c\u6574\u652f\u6301\u591a\u8bed\u8a00\u5904\u7406\u7684\u670d\u52a1\u3002"),(0,i.kt)("h2",{id:"212-\u6ce8\u518c\u670d\u52a1"},"21.2 \u6ce8\u518c\u670d\u52a1"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528\u591a\u8bed\u8a00\u670d\u52a1\u4e4b\u524d\uff0c\u5fc5\u987b\u5148\u6ce8\u518c\u670d\u52a1\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4,14-15}",showLineNumbers:!0,"":!0,"{4,14-15}":!0},"public void ConfigureServices(IServiceCollection services)\n{\n    services.AddControllersWithViews()\n            .AddAppLocalization();  // \u6ce8\u518c\u591a\u8bed\u8a00\n}\n\npublic void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n{\n    if (env.IsDevelopment())\n    {\n        app.UseDeveloperExceptionPage();\n    }\n\n    // \u914d\u7f6e\u591a\u8bed\u8a00\uff0c\u5fc5\u987b\u5728 \u8def\u7531\u6ce8\u518c\u4e4b\u524d\n    app.UseAppLocalization();\n\n    app.UseStaticFiles();\n    app.UseRouting();\n\n    // \u5176\u4ed6\u4e2d\u95f4\u4ef6\n}\n")),(0,i.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"important"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"app.UseAppLocalization();")," \u5fc5\u987b\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseRouting();")," \u4e4b\u524d\u6ce8\u518c\u3002")),(0,i.kt)("h2",{id:"213-\u5982\u4f55\u4f7f\u7528"},"21.3 \u5982\u4f55\u4f7f\u7528"),(0,i.kt)("h3",{id:"2131-\u914d\u7f6e-localizationsettings"},"21.3.1 \u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"h3"},"LocalizationSettings")),(0,i.kt)("p",null,"\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalizationSettings")," \u914d\u7f6e\u9009\u9879\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers  {2,3}",showLineNumbers:!0,"":!0,"{2,3}":!0},'{\n  "LocalizationSettings": {\n    "SupportedCultures": ["zh-CN", "en-US"], // \u914d\u7f6e\u652f\u6301\u7684\u8bed\u8a00\u5217\u8868\n    "DefaultCulture": "zh-CN" // \u914d\u7f6e\u9ed8\u8ba4\u8bed\u8a00\uff0c\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u53d6 SupportedCultures \u7684\u7b2c\u4e00\u9879\n  }\n}\n')),(0,i.kt)("h3",{id:"2132-\u521b\u5efa-resources-\u6587\u4ef6\u5939"},"21.3.2 \u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"h3"},"Resources")," \u6587\u4ef6\u5939"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Web\u542f\u52a8\u9879\u76ee\u5c42")," \u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Resources")," \u6587\u4ef6\u5939\uff0c\u5982\u56fe\uff1a\uff08",(0,i.kt)("strong",{parentName:"p"},"\u53ef\u914d\u7f6e\u653e\u7f6e\u4efb\u610f\u5c42\uff0c\u89c1\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"strong"},"AssemblyName")),"\uff09"),(0,i.kt)("img",{src:(0,r.Z)("img/lang1.png")}),(0,i.kt)("h2",{id:"214-l-\u9759\u6001\u7c7b"},"21.4 ",(0,i.kt)("inlineCode",{parentName:"h2"},"L")," \u9759\u6001\u7c7b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e3b\u8981\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," \u9759\u6001\u7c7b\u5b8c\u6210\u591a\u8bed\u8a00\u8f6c\u6362\uff0c\u8be5\u9759\u6001\u7c7b\u6709\u4ee5\u4e0b\u5c5e\u6027\u548c\u65b9\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"L.Text[\u6587\u672c]"),"\uff1a\u8f6c\u6362\u6587\u672c\u591a\u8bed\u8a00"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"L.Html[HTML\u4ee3\u7801, \u683c\u5f0f\u5316]"),"\uff1a\u8f6c\u6362 ",(0,i.kt)("inlineCode",{parentName:"li"},"Html")," \u591a\u8bed\u8a00"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"L.SetCulture(\u533a\u57df\u7801)"),"\uff1a\u8bbe\u7f6e\u5f53\u524d\u8bed\u8a00\u533a\u57df"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"L.GetSelectCulture()"),"\uff1a\u83b7\u53d6\u5f53\u524d\u7684\u8bed\u8a00\u533a\u57df"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"L.GetCultures()"),"\uff1a\u83b7\u53d6\u7cfb\u7edf\u652f\u6301\u7684\u591a\u8bed\u8a00\u5217\u8868")),(0,i.kt)("h2",{id:"215-\u4f7f\u7528\u4f8b\u5b50"},"21.5 \u4f7f\u7528\u4f8b\u5b50"),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u914d\u7f6e\u6b65\u9aa4\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," \u9759\u6001\u7c7b\u5728\u4ee3\u7801\u4efb\u4f55\u4f4d\u7f6e\u4f7f\u7528\u4e86\uff0c\u5982\uff1a"),(0,i.kt)("h3",{id:"2151-\u5728\u7c7b\u4e2d\u4f7f\u7528"},"21.5.1 \u5728\u7c7b\u4e2d\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u6587\u672c\u591a\u8bed\u8a00\nvar apiInterface = L.Text["API \u63a5\u53e3"];\nvar sourceCode = L.Text["\u6e90\u7801\u5730\u5740"];\n\n// HTML \u6807\u8bb0\u591a\u8bed\u8a00\nvar name = L.Html["<b>Hello</b><i> {0}</i>", name];\n')),(0,i.kt)("h3",{id:"2152-\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528"},"21.5.2 \u5728\u89c6\u56fe\u4e2d\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers  {1,6,9}",showLineNumbers:!0,"":!0,"{1,6,9}":!0},'@using Furion.Localization\n\n<div style="text-align:center;margin-top:50px;">\n  <p>\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002</p>\n  <p>\n    <a href="/api">@L.Text["API \u63a5\u53e3"]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a\n      href="https://gitee.com/dotnetchina/Furion"\n      target="_blank"\n      >@L.Text["\u6e90\u7801\u5730\u5740"]</a\n    >\n  </p>\n</div>\n')),(0,i.kt)("h3",{id:"2153-\u5728\u9a8c\u8bc1\u7279\u6027\u4e2d\u4f7f\u7528"},"21.5.3 \u5728\u9a8c\u8bc1\u7279\u6027\u4e2d\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'[Required(ErrorMessage = "\u5fc5\u586b\u6d88\u606f")]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6240\u6709\u9a8c\u8bc1\u7279\u6027\u5df2\u7ecf\u81ea\u52a8\u652f\u6301\u591a\u8bed\u8a00\u914d\u7f6e\u4e86\uff0c\u65e0\u9700\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"strong"},"L.Text[]")," \u8c03\u7528\u3002")),(0,i.kt)("h3",{id:"2154-\u5728\u5f02\u5e38\u6d88\u606f\u4e2d\u4f7f\u7528"},"21.5.4 \u5728\u5f02\u5e38\u6d88\u606f\u4e2d\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {8}",showLineNumbers:!0,"":!0,"{8}":!0},'using Furion.FriendlyException;\n\nnamespace Furion.Application\n{\n    [ErrorCodeType]\n    public enum ErrorCodes\n    {\n        [ErrorCodeItemMetadata("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a")]\n        z1000\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6240\u6709\u5f02\u5e38\u6d88\u606f\u7279\u6027\u5df2\u7ecf\u81ea\u52a8\u652f\u6301\u591a\u8bed\u8a00\u914d\u7f6e\u4e86\uff0c\u65e0\u9700\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"strong"},"L.Text[]")," \u8c03\u7528\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"throw Oops.Oh(ErrorCodes.z1000);    // \u81ea\u52a8\u5e94\u7528\u591a\u8bed\u8a00\n")),(0,i.kt)("h2",{id:"216-\u521b\u5efa\u8bed\u8a00\u7ffb\u8bd1\u6587\u4ef6"},"21.6 \u521b\u5efa\u8bed\u8a00\u7ffb\u8bd1\u6587\u4ef6"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5982\u679c\u6ca1\u627e\u5230\u5bf9\u5e94\u7684\u8bed\u8a00\u7ffb\u8bd1\u6587\u4ef6\uff0c\u5219\u81ea\u52a8\u663e\u793a\u5b57\u7b26\u4e32\u6587\u672c\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'L.Text["\u6ca1\u627e\u5230"];   // => \u5982\u679c\u8bbe\u7f6e\u4e3a\u82f1\u6587\uff0c\u4f46\u662f\u6ca1\u6709\u6587\u4ef6\uff0c\u5219\u76f4\u63a5\u8f93\u51fa \u201c\u6ca1\u627e\u5230\u201d\n')),(0,i.kt)("h3",{id:"2161-\u5728-resources-\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u8bed\u8a00\u6587\u4ef6"},"21.6.1 \u5728 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Resources")," \u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u8bed\u8a00\u6587\u4ef6"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u521a\u521a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Resources")," \u6587\u4ef6\u5939\u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8d44\u6e90\u6587\u4ef6")," \u5373\u53ef\uff0c\u8d44\u6e90\u6587\u4ef6\u547d\u540d\u89c4\u5219\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Lang.\u533a\u57df\u7801.resx"),"\uff0c\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Lang.en-US.resx"),"\u3002"),(0,i.kt)("img",{src:(0,r.Z)("img/lang2.png")}),(0,i.kt)("img",{src:(0,r.Z)("img/lang3.png")}),(0,i.kt)("p",null),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u53ea\u9700\u8981\u628a\u5bf9\u5e94\u8bed\u8a00\u7248\u672c\u7684\u952e\u503c\u5bf9\u586b\u5199\u5373\u53ef\u3002"),(0,i.kt)("admonition",{title:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u6587\u4ef6\u540d\u6216\u5b58\u653e\u7a0b\u5e8f\u96c6",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8d44\u6e90\u6587\u4ef6\u540d\u5fc5\u987b\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Lang")," \u5f00\u5934\uff0c\u4e14\u53ea\u80fd\u653e\u5728\u542f\u52a8\u5c42\uff0c\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\uff0c\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6\u5373\u53ef"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "LocalizationSettings": {\n    "LanguageFilePrefix": "MyLang"\n    // "AssemblyName": "\u4f60\u7684\u5176\u4ed6\u5c42\u7a0b\u5e8f\u96c6\u540d\u79f0"\n  }\n}\n')),(0,i.kt)("p",{parentName:"admonition"},"\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"MyLang.\u533a\u57df\u7801.resx"),"\u3002")),(0,i.kt)("h2",{id:"217-\u5207\u6362\u8bed\u8a00"},"21.7 \u5207\u6362\u8bed\u8a00"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86\u4e09\u79cd\u8bed\u8a00\u5207\u6362\u65b9\u5f0f\u8fdb\u884c\u5207\u6362\u8bed\u8a00\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"URL \u53c2\u6570")," \u65b9\u5f0f\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"?culture=en-US"),"\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u6b64\u65b9\u5f0f\u4f18\u5148\u7ea7\u6700\u9ad8"),"\uff0c\u683c\u5f0f\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"culture=\u533a\u57df\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Cookies")," \u65b9\u5f0f\uff1a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"L.SetCulture(\u533a\u57df\u7801)")," \u65b9\u5f0f\u5207\u6362"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u8bed\u8a00\u81ea\u52a8\u5339\u914d"),"\uff1a\u5982\u679c\u524d\u9762\u4e24\u79cd\u65b9\u5f0f\u90fd\u6ca1\u6709\u8bbe\u7f6e\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u652f\u6301\u81ea\u52a8\u6839\u636e\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u8bed\u8a00\u8fdb\u884c\u5339\u914d\u3002"))),(0,i.kt)("h3",{id:"2171-url-\u53c2\u6570-\u65b9\u5f0f"},"21.7.1 ",(0,i.kt)("inlineCode",{parentName:"h3"},"URL \u53c2\u6570")," \u65b9\u5f0f"),(0,i.kt)("img",{src:(0,r.Z)("img/lang4.gif")}),(0,i.kt)("h3",{id:"2172-cookies-\u65b9\u5f0f"},"21.7.2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Cookies")," \u65b9\u5f0f"),(0,i.kt)("p",null,"\u6b64\u65b9\u5f0f\u53ea\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," \u6216\u8bbe\u7f6e\u4ee3\u7801\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'L.SetCulture("en-US");  // en-US \u4e5f\u53ef\u4ee5\u901a\u8fc7\u524d\u7aef\u4f20\u9012\u8fc7\u6765\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4e0d\u7528 `culture` \u53c2\u6570\u4e86\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u53c2\u6570\u3002\n')),(0,i.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u76f4\u63a5\u6839\u636e\u5ba2\u6237\u7aef\u5b58\u50a8\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"cookies")," \u81ea\u52a8\u5207\u6362\u4e86\u3002"),(0,i.kt)("h3",{id:"2173-\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u8bed\u8a00\u81ea\u52a8\u5207\u6362"},"21.7.3 ",(0,i.kt)("inlineCode",{parentName:"h3"},"\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u8bed\u8a00\u81ea\u52a8\u5207\u6362")),(0,i.kt)("p",null,"\u63a8\u8350\u6b64\u65b9\u5f0f\uff0c\u53ef\u4ee5\u81ea\u52a8\u6839\u636e\u6d4f\u89c8\u5668\u7684\u8bed\u8a00\u81ea\u52a8\u914d\u7f6e\uff1a"),(0,i.kt)("img",{src:(0,r.Z)("img/lang5.gif")}),(0,i.kt)("h2",{id:"218-\u4f9d\u8d56\u6ce8\u5165\u65b9\u5f0f\u4f7f\u7528"},"21.8 \u4f9d\u8d56\u6ce8\u5165\u65b9\u5f0f\u4f7f\u7528"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e5f\u517c\u5bb9 ",(0,i.kt)("inlineCode",{parentName:"p"},".NET Core")," \u81ea\u5e26\u7684\u4f9d\u8d56\u6ce8\u5165\u65b9\u5f0f\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3,5,7,12}",showLineNumbers:!0,"":!0,"{3,5,7,12}":!0},' public class TestController : Controller\n {\n     private readonly IStringLocalizer _localizer;\n\n     public TestController(IStringLocalizerFactory factory)\n     {\n         _localizer = factory.Create();\n     }\n\n     public IActionResult About()\n     {\n         ViewData["Message"] = _localizer["Your application description page."];\n     }\n }\n')),(0,i.kt)("h2",{id:"219-localizationsettings-\u914d\u7f6e"},"21.9 ",(0,i.kt)("inlineCode",{parentName:"h2"},"LocalizationSettings")," \u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LocalizationSettings")," \u591a\u8bed\u8a00\u914d\u7f6e\u6839\u8282\u70b9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ResourcesPath"),"\uff1a\u8d44\u6e90\u76ee\u5f55\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},"Resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SupportedCultures"),"\uff1a\u652f\u6301\u7684\u8bed\u8a00\u533a\u57df\u7801\u7c7b\u522b\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefaultCulture"),"\uff1a\u9ed8\u8ba4\u8bed\u8a00\u533a\u57df\u7801\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u53d6 ",(0,i.kt)("inlineCode",{parentName:"li"},"SupportedCultures")," \u7b2c\u4e00\u9879"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LanguageFilePrefix"),"\uff1a\u914d\u7f6e\u8d44\u6e90\u6587\u4ef6\u524d\u7f00\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},"Lang")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AssemblyName"),"\uff1a\u914d\u7f6e\u8d44\u6e90\u6587\u4ef6\u5b58\u653e\u7a0b\u5e8f\u96c6\u540d\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u542f\u52a8\u5c42")," \u540d\u79f0")))),(0,i.kt)("h2",{id:"2110-\u5173\u4e8e\u4e2d\u6587\u4e0d\u80fd\u5207\u6362\u95ee\u9898"},"21.10 \u5173\u4e8e\u4e2d\u6587\u4e0d\u80fd\u5207\u6362\u95ee\u9898"),(0,i.kt)("p",null,"\u82e5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet build")," \u547d\u4ee4\u884c\u7f16\u8bd1\u540e\u53d1\u5e03\u7684\u4ee3\u7801\uff08\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"jenkins")," \u4ee5\u53ca\u5176\u4ed6 ",(0,i.kt)("inlineCode",{parentName:"p"},"devops")," \u5de5\u5177\uff09\uff0c\u65e0\u6cd5\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"zh-CN")," \u8d44\u6e90\u6587\u4ef6\uff0c\u4f1a\u51fa\u73b0\u4e2d\u6587\u65e0\u6cd5\u663e\u793a\u7684\u95ee\u9898\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"Lang.zh-CN.resx")," \u4fee\u6539\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Lang.zh-Hans.resx")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"Lang.zh-Hant.resx")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"Lang.zh.resx")," \u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u76f8\u5173\u6587\u6863\u8bf4\u660e ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/api/system.globalization.cultureinfo?view=net-6.0"},"https://docs.microsoft.com/zh-cn/dotnet/api/system.globalization.cultureinfo?view=net-6.0")),(0,i.kt)("h2",{id:"2111-\u533a\u57df\u7801\u5217\u8868"},"21.11 \u533a\u57df\u7801\u5217\u8868"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"af \u516c\u7528\u8377\u5170\u8bed"),(0,i.kt)("li",{parentName:"ul"},"af-ZA \u516c\u7528\u8377\u5170\u8bed - \u5357\u975e"),(0,i.kt)("li",{parentName:"ul"},"sq \u963f\u5c14\u5df4\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"sq-AL \u963f\u5c14\u5df4\u5c3c\u4e9a -\u963f\u5c14\u5df4\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"ar \u963f\u62c9\u4f2f\u8bed"),(0,i.kt)("li",{parentName:"ul"},"ar-DZ \u963f\u62c9\u4f2f\u8bed -\u963f\u5c14\u53ca\u5229\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"ar-BH \u963f\u62c9\u4f2f\u8bed -\u5df4\u6797"),(0,i.kt)("li",{parentName:"ul"},"ar-EG \u963f\u62c9\u4f2f\u8bed -\u57c3\u53ca"),(0,i.kt)("li",{parentName:"ul"},"ar-IQ \u963f\u62c9\u4f2f\u8bed -\u4f0a\u62c9\u514b"),(0,i.kt)("li",{parentName:"ul"},"ar-JO \u963f\u62c9\u4f2f\u8bed -\u7ea6\u65e6"),(0,i.kt)("li",{parentName:"ul"},"ar-KW \u963f\u62c9\u4f2f\u8bed -\u79d1\u5a01\u7279"),(0,i.kt)("li",{parentName:"ul"},"ar-LB \u963f\u62c9\u4f2f\u8bed -\u9ece\u5df4\u5ae9"),(0,i.kt)("li",{parentName:"ul"},"ar-LY \u963f\u62c9\u4f2f\u8bed -\u5229\u6bd4\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"ar-MA \u963f\u62c9\u4f2f\u8bed -\u6469\u6d1b\u54e5"),(0,i.kt)("li",{parentName:"ul"},"ar-OM \u963f\u62c9\u4f2f\u8bed -\u963f\u66fc"),(0,i.kt)("li",{parentName:"ul"},"ar-QA \u963f\u62c9\u4f2f\u8bed -\u5361\u5854\u5c14"),(0,i.kt)("li",{parentName:"ul"},"ar-SA \u963f\u62c9\u4f2f\u8bed - \u6c99\u7279\u963f\u62c9\u4f2f"),(0,i.kt)("li",{parentName:"ul"},"ar-SY \u963f\u62c9\u4f2f\u8bed -\u53d9\u5229\u4e9a\u5171\u548c\u56fd"),(0,i.kt)("li",{parentName:"ul"},"ar-TN \u963f\u62c9\u4f2f\u8bed -\u5317\u975e\u7684\u5171\u548c\u56fd"),(0,i.kt)("li",{parentName:"ul"},"ar-AE \u963f\u62c9\u4f2f\u8bed - \u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd"),(0,i.kt)("li",{parentName:"ul"},"ar-YE \u963f\u62c9\u4f2f\u8bed -\u4e5f\u95e8"),(0,i.kt)("li",{parentName:"ul"},"hy \u4e9a\u7f8e\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"hy-AM \u4e9a\u7f8e\u5c3c\u4e9a\u7684 -\u4e9a\u7f8e\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"az Azeri"),(0,i.kt)("li",{parentName:"ul"},"az-AZ-Cyrl Azeri-(\u897f\u91cc\u5c14\u5b57\u6bcd\u7684) \u963f\u585e\u62dc\u7586"),(0,i.kt)("li",{parentName:"ul"},"az-AZ-Latn Azeri(\u62c9\u4e01\u6587)- \u963f\u585e\u62dc\u7586"),(0,i.kt)("li",{parentName:"ul"},"eu \u5df4\u65af\u514b"),(0,i.kt)("li",{parentName:"ul"},"eu-ES \u5df4\u65af\u514b -\u5df4\u65af\u514b"),(0,i.kt)("li",{parentName:"ul"},"be Belarusian"),(0,i.kt)("li",{parentName:"ul"},"be-BY Belarusian-\u767d\u4fc4\u7f57\u65af"),(0,i.kt)("li",{parentName:"ul"},"bg \u4fdd\u52a0\u5229\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"bg-BG \u4fdd\u52a0\u5229\u4e9a -\u4fdd\u52a0\u5229\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"ca \u5609\u6cf0\u7f57\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"ca-ES \u5609\u6cf0\u7f57\u5c3c\u4e9a -\u5609\u6cf0\u7f57\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"zh-HK \u534e - \u9999\u6e2f\u7684 SAR"),(0,i.kt)("li",{parentName:"ul"},"zh-MO \u534e - \u6fb3\u95e8\u7684 SAR"),(0,i.kt)("li",{parentName:"ul"},"zh-CN \u534e -\u4e2d\u56fd"),(0,i.kt)("li",{parentName:"ul"},"zh-CHS \u534e (\u5355\u4e00\u5316)"),(0,i.kt)("li",{parentName:"ul"},"zh-SG \u534e -\u65b0\u52a0\u5761"),(0,i.kt)("li",{parentName:"ul"},"zh-TW \u534e -\u53f0\u6e7e"),(0,i.kt)("li",{parentName:"ul"},"zh-CHT \u534e (\u4f20\u7edf\u7684)"),(0,i.kt)("li",{parentName:"ul"},"hr \u514b\u7f57\u57c3\u897f\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"hr-HR \u514b\u7f57\u57c3\u897f\u4e9a -\u514b\u7f57\u57c3\u897f\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"cs \u6377\u514b"),(0,i.kt)("li",{parentName:"ul"},"cs-CZ \u6377\u514b - \u6377\u514b"),(0,i.kt)("li",{parentName:"ul"},"da \u4e39\u9ea6\u6587"),(0,i.kt)("li",{parentName:"ul"},"da-DK \u4e39\u9ea6\u6587 -\u4e39\u9ea6"),(0,i.kt)("li",{parentName:"ul"},"div Dhivehi"),(0,i.kt)("li",{parentName:"ul"},"div-MV Dhivehi-\u9a6c\u5c14\u4ee3\u592b"),(0,i.kt)("li",{parentName:"ul"},"nl \u8377\u5170"),(0,i.kt)("li",{parentName:"ul"},"nl-BE \u8377\u5170 -\u6bd4\u5229\u65f6"),(0,i.kt)("li",{parentName:"ul"},"nl-NL \u8377\u5170 - \u8377\u5170"),(0,i.kt)("li",{parentName:"ul"},"en \u82f1\u56fd"),(0,i.kt)("li",{parentName:"ul"},"en-AU \u82f1\u56fd -\u6fb3\u6d32"),(0,i.kt)("li",{parentName:"ul"},"en-BZ \u82f1\u56fd -\u4f2f\u5229\u5179"),(0,i.kt)("li",{parentName:"ul"},"en-CA \u82f1\u56fd -\u52a0\u62ff\u5927"),(0,i.kt)("li",{parentName:"ul"},"en-CB \u82f1\u56fd -\u52a0\u52d2\u6bd4\u6d77"),(0,i.kt)("li",{parentName:"ul"},"en-IE \u82f1\u56fd -\u7231\u5c14\u5170"),(0,i.kt)("li",{parentName:"ul"},"en-JM \u82f1\u56fd -\u7259\u4e70\u52a0"),(0,i.kt)("li",{parentName:"ul"},"en-NZ \u82f1\u56fd - \u65b0\u897f\u5170"),(0,i.kt)("li",{parentName:"ul"},"en-PH \u82f1\u56fd -\u83f2\u5f8b\u5bbe\u5171\u548c\u56fd"),(0,i.kt)("li",{parentName:"ul"},"en-ZA \u82f1\u56fd - \u5357\u975e"),(0,i.kt)("li",{parentName:"ul"},"en-TT \u82f1\u56fd - \u5343\u91cc\u8fbe\u6258\u8d1d\u54e5\u5171\u548c\u56fd"),(0,i.kt)("li",{parentName:"ul"},"en-GB \u82f1\u56fd - \u82f1\u56fd"),(0,i.kt)("li",{parentName:"ul"},"en-US \u82f1\u56fd - \u7f8e\u56fd"),(0,i.kt)("li",{parentName:"ul"},"en-ZW \u82f1\u56fd -\u6d25\u5df4\u5e03\u97e6"),(0,i.kt)("li",{parentName:"ul"},"et \u7231\u6c99\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"et-EE \u7231\u6c99\u5c3c\u4e9a\u7684 -\u7231\u6c99\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"fo Faroese"),(0,i.kt)("li",{parentName:"ul"},"fo-FO Faroese- \u6cd5\u7f57\u7fa4\u5c9b"),(0,i.kt)("li",{parentName:"ul"},"fa \u6ce2\u65af\u8bed"),(0,i.kt)("li",{parentName:"ul"},"fa-IR \u6ce2\u65af\u8bed -\u4f0a\u6717\u738b\u56fd"),(0,i.kt)("li",{parentName:"ul"},"fi \u82ac\u5170\u8bed"),(0,i.kt)("li",{parentName:"ul"},"fi-FI \u82ac\u5170\u8bed -\u82ac\u5170"),(0,i.kt)("li",{parentName:"ul"},"fr \u6cd5\u56fd"),(0,i.kt)("li",{parentName:"ul"},"fr-BE \u6cd5\u56fd -\u6bd4\u5229\u65f6"),(0,i.kt)("li",{parentName:"ul"},"fr-CA \u6cd5\u56fd -\u52a0\u62ff\u5927"),(0,i.kt)("li",{parentName:"ul"},"fr-FR \u6cd5\u56fd -\u6cd5\u56fd"),(0,i.kt)("li",{parentName:"ul"},"fr-LU \u6cd5\u56fd -\u5362\u68ee\u5821"),(0,i.kt)("li",{parentName:"ul"},"fr-MC \u6cd5\u56fd -\u6469\u7eb3\u54e5"),(0,i.kt)("li",{parentName:"ul"},"fr-CH \u6cd5\u56fd -\u745e\u58eb"),(0,i.kt)("li",{parentName:"ul"},"gl \u52a0\u5229\u897f\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"gl-ES \u52a0\u5229\u897f\u4e9a -\u52a0\u5229\u897f\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"ka \u683c\u9c81\u5409\u4e9a\u5dde"),(0,i.kt)("li",{parentName:"ul"},"ka-GE \u683c\u9c81\u5409\u4e9a\u5dde -\u683c\u9c81\u5409\u4e9a\u5dde"),(0,i.kt)("li",{parentName:"ul"},"de \u5fb7\u56fd"),(0,i.kt)("li",{parentName:"ul"},"de-AT \u5fb7\u56fd -\u5965\u5730\u5229"),(0,i.kt)("li",{parentName:"ul"},"de-DE \u5fb7\u56fd -\u5fb7\u56fd"),(0,i.kt)("li",{parentName:"ul"},"de-LI \u5fb7\u56fd -\u5217\u652f\u6566\u58eb\u767b"),(0,i.kt)("li",{parentName:"ul"},"de-LU \u5fb7\u56fd -\u5362\u68ee\u5821"),(0,i.kt)("li",{parentName:"ul"},"de-CH \u5fb7\u56fd -\u745e\u58eb"),(0,i.kt)("li",{parentName:"ul"},"el \u5e0c\u814a"),(0,i.kt)("li",{parentName:"ul"},"el-GR \u5e0c\u814a -\u5e0c\u814a"),(0,i.kt)("li",{parentName:"ul"},"gu Gujarati"),(0,i.kt)("li",{parentName:"ul"},"gu-IN Gujarati-\u5370\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"he \u5e0c\u4f2f\u6765"),(0,i.kt)("li",{parentName:"ul"},"he-IL \u5e0c\u4f2f\u6765 -\u4ee5\u8272\u5217"),(0,i.kt)("li",{parentName:"ul"},"hi \u5317\u5370\u5ea6\u8bed"),(0,i.kt)("li",{parentName:"ul"},"hi-IN \u5317\u5370\u5ea6\u7684 -\u5370\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"hu \u5308\u7259\u5229"),(0,i.kt)("li",{parentName:"ul"},"hu-HU \u5308\u7259\u5229\u7684 -\u5308\u7259\u5229"),(0,i.kt)("li",{parentName:"ul"},"is \u51b0\u5c9b\u8bed"),(0,i.kt)("li",{parentName:"ul"},"is-IS \u51b0\u5c9b\u7684 -\u51b0\u5c9b"),(0,i.kt)("li",{parentName:"ul"},"id \u5370\u5c3c"),(0,i.kt)("li",{parentName:"ul"},"id-ID \u5370\u5c3c -\u5370\u5c3c"),(0,i.kt)("li",{parentName:"ul"},"it \u610f\u5927\u5229"),(0,i.kt)("li",{parentName:"ul"},"it-IT \u610f\u5927\u5229 -\u610f\u5927\u5229"),(0,i.kt)("li",{parentName:"ul"},"it-CH \u610f\u5927\u5229 -\u745e\u58eb"),(0,i.kt)("li",{parentName:"ul"},"ja \u65e5\u672c"),(0,i.kt)("li",{parentName:"ul"},"ja-JP \u65e5\u672c -\u65e5\u672c"),(0,i.kt)("li",{parentName:"ul"},"kn \u5361\u7eb3\u8fbe\u8bed"),(0,i.kt)("li",{parentName:"ul"},"kn-IN \u5361\u7eb3\u8fbe\u8bed -\u5370\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"kk Kazakh"),(0,i.kt)("li",{parentName:"ul"},"kk-KZ Kazakh-\u54c8\u8428\u514b"),(0,i.kt)("li",{parentName:"ul"},"kok Konkani"),(0,i.kt)("li",{parentName:"ul"},"kok-IN Konkani-\u5370\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"ko \u97e9\u56fd"),(0,i.kt)("li",{parentName:"ul"},"ko-KR \u97e9\u56fd -\u97e9\u56fd"),(0,i.kt)("li",{parentName:"ul"},"ky Kyrgyz"),(0,i.kt)("li",{parentName:"ul"},"ky-KZ Kyrgyz-\u54c8\u8428\u514b"),(0,i.kt)("li",{parentName:"ul"},"lv \u62c9\u8131\u7ef4\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"lv-LV \u62c9\u8131\u7ef4\u4e9a\u7684 -\u62c9\u8131\u7ef4\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"lt \u7acb\u9676\u5b9b"),(0,i.kt)("li",{parentName:"ul"},"lt-LT \u7acb\u9676\u5b9b -\u7acb\u9676\u5b9b"),(0,i.kt)("li",{parentName:"ul"},"mk \u9a6c\u5176\u987f"),(0,i.kt)("li",{parentName:"ul"},"mk-MK \u9a6c\u5176\u987f -FYROM"),(0,i.kt)("li",{parentName:"ul"},"ms \u9a6c\u6765"),(0,i.kt)("li",{parentName:"ul"},"ms-BN \u9a6c\u6765 -\u6c76\u83b1"),(0,i.kt)("li",{parentName:"ul"},"ms-MY \u9a6c\u6765 -\u9a6c\u6765\u897f\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"mr \u9a6c\u62c9\u5730\u8bed"),(0,i.kt)("li",{parentName:"ul"},"mr-IN \u9a6c\u62c9\u5730\u8bed -\u5370\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"mn \u8499\u53e4"),(0,i.kt)("li",{parentName:"ul"},"mn-MN \u8499\u53e4 -\u8499\u53e4"),(0,i.kt)("li",{parentName:"ul"},"no \u632a\u5a01"),(0,i.kt)("li",{parentName:"ul"},"nb-NO \u632a\u5a01 (Bokm?l) - \u632a\u5a01"),(0,i.kt)("li",{parentName:"ul"},"nn-NO \u632a\u5a01 (Nynorsk)- \u632a\u5a01"),(0,i.kt)("li",{parentName:"ul"},"pl \u6ce2\u5170"),(0,i.kt)("li",{parentName:"ul"},"pl-PL \u6ce2\u5170 -\u6ce2\u5170"),(0,i.kt)("li",{parentName:"ul"},"pt \u8461\u8404\u7259"),(0,i.kt)("li",{parentName:"ul"},"pt-BR \u8461\u8404\u7259 -\u5df4\u897f"),(0,i.kt)("li",{parentName:"ul"},"pt-PT \u8461\u8404\u7259 -\u8461\u8404\u7259"),(0,i.kt)("li",{parentName:"ul"},"pa Punjab \u8bed"),(0,i.kt)("li",{parentName:"ul"},"pa-IN Punjab \u8bed -\u5370\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"ro \u7f57\u9a6c\u5c3c\u4e9a\u8bed"),(0,i.kt)("li",{parentName:"ul"},"ro-RO \u7f57\u9a6c\u5c3c\u4e9a\u8bed -\u7f57\u9a6c\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"ru \u4fc4\u56fd"),(0,i.kt)("li",{parentName:"ul"},"ru-RU \u4fc4\u56fd -\u4fc4\u56fd"),(0,i.kt)("li",{parentName:"ul"},"sa \u68b5\u6587"),(0,i.kt)("li",{parentName:"ul"},"sa-IN \u68b5\u6587 -\u5370\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"sr-SP-Cyrl \u585e\u5c14\u7ef4\u4e9a -(\u897f\u91cc\u5c14\u5b57\u6bcd\u7684) \u585e\u5c14\u7ef4\u4e9a\u5171\u548c\u56fd"),(0,i.kt)("li",{parentName:"ul"},"sr-SP-Latn \u585e\u5c14\u7ef4\u4e9a (\u62c9\u4e01\u6587)- \u585e\u5c14\u7ef4\u4e9a\u5171\u548c\u56fd"),(0,i.kt)("li",{parentName:"ul"},"sk \u65af\u6d1b\u4f10\u514b"),(0,i.kt)("li",{parentName:"ul"},"sk-SK \u65af\u6d1b\u4f10\u514b -\u65af\u6d1b\u4f10\u514b"),(0,i.kt)("li",{parentName:"ul"},"sl \u65af\u6d1b\u6587\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"sl-SI \u65af\u6d1b\u6587\u5c3c\u4e9a -\u65af\u6d1b\u6587\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"es \u897f\u73ed\u7259"),(0,i.kt)("li",{parentName:"ul"},"es-AR \u897f\u73ed\u7259 -\u963f\u6839\u5ef7"),(0,i.kt)("li",{parentName:"ul"},"es-BO \u897f\u73ed\u7259 -\u73bb\u5229\u7ef4\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"es-CL \u897f\u73ed\u7259 -\u667a\u5229"),(0,i.kt)("li",{parentName:"ul"},"es-CO \u897f\u73ed\u7259 -\u54e5\u4f26\u6bd4\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"es-CR \u897f\u73ed\u7259 - \u54e5\u65af\u8fbe\u9ece\u52a0"),(0,i.kt)("li",{parentName:"ul"},"es-DO \u897f\u73ed\u7259 - \u591a\u7c73\u5c3c\u52a0\u5171\u548c\u56fd"),(0,i.kt)("li",{parentName:"ul"},"es-EC \u897f\u73ed\u7259 -\u5384\u74dc\u591a\u5c14"),(0,i.kt)("li",{parentName:"ul"},"es-SV \u897f\u73ed\u7259 - \u8428\u5c14\u74e6\u591a"),(0,i.kt)("li",{parentName:"ul"},"es-GT \u897f\u73ed\u7259 -\u5371\u5730\u9a6c\u62c9"),(0,i.kt)("li",{parentName:"ul"},"es-HN \u897f\u73ed\u7259 -\u6d2a\u90fd\u62c9\u65af"),(0,i.kt)("li",{parentName:"ul"},"es-MX \u897f\u73ed\u7259 -\u58a8\u897f\u54e5"),(0,i.kt)("li",{parentName:"ul"},"es-NI \u897f\u73ed\u7259 -\u5c3c\u52a0\u62c9\u74dc"),(0,i.kt)("li",{parentName:"ul"},"es-PA \u897f\u73ed\u7259 -\u5df4\u62ff\u9a6c"),(0,i.kt)("li",{parentName:"ul"},"es-PY \u897f\u73ed\u7259 -\u5df4\u62c9\u572d"),(0,i.kt)("li",{parentName:"ul"},"es-PE \u897f\u73ed\u7259 -\u79d8\u9c81"),(0,i.kt)("li",{parentName:"ul"},"es-PR \u897f\u73ed\u7259 - \u6ce2\u591a\u9ece\u5404"),(0,i.kt)("li",{parentName:"ul"},"es-ES \u897f\u73ed\u7259 -\u897f\u73ed\u7259"),(0,i.kt)("li",{parentName:"ul"},"es-UY \u897f\u73ed\u7259 -\u4e4c\u62c9\u572d"),(0,i.kt)("li",{parentName:"ul"},"es-VE \u897f\u73ed\u7259 -\u59d4\u5185\u745e\u62c9"),(0,i.kt)("li",{parentName:"ul"},"sw Swahili"),(0,i.kt)("li",{parentName:"ul"},"sw-KE Swahili-\u80af\u5c3c\u4e9a"),(0,i.kt)("li",{parentName:"ul"},"sv \u745e\u5178"),(0,i.kt)("li",{parentName:"ul"},"sv-FI \u745e\u5178 -\u82ac\u5170"),(0,i.kt)("li",{parentName:"ul"},"sv-SE \u745e\u5178 -\u745e\u5178"),(0,i.kt)("li",{parentName:"ul"},"syr Syriac"),(0,i.kt)("li",{parentName:"ul"},"syr-SY Syriac-\u53d9\u5229\u4e9a\u5171\u548c\u56fd"),(0,i.kt)("li",{parentName:"ul"},"ta \u5766\u7c73\u5c14"),(0,i.kt)("li",{parentName:"ul"},"ta-IN \u5766\u7c73\u5c14 -\u5370\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"tt Tatar"),(0,i.kt)("li",{parentName:"ul"},"tt-RU Tatar-\u4fc4\u56fd"),(0,i.kt)("li",{parentName:"ul"},"te Telugu"),(0,i.kt)("li",{parentName:"ul"},"te-IN Telugu-\u5370\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"th \u6cf0\u56fd"),(0,i.kt)("li",{parentName:"ul"},"th-TH \u6cf0\u56fd -\u6cf0\u56fd"),(0,i.kt)("li",{parentName:"ul"},"tr \u571f\u8033\u5176\u8bed"),(0,i.kt)("li",{parentName:"ul"},"tr-TR \u571f\u8033\u5176\u8bed -\u571f\u8033\u5176"),(0,i.kt)("li",{parentName:"ul"},"uk \u4e4c\u514b\u5170"),(0,i.kt)("li",{parentName:"ul"},"uk-UA \u4e4c\u514b\u5170 -\u4e4c\u514b\u5170"),(0,i.kt)("li",{parentName:"ul"},"ur Urdu"),(0,i.kt)("li",{parentName:"ul"},"ur-PK Urdu-\u5df4\u57fa\u65af\u5766"),(0,i.kt)("li",{parentName:"ul"},"uz Uzbek"),(0,i.kt)("li",{parentName:"ul"},"uz-UZ-Cyrl Uzbek-(\u897f\u91cc\u5c14\u5b57\u6bcd\u7684) \u4e4c\u5179\u522b\u514b\u65af\u5766"),(0,i.kt)("li",{parentName:"ul"},"uz-UZ-Latn Uzbek(\u62c9\u4e01\u6587)- \u4e4c\u5179\u522b\u514b\u65af\u5766"),(0,i.kt)("li",{parentName:"ul"},"vi \u8d8a\u5357"),(0,i.kt)("li",{parentName:"ul"},"vi-VN \u8d8a\u5357 -\u8d8a\u5357")),(0,i.kt)("h2",{id:"2112-\u53cd\u9988\u4e0e\u5efa\u8bae"},"21.12 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"\u4e86\u89e3\u66f4\u591a",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u591a\u8bed\u8a00")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/localization?view=aspnetcore-5.0"},"ASP.NET Core - \u5168\u5c40\u5316\u548c\u672c\u5730\u5316")," \u7ae0\u8282\u3002")))}d.isMDXComponent=!0}}]);