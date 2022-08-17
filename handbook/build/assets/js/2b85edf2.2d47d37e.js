"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[8980],{433:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(7294),a=t(4334),o="tabItem_Ymn6";function i(n){var e=n.children,t=n.hidden,i=n.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},e)}},5559:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(3117),a=t(7294),o=t(4334),i=t(5730),l=t(636),s=t(6602),u=t(3735),c="tabList__CuJ",p="tabItem_LNqP";function m(n){var e,t,i=n.lazy,m=n.block,d=n.defaultValue,f=n.values,k=n.groupId,v=n.className,b=a.Children.map(n.children,(function(n){if((0,a.isValidElement)(n)&&"value"in n.props)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),y=(0,l.l)(g,(function(n,e){return n.value===e.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var C=null===d?d:null!=(e=null!=d?d:null==(t=b.find((function(n){return n.props.default})))?void 0:t.props.value)?e:b[0].props.value;if(null!==C&&!g.some((function(n){return n.value===C})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+g.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,s.U)(),N=h.tabGroupChoices,x=h.setTabGroupChoices,O=(0,a.useState)(C),w=O[0],T=O[1],S=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var U=N[k];null!=U&&U!==w&&g.some((function(n){return n.value===U}))&&T(U)}var D=function(n){var e=n.currentTarget,t=S.indexOf(e),r=g[t].value;r!==w&&(E(e),T(r),null!=k&&x(k,String(r)))},I=function(n){var e,t=null;switch(n.key){case"ArrowRight":var r,a=S.indexOf(n.currentTarget)+1;t=null!=(r=S[a])?r:S[0];break;case"ArrowLeft":var o,i=S.indexOf(n.currentTarget)-1;t=null!=(o=S[i])?o:S[S.length-1]}null==(e=t)||e.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},g.map((function(n){var e=n.value,t=n.label,i=n.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(n){return S.push(n)},onKeyDown:I,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===e})}),null!=t?t:e)}))),i?(0,a.cloneElement)(b.filter((function(n){return n.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(n,e){return(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==w})}))))}function d(n){var e=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(e)},n))}},5748:function(n,e,t){t.r(e),t.d(e,{assets:function(){return m},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=(t(1402),t(5559)),l=t(433),s=["components"],u={id:"tran",title:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",sidebar_label:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143 (UnitOfWork)"},c=void 0,p={unversionedId:"tran",id:"tran",title:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",description:"",source:"@site/docs/tran.mdx",sourceDirName:".",slug:"/tran",permalink:"/furion/docs/tran",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/tran.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1660633322,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{id:"tran",title:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",sidebar_label:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143 (UnitOfWork)"},sidebar:"docs",previous:{title:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",permalink:"/furion/docs/dbcontext-entitytrigger"},next:{title:"9.27 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",permalink:"/furion/docs/dbcontext-read-write"}},m={},d=[{value:"9.26.1 \u4e8b\u52a1",id:"9261-\u4e8b\u52a1",level:2},{value:"9.26.2 \u5de5\u4f5c\u5355\u5143",id:"9262-\u5de5\u4f5c\u5355\u5143",level:2},{value:"9.26.3 \u5982\u4f55\u4f7f\u7528",id:"9263-\u5982\u4f55\u4f7f\u7528",level:2},{value:"9.26.3.1 \u81ea\u52a8\u7ba1\u7406",id:"92631-\u81ea\u52a8\u7ba1\u7406",level:3},{value:"9.26.3.2 <code>EnsureTransaction()</code> \u65b9\u6cd5 \u2728",id:"92632-ensuretransaction-\u65b9\u6cd5-",level:3},{value:"9.26.3.2 \u624b\u52a8\u7ba1\u7406",id:"92632-\u624b\u52a8\u7ba1\u7406",level:3},{value:"9.26.4 \u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e",id:"9264-\u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e",level:2},{value:"9.26.4.1 <code>[UnitOfWork]</code> \u7279\u6027",id:"92641-unitofwork-\u7279\u6027",level:3},{value:"9.26.4.2 <code>[ManualCommit]</code> \u7279\u6027",id:"92642-manualcommit-\u7279\u6027",level:3},{value:"9.26.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9265-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],f={toc:d};function k(n){var e=n.components,t=(0,a.Z)(n,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"9261-\u4e8b\u52a1"},"9.26.1 \u4e8b\u52a1"),(0,o.kt)("p",null,"\u4e8b\u52a1\u6307\u4f5c\u4e3a\u5355\u4e2a\u903b\u8f91\u5de5\u4f5c\u5355\u5143\u6267\u884c\u7684\u4e00\u7cfb\u5217\u64cd\u4f5c\uff0c\u8981\u4e48",(0,o.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u5730\u6267\u884c\uff0c\u8981\u4e48\u5b8c\u5168\u5730\u4e0d\u6267\u884c"),"\u3002"),(0,o.kt)("p",null,"\u7b80\u5355\u7684\u8bf4\uff0c\u4e8b\u52a1\u5c31\u662f\u5e76\u53d1\u63a7\u5236\u7684\u5355\u4f4d\uff0c\u662f\u7528\u6237\u5b9a\u4e49\u7684\u4e00\u4e2a\u64cd\u4f5c\u5e8f\u5217\u3002 \u800c\u4e00\u4e2a\u903b\u8f91\u5de5\u4f5c\u5355\u5143\u8981\u6210\u4e3a\u4e8b\u52a1\uff0c\u5c31\u5fc5\u987b\u6ee1\u8db3 ",(0,o.kt)("inlineCode",{parentName:"p"},"ACID")," \u5c5e\u6027\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"A"),"\uff1a\u539f\u5b50\u6027\uff08Atomicity\uff09\uff1a\u4e8b\u52a1\u4e2d\u7684\u64cd\u4f5c\u8981\u4e48\u90fd\u4e0d\u505a\uff0c\u8981\u4e48\u5c31\u5168\u505a"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"C"),"\uff1a\u4e00\u81f4\u6027\uff08Consistency\uff09\uff1a\u4e8b\u52a1\u6267\u884c\u7684\u7ed3\u679c\u5fc5\u987b\u662f\u4ece\u6570\u636e\u5e93\u4ece\u4e00\u4e2a\u4e00\u81f4\u6027\u72b6\u6001\u8f6c\u6362\u5230\u53e6\u4e00\u4e2a\u4e00\u81f4\u6027\u72b6\u6001"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"I"),"\uff1a\u9694\u79bb\u6027\uff08Isolation\uff09\uff1a\u4e00\u4e2a\u4e8b\u52a1\u7684\u6267\u884c\u4e0d\u80fd\u88ab\u5176\u4ed6\u4e8b\u52a1\u5e72\u6270"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"D"),"\uff1a\u6301\u4e45\u6027\uff08Durability\uff09\uff1a\u4e00\u4e2a\u4e8b\u52a1\u4e00\u65e6\u63d0\u4ea4\uff0c\u5b83\u5bf9\u6570\u636e\u5e93\u4e2d\u6570\u636e\u7684\u6539\u53d8\u5c31\u5e94\u8be5\u662f\u6c38\u4e45\u6027\u7684")),(0,o.kt)("h2",{id:"9262-\u5de5\u4f5c\u5355\u5143"},"9.26.2 \u5de5\u4f5c\u5355\u5143"),(0,o.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u4e3a\u4e86\u4fdd\u8bc1\u4e00\u6b21\u5b8c\u6574\u7684\u529f\u80fd\u64cd\u4f5c\u6240\u4ea7\u751f\u7684\u4e00\u4e9b\u5217\u63d0\u4ea4\u6570\u636e\u7684\u5b8c\u6574\u6027\uff0c\u8d77\u7740\u4e8b\u52a1\u7684\u4f5c\u7528\u3002\u5728\u8ba1\u7b97\u673a\u9886\u57df\u4e2d\uff0c\u5de5\u4f5c\u5355\u5143\u901a\u5e38\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"UnitOfWork")," \u540d\u79f0\u8868\u793a\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u4fdd\u8bc1\u7528\u6237\u7684\u6bcf\u4e00\u6b21\u8bf7\u6c42\u90fd\u662f\u5904\u4e8e\u5728\u4e00\u4e2a\u529f\u80fd\u5355\u5143\u4e2d\uff0c\u4e5f\u5c31\u662f\u5de5\u4f5c\u5355\u5143\u3002"),(0,o.kt)("h2",{id:"9263-\u5982\u4f55\u4f7f\u7528"},"9.26.3 \u5982\u4f55\u4f7f\u7528"),(0,o.kt)("h3",{id:"92631-\u81ea\u52a8\u7ba1\u7406"},"9.26.3.1 \u81ea\u52a8\u7ba1\u7406"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u63a7\u5236\u5668 Action \u4e2d\u8d34 ",(0,o.kt)("inlineCode",{parentName:"p"},"[UnitOfWork]")," \u7279\u6027\u5373\u53ef\u5f00\u542f\u5de5\u4f5c\u5355\u5143\u6a21\u5f0f\uff0c\u4fdd\u8bc1\u4e86\u6bcf\u4e00\u6b21\u8bf7\u6c42\u90fd\u662f\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5de5\u4f5c\u5355\u5143"),"\uff0c\u8981\u4e48\u540c\u65f6\u6210\u529f\uff0c\u8981\u4e48\u540c\u65f6\u5931\u8d25\u3002"),(0,o.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion 3.7.3 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,o.kt)("p",null,"\u5982\u4f7f\u7528\u975e ",(0,o.kt)("inlineCode",{parentName:"p"},"EFCore")," ORM \u6846\u67b6\uff0c\u53ef\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"IUnitOfWork")," \u63a5\u53e3\u4e4b\u540e\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"services.AddUnitOfWork<TUnitOfWork>()")," \u6ce8\u518c\u5373\u53ef\uff0c\u5982\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {8,30,41,52,63}",showLineNumbers:!0,"{8,30,41,52,63}":!0},'using Microsoft.AspNetCore.Mvc.Filters;\n\nnamespace Furion.DatabaseAccessor;\n\n/// <summary>\n/// SqlSugar \u5de5\u4f5c\u5355\u5143\u5b9e\u73b0\n/// </summary>\npublic sealed class SqlSugarUnitOfWork : IUnitOfWork\n{\n    /// <summary>\n    /// SqlSugar \u5bf9\u8c61\n    /// </summary>\n    private readonly ISqlSugarClient _sqlSugarClient;\n\n    /// <summary>\n    /// \u6784\u9020\u51fd\u6570\n    /// </summary>\n    /// <param name="sqlSugarClient"></param>\n    public SqlSugarUnitOfWork(ISqlSugarClient sqlSugarClient)\n    {\n        _sqlSugarClient = sqlSugarClient;\n    }\n\n    /// <summary>\n    /// \u5f00\u542f\u5de5\u4f5c\u5355\u5143\u5904\u7406\n    /// </summary>\n    /// <param name="context"></param>\n    /// <param name="unitOfWork"></param>\n    /// <exception cref="NotImplementedException"></exception>\n    public void BeginTransaction(FilterContext context, UnitOfWorkAttribute unitOfWork)\n    {\n        _sqlSugarClient.AsTenant().BeginTran();\n    }\n\n    /// <summary>\n    /// \u63d0\u4ea4\u5de5\u4f5c\u5355\u5143\u5904\u7406\n    /// </summary>\n    /// <param name="resultContext"></param>\n    /// <param name="unitOfWork"></param>\n    /// <exception cref="NotImplementedException"></exception>\n    public void CommitTransaction(FilterContext resultContext, UnitOfWorkAttribute unitOfWork)\n    {\n        _sqlSugarClient.AsTenant().CommitTran();\n    }\n\n    /// <summary>\n    /// \u56de\u6eda\u5de5\u4f5c\u5355\u5143\u5904\u7406\n    /// </summary>\n    /// <param name="resultContext"></param>\n    /// <param name="unitOfWork"></param>\n    /// <exception cref="NotImplementedException"></exception>\n    public void RollbackTransaction(FilterContext resultContext, UnitOfWorkAttribute unitOfWork)\n    {\n        _sqlSugarClient.AsTenant().RollbackTran();\n    }\n\n    /// <summary>\n    /// \u6267\u884c\u5b8c\u6bd5\uff08\u65e0\u8bba\u6210\u529f\u5931\u8d25\uff09\n    /// </summary>\n    /// <param name="context"></param>\n    /// <param name="resultContext"></param>\n    /// <exception cref="NotImplementedException"></exception>\n    public void OnCompleted(FilterContext context, FilterContext resultContext)\n    {\n        _sqlSugarClient.Dispose();\n    }\n}\n')),(0,o.kt)("p",null,"\u4e4b\u540e\u6ce8\u518c\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddUnitOfWork<SqlSugarUnitOfWork>();\n")),(0,o.kt)("h3",{id:"92632-ensuretransaction-\u65b9\u6cd5-"},"9.26.3.2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"EnsureTransaction()")," \u65b9\u6cd5 \u2728"),(0,o.kt)("p",null,"\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u901a\u8fc7\u9759\u6001\u7c7b\u6216\u8005\u5176\u4ed6\u65b9\u5f0f\u4e0d\u5c0f\u5fc3\u521b\u5efa\u4e86\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"DbContext")," \u5b9e\u4f8b\uff0c\u8fd9\u65f6\u5019\u8d34\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"[UnitOfWork]")," \u4e5f\u4e0d\u89c1\u8d77\u6548\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u6765\u786e\u8ba4\u4e8b\u52a1\u662f\u5426\u6709\u6548\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"repository.EnsureTransaction();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u4e0d\u559c\u6b22\u624b\u52a8\u65b9\u5f0f\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"strong"},"[UnitOfWork(true)]")," \u5f00\u542f\u6b64\u529f\u80fd\u3002")),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u5c06\u5f53\u524d\u4ed3\u50a8\u6dfb\u52a0\u5230\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u6c60\u4e2d\uff0c\u5e76\u786e\u4fdd\u4e8b\u52a1\u53ef\u7528\u3002"),(0,o.kt)("h3",{id:"92632-\u624b\u52a8\u7ba1\u7406"},"9.26.3.2 \u624b\u52a8\u7ba1\u7406"),(0,o.kt)(i.Z,{defaultValue:"one",values:[{label:"\u793a\u4f8b\u4e00",value:"one"},{label:"\u793a\u4f8b\u4e8c",value:"two"},{label:"\u793a\u4f8b\u4e09\uff08\u5206\u5e03\u5f0f\uff09",value:"three"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"one",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u5f00\u542f\u4e8b\u52a1\nusing (var transaction = _testRepository.Database.BeginTransaction())\n{\n    try\n    {\n        _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n        _testRepository.SaveNow();\n\n        _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/visualstudio" });\n        _testRepository.SaveNow();\n\n        var blogs = _testRepository.Entity\n                .OrderBy(b => b.Url)\n                .ToList();\n\n        // \u63d0\u4ea4\u4e8b\u52a1\n        transaction.Commit();\n     }\n     catch (Exception)\n     {\n        // \u56de\u6eda\u4e8b\u52a1\n        // transaction.RollBack(); // \u65b0\u7248\u672c\u81ea\u52a8\u56de\u6eda\u4e86\n     }\n}\n'))),(0,o.kt)(l.Z,{value:"two",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var options = new DbContextOptionsBuilder<DefaultDbContext>()\n    .UseSqlServer(new SqlConnection(connectionString))\n    .Options;\n\n// \u521b\u5efa\u8fde\u63a5\u5b57\u7b26\u4e32\nusing (var context1 = new DefaultDbContext(options))\n{\n    // \u5f00\u542f\u4e8b\u52a1\n    using (var transaction = context1.Database.BeginTransaction())\n    {\n        try\n        {\n            _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n            _testRepository.SaveNow();\n\n            context1.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n            context1.SaveChanges();\n\n            // \u521b\u5efa\u65b0\u7684\u8fde\u63a5\u5bf9\u8c61\n            using (var context2 = new DefaultDbContext(options))\n            {\n                // \u5171\u4eab\u8fde\u63a5\u4e8b\u52a1\n                context2.Database.UseTransaction(transaction.GetDbTransaction());\n\n                var blogs = context2.Blogs\n                    .OrderBy(b => b.Url)\n                    .ToList();\n            }\n\n            // \u63d0\u4ea4\u4e8b\u52a1\n            transaction.Commit();\n        }\n        catch (Exception)\n        {\n            // \u56de\u6eda\u4e8b\u52a1\n            // transaction.RollBack(); // \u65b0\u7248\u672c\u81ea\u52a8\u56de\u6eda\u4e86\n        }\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"three",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1-3}",showLineNumbers:!0,"":!0,"{1-3}":!0},'// \u5f00\u542f\u5206\u5e03\u5f0f\u4e8b\u52a1\n// \u5982\u679c\u4e8b\u52a1\u5305\u88f9\u7684\u4ee3\u7801\u4e2d\u5305\u542b\u5f02\u6b65 async/await\uff0c\u90a3\u4e48\u9700\u8981\u8bbe\u7f6e TransactionScopeAsyncFlowOption.Enabled = true\nusing (var scope = new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted }))\n{\n    using (var connection = new SqlConnection(connectionString))\n    {\n        connection.Open();\n\n        try\n        {\n            // \u8fd9\u91cc\u662f Ado.NET \u64cd\u4f5c\n            var command = connection.CreateCommand();\n            command.CommandText = "DELETE FROM dbo.Blogs";\n            command.ExecuteNonQuery();\n\n            // \u521b\u5efaEF Core \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\n            var options = new DbContextOptionsBuilder<BloggingContext>()\n                .UseSqlServer(connection)\n                .Options;\n            using (var context = new BloggingContext(options))\n            {\n                context.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n                context.SaveChanges();\n            }\n\n            // \u6846\u67b6\u5c01\u88c5\u7684\u4ed3\u50a8\n            _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n            _testRepository.SaveChanges();\n\n           // \u63d0\u4ea4\u4e8b\u52a1\n            scope.Complete();\n        }\n        catch (System.Exception)\n        {\n            // \u81ea\u52a8\u56de\u6eda\n        }\n    }\n}\n')))),(0,o.kt)("h2",{id:"9264-\u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e"},"9.26.4 \u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e"),(0,o.kt)("h3",{id:"92641-unitofwork-\u7279\u6027"},"9.26.4.1 ",(0,o.kt)("inlineCode",{parentName:"h3"},"[UnitOfWork]")," \u7279\u6027"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"[UnitOfWork]")," \u7279\u6027\u53ea\u80fd\u7528\u4e8e\u63a7\u5236\u5668\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Action")," \u4e2d\uff0c\u4e00\u65e6\u8d34\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"[UnitOfWork]")," \u7279\u6027\u540e\uff0c\u90a3\u4e48\u8be5\u8bf7\u6c42\u81ea\u52a8\u542f\u7528\u5de5\u4f5c\u5355\u5143\u6a21\u5f0f\uff0c\u8981\u4e48\u6210\u529f\uff0c\u8981\u4e48\u5931\u8d25\u3002"),(0,o.kt)("h3",{id:"92642-manualcommit-\u7279\u6027"},"9.26.4.2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"[ManualCommit]")," \u7279\u6027"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4f1a\u5728\u4e00\u6b21\u6210\u529f\u8bf7\u6c42\u4e4b\u540e\u81ea\u52a8\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveChanges()")," \u65b9\u6cd5\uff0c\u5982\u679c\u9009\u62e9\u624b\u52a8\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveChanges()")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u63a7\u5236\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"Action")," \u4e2d\u8d34 ",(0,o.kt)("inlineCode",{parentName:"p"},"[ManualCommit]")," \u7279\u6027\u5373\u53ef\u3002"),(0,o.kt)("h2",{id:"9265-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.26.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"\u4e86\u89e3\u66f4\u591a",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e8b\u52a1")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/ef/core/saving/transactions"},"EF Core - \u4f7f\u7528\u4e8b\u52a1")," \u7ae0\u8282\u3002")))}k.isMDXComponent=!0},3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:e},c),{},{components:t})):r.createElement(f,i({ref:e},c))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);