(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(199)),o={id:"dbcontext-audit",title:"9.22 \u5ba1\u8ba1\u65e5\u5fd7",sidebar_label:"9.22 \u5ba1\u8ba1\u65e5\u5fd7"},c={unversionedId:"dbcontext-audit",id:"dbcontext-audit",isDocsHomePage:!1,title:"9.22 \u5ba1\u8ba1\u65e5\u5fd7",description:"9.22.1 \u5ba1\u8ba1\u65e5\u5fd7",source:"@site/docs\\dbcontext-audit.mdx",slug:"/dbcontext-audit",permalink:"/docs/dbcontext-audit",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/dbcontext-audit.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1614238444,sidebar_label:"9.22 \u5ba1\u8ba1\u65e5\u5fd7",sidebar:"docs",previous:{title:"9.21 \u5b9e\u4f53\u79cd\u5b50\u6570\u636e",permalink:"/docs/dbcontext-seed-data"},next:{title:"9.23 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",permalink:"/docs/dbcontext-filter"}},s=[{value:"9.22.1 \u5ba1\u8ba1\u65e5\u5fd7",id:"9221-\u5ba1\u8ba1\u65e5\u5fd7",children:[]},{value:"9.22.2 \u5173\u4e8e <code>SaveChanges</code> \u4e8b\u4ef6",id:"9222-\u5173\u4e8e-savechanges-\u4e8b\u4ef6",children:[]},{value:"9.22.3 \u5982\u4f55\u5b9e\u73b0",id:"9223-\u5982\u4f55\u5b9e\u73b0",children:[{value:"9.22.3.1 \u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7",id:"92231-\u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7",children:[]},{value:"9.22.3.2 \u6267\u884c <code>sql</code> \u5ba1\u8ba1\u65e5\u5fd7",id:"92232-\u6267\u884c-sql-\u5ba1\u8ba1\u65e5\u5fd7",children:[]},{value:"9.22.3.3 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",id:"92233-\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",children:[]}]},{value:"9.22.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9224-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={toc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"9221-\u5ba1\u8ba1\u65e5\u5fd7"},"9.22.1 \u5ba1\u8ba1\u65e5\u5fd7"),Object(i.b)("p",null,"\u5728\u4e00\u4e2a\u4f01\u4e1a\u5e94\u7528\u7cfb\u7edf\u4e2d\uff0c\u7528\u6237\u5bf9\u7cfb\u7edf\u6240\u6709\u7684\u64cd\u4f5c\u5305\u62ec\u8bf7\u6c42\u3001\u6570\u636e\u5e93\u64cd\u4f5c\u7b49\u7b49\u90fd\u5e94\u8be5\u8bb0\u5f55\u8d77\u6765\uff0c\u90a3\u4e48\u8fd9\u4e9b\u65e5\u5fd7\u6211\u4eec\u79f0\u4e3a\u64cd\u4f5c\u65e5\u5fd7\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u5ba1\u8ba1\u65e5\u5fd7\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u901a\u5e38\u6765\u8bf4\uff0c\u6211\u4eec\u5ba1\u8ba1\u65e5\u5fd7\u66f4\u591a\u6307\u7684\u662f\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u8bb0\u5f55"),"\u3002"),Object(i.b)("p",null,"\u5ba1\u8ba1\u65e5\u5fd7\u4e00\u822c\u4f1a\u8bb0\u5f55\u4ee5\u4e0b\u4e09\u4e2a\u64cd\u4f5c\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u65b0\u589e\u64cd\u4f5c"),"\uff1a\u8bb0\u5f55\u67d0\u67d0\u4eba\u5728\u67d0\u67d0\u65f6\u95f4\u5bf9\u54ea\u4e2a\u8868\u65b0\u589e\u4e86\u4ec0\u4e48\u6570\u636e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u66f4\u65b0\u64cd\u4f5c"),"\uff1a\u8bb0\u5f55\u67d0\u67d0\u4eba\u5728\u67d0\u67d0\u65f6\u95f4\u5bf9\u54ea\u4e2a\u8868\u7684\u54ea\u4e9b\u6570\u636e\u505a\u4e86\u66f4\u6539\uff0c\u8bb0\u5f55\u66f4\u6539\u524d\u7684\u503c\u548c\u66f4\u6539\u540e\u7684\u503c"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u5220\u9664\u64cd\u4f5c"),"\uff1a\u8bb0\u5f55\u67d0\u67d0\u4eba\u5728\u67d0\u67d0\u65f6\u95f4\u5bf9\u54ea\u4e2a\u8868\u5220\u9664\u4e86\u4ec0\u4e48\u6570\u636e")),Object(i.b)("h2",{id:"9222-\u5173\u4e8e-savechanges-\u4e8b\u4ef6"},"9.22.2 \u5173\u4e8e ",Object(i.b)("inlineCode",{parentName:"h2"},"SaveChanges")," \u4e8b\u4ef6"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u4e3a\u6240\u6709 ",Object(i.b)("inlineCode",{parentName:"p"},"AppDbContext")," \u5b50\u7c7b\u90fd\u63d0\u4f9b\u4e86\u4e09\u4e2a\u53ef\u91cd\u5199\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u5206\u522b\u7531\u4e09\u4e2a\u4e8b\u4ef6\u89e6\u53d1\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u4e4b\u524d SavingChanges \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",Object(i.b)("inlineCode",{parentName:"li"},"void SavingChangesEvent(DbContextEventData eventData, InterceptionResult<int> result)")," \u65b9\u6cd5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u4e4b\u540e SavedChanges \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",Object(i.b)("inlineCode",{parentName:"li"},"void SavedChangesEvent(SaveChangesCompletedEventData eventData, int result)")," \u65b9\u6cd5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u5931\u8d25 SaveChangesFailed \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",Object(i.b)("inlineCode",{parentName:"li"},"void SaveChangesFailedEvent(DbContextErrorEventData eventData)")," \u65b9\u6cd5")),Object(i.b)("p",null,"\u901a\u8fc7\u8fd9\u4e09\u4e2a\u4e8b\u4ef6\u6211\u4eec\u5c31\u53ef\u4ee5\u6355\u83b7\u6240\u6709\u66f4\u6539\u7684\u5b9e\u4f53\u7136\u540e\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u3002"),Object(i.b)("h2",{id:"9223-\u5982\u4f55\u5b9e\u73b0"},"9.22.3 \u5982\u4f55\u5b9e\u73b0"),Object(i.b)("h3",{id:"92231-\u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7"},"9.22.3.1 \u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7"),Object(i.b)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"AppDbContext")," \u5b50\u7c7b\u4e2d\u91cd\u5199 ",Object(i.b)("inlineCode",{parentName:"p"},"SavingChanges")," \u4e8b\u4ef6\u5bf9\u5e94\u65b9\u6cd5\u5373\u53ef\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{23}","{23}":!0}),'using Furion.DatabaseAccessor;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Infrastructure;\nusing System;\nusing System.Linq;\nusing System.Security.AccessControl;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class FurionDbContext : AppDbContext<FurionDbContext>\n    {\n        public FurionDbContext(DbContextOptions<FurionDbContext> options) : base(options)\n        {\n        }\n\n        /// <summary>\n        /// \u91cd\u5199\u4fdd\u5b58\u4e4b\u524d\u4e8b\u4ef6\n        /// </summary>\n        /// <param name="sender"></param>\n        /// <param name="e"></param>\n        protected override void SavingChangesEvent(DbContextEventData eventData, InterceptionResult<int> result)\n        {\n            // \u83b7\u53d6\u5f53\u524d\u4e8b\u4ef6\u5bf9\u5e94\u4e0a\u4e0b\u6587\n            var dbContext = eventData.Context;\n\n            // \u5f3a\u5236\u91cd\u65b0\u68c0\u67e5\u4e00\u8fb9\u5b9e\u4f53\u66f4\u6539\u4fe1\u606f\n            // dbContext.ChangeTracker.DetectChanges();\n\n            // \u83b7\u53d6\u6240\u6709\u66f4\u6539\uff0c\u5220\u9664\uff0c\u65b0\u589e\u7684\u5b9e\u4f53\uff0c\u4f46\u6392\u9664\u5ba1\u8ba1\u5b9e\u4f53\uff08\u907f\u514d\u6b7b\u5faa\u73af\uff09\n            var entities = dbContext.ChangeTracker.Entries()\n                .Where(u => u.Entity.GetType() != typeof(Audit) && (u.State == EntityState.Modified || u.State == EntityState.Deleted || u.State == EntityState.Added))\n                .ToList();\n\n            // \u901a\u8fc7\u8bf7\u6c42\u4e2d\u83b7\u53d6\u5f53\u524d\u64cd\u4f5c\u4eba\n            var userId = App.GetService<IHttpContextAccessor>().HttpContext.Items["UserId"];\n\n            // \u83b7\u53d6\u6240\u6709\u5df2\u66f4\u6539\u7684\u5b9e\u4f53\n            foreach (var entity in entities)\n            {\n                // \u83b7\u53d6\u5b9e\u4f53\u7c7b\u578b\n                var entityType = entity.Entity.GetType();\n\n                // \u83b7\u53d6\u6240\u6709\u5b9e\u4f53\u6709\u6548\u5c5e\u6027\uff0c\u6392\u9664 [NotMapper] \u5c5e\u6027\n                var props = entity.OriginalValues.Properties;\n\n                // \u83b7\u53d6\u5b9e\u4f53\u5f53\u524d\uff08\u73b0\u5728\uff09\u7684\u503c\n                var currentValues = entity.CurrentValues;\n\n                // \u83b7\u53d6\u6570\u636e\u5e93\u4e2d\u5b9e\u4f53\u7684\u503c\n                var databaseValues = entity.GetDatabaseValues();\n\n                // \u904d\u5386\u6240\u6709\u5c5e\u6027\n                foreach (var prop in props)\n                {\n                    // \u83b7\u53d6\u5c5e\u6027\u540d\n                    var propName = prop.Name;\n\n                    // \u83b7\u53d6\u73b0\u5728\u7684\u5b9e\u4f53\u503c\n                    var newValue = currentValues[propName];\n\n                    object oldValue = null;\n                    // \u5982\u679c\u662f\u65b0\u589e\u6570\u636e\uff0c\u5219 databaseValues \u4e3a\u7a7a\uff0c\u6240\u4ee5\u9700\u8981\u5224\u65ad\u4e00\u4e0b\n                    if (databaseValues != null)\n                    {\n                        oldValue = databaseValues[propName];\n                    }\n\n                    // \u63d2\u5165\u5ba1\u8ba1\u65e5\u5fd7\u8868\uff0cAudit \u662f\u4f60\u81ea\u5b9a\u4e49\u7684\u5b9e\u4f53\n                    dbContext.Set<Audit>().Add(new Audit\n                    {\n                        Table = entityType.Name,    // \u8868\u540d\n                        Column = propName,  // \u66f4\u65b0\u7684\u5217\n                        NewValue = newValue,    // \u65b0\u503c\n                        OldValue = oldValue,    // \u65e7\u503c\n                        CreatedTime = DateTime.Now, // \u64cd\u4f5c\u65f6\u95f4\n                        UserId = userId,    // \u64cd\u4f5c\u4eba\n                        Operate = entity.State.ToString();  // \u64cd\u4f5c\u65b9\u5f0f\uff1a\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\n                    });\n                }\n            }\n        }\n    }\n}\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u77e5\u8bc6")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5982\u679c\u5bf9\u6027\u80fd\u6709\u6240\u8981\u6c42\uff0c\u90a3\u4e48\u5efa\u8bae\u5ba1\u8ba1\u65e5\u5fd7\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u7ec4\u4ef6")," \u5199\u5165\u6570\u636e\u5e93\uff0c\u5982\uff0c\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"Nlog\u3001Log4Net")," \u8fd9\u4e9b\u7b49\uff1a"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u63d2\u5165\u5ba1\u8ba1\u65e5\u5fd7\u8868\ndbContext.Set<Audit>().Add(new Audit\n{\n    Table = entityType.Name,    // \u8868\u540d\n    Column = propName,  // \u66f4\u65b0\u7684\u5217\n    newValue = newValue,    // \u65b0\u503c\n    OldValue = oldValue,    // \u65e7\u503c\n    CreatedTime = DateTime.Now, // \u64cd\u4f5c\u65f6\u95f4\n    UserId = userId,    // \u64cd\u4f5c\u4eba\n    Operate = entity.State.ToString();  // \u64cd\u4f5c\u65b9\u5f0f\uff1a\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\n});\n")),Object(i.b)("p",{parentName:"div"},"\u66ff\u6362\u4e3a\uff1a"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"logger.Information(JsonConvert.SerializeObject(new Audit\n{\n    Table = entityType.Name,    // \u8868\u540d\n    Column = propName,  // \u66f4\u65b0\u7684\u5217\n    newValue = newValue,    // \u65b0\u503c\n    OldValue = oldValue,    // \u65e7\u503c\n    CreatedTime = DateTime.Now, // \u64cd\u4f5c\u65f6\u95f4\n    UserId = userId,    // \u64cd\u4f5c\u4eba\n    Operate = entity.State.ToString();  // \u64cd\u4f5c\u65b9\u5f0f\uff1a\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\n}));\n")))),Object(i.b)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5bf9\u6570\u636e\u5e93\u6240\u6709\u7684\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\u8fdb\u884c\u76d1\u63a7\u4e86\u3002"),Object(i.b)("h3",{id:"92232-\u6267\u884c-sql-\u5ba1\u8ba1\u65e5\u5fd7"},"9.22.3.2 \u6267\u884c ",Object(i.b)("inlineCode",{parentName:"h3"},"sql")," \u5ba1\u8ba1\u65e5\u5fd7"),Object(i.b)("p",null,"\u4e3b\u8981\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"DbCommandInterceptor")," \u62e6\u622a\u5b9e\u73b0\uff0c\u5177\u4f53\u4f7f\u7528\u53ef\u67e5\u770b ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./dbcontext-Interceptor#92422-dbcommandinterceptor"}),"\u6570\u636e\u5e93\u62e6\u622a\u5668 - DbCommandInterceptor"),"\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{11}","{11}":!0}),"using Microsoft.EntityFrameworkCore.Diagnostics;\nusing System.Data.Common;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace Furion.Web.Core\n{\n    /// <summary>\n    /// \u6267\u884c sql \u5ba1\u8ba1\n    /// </summary>\n    public sealed class SqlCommandAuditInterceptor : DbCommandInterceptor\n    {\n        public override InterceptionResult<int> NonQueryExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<int> result)\n        {\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u8bed\u53e5\n            var sql = command.CommandText;\n\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u7c7b\u578b\uff0c\u662f sql \u8bed\u53e5\uff0c\u8fd8\u662f\u5b58\u50a8\u8fc7\u7a0b\uff0c\u8fd8\u662f\u5176\u4ed6\n            var type = command.CommandType;\n\n            // \u83b7\u53d6 sql \u4f20\u9012\u7684\u547d\u4ee4\u53c2\u6570\n            var parameters = command.Parameters;\n\n            // \u5199\u65e5\u5fd7~~~~\n\n            return base.NonQueryExecuting(command, eventData, result);\n        }\n\n        public override ValueTask<InterceptionResult<int>> NonQueryExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)\n        {\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u8bed\u53e5\n            var sql = command.CommandText;\n\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u7c7b\u578b\uff0c\u662f sql \u8bed\u53e5\uff0c\u8fd8\u662f\u5b58\u50a8\u8fc7\u7a0b\uff0c\u8fd8\u662f\u5176\u4ed6\n            var type = command.CommandType;\n\n            // \u83b7\u53d6 sql \u4f20\u9012\u7684\u547d\u4ee4\u53c2\u6570\n            var parameters = command.Parameters;\n\n            // \u5199\u65e5\u5fd7~~~~\n\n            return base.NonQueryExecutingAsync(command, eventData, result, cancellationToken);\n        }\n\n        // \u5176\u4ed6 override\n    }\n}\n")),Object(i.b)("h3",{id:"92233-\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7"},"9.22.3.3 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7"),Object(i.b)("p",null,"\u9664\u4e86\u4e0a\u9762\u7684\u6570\u636e\u5e93\u589e\u5220\u6539\u5ba1\u8ba1\u65e5\u5fd7\u4ee5\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u4e5f\u5c31\u662f\u8bb0\u5f55\u8bf7\u6c42\u5730\u5740\uff0c\u6765\u6e90\u5730\u5740\uff0c\u64cd\u4f5c\u4eba\uff0c\u4f20\u9012\u53c2\u6570\u7b49\u3002\u8fd9\u4e2a\u4e3b\u8981\u662f\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"IAsyncActionFilter")," \u7b5b\u9009\u5668\u5b9e\u73b0\uff0c\u5982\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u5b9a\u4e49 ",Object(i.b)("inlineCode",{parentName:"li"},"RequestAuditFilter")," \u5e76\u5b9e\u73b0 ",Object(i.b)("inlineCode",{parentName:"li"},"IAsyncActionFilter"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{9,45}","{9,45}":!0}),'using Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc.Filters;\nusing System;\nusing System.Security.Claims;\nusing System.Threading.Tasks;\n\nnamespace Furion.Web.Core\n{\n    public class RequestAuditFilter : IAsyncActionFilter\n    {\n        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)\n        {\n            //============== \u8fd9\u91cc\u662f\u6267\u884c\u65b9\u6cd5\u4e4b\u524d\u83b7\u53d6\u6570\u636e ====================\n\n            // \u83b7\u53d6\u63a7\u5236\u5668\u3001\u8def\u7531\u4fe1\u606f\n            var actionDescriptor = context.ActionDescriptor as ControllerActionDescriptor;\n\n            // \u83b7\u53d6\u8bf7\u6c42\u7684\u65b9\u6cd5\n            var method = actionDescriptor.MethodInfo;\n\n            // \u83b7\u53d6 HttpContext \u548c HttpRequest \u5bf9\u8c61\n            var httpContext = context.HttpContext;\n            var httpRequest = httpContext.Request;\n\n            // \u83b7\u53d6\u5ba2\u6237\u7aef Ipv4 \u5730\u5740\n            var remoteIPv4 = httpContext.GetRemoteIpAddressToIPv4();\n\n            // \u83b7\u53d6\u8bf7\u6c42\u7684 Url \u5730\u5740\n            var requestUrl = httpRequest.GetRequestUrlAddress();\n\n            // \u83b7\u53d6\u6765\u6e90 Url \u5730\u5740\n            var refererUrl = httpRequest.GetRefererUrlAddress();\n\n            // \u83b7\u53d6\u8bf7\u6c42\u53c2\u6570\uff08\u5199\u5165\u65e5\u5fd7\uff0c\u9700\u5e8f\u5217\u5316\u6210\u5b57\u7b26\u4e32\u540e\u5b58\u50a8\uff09\n            var parameters = context.ActionArguments;\n\n            // \u83b7\u53d6\u64cd\u4f5c\u4eba\uff08\u5fc5\u987b\u6388\u6743\u8bbf\u95ee\u624d\u6709\u503c\uff09"userId" \u4e3a\u4f60\u5b58\u50a8\u7684 claims type\uff0cjwt \u6388\u6743\u5bf9\u5e94\u7684\u662f payload \u4e2d\u5b58\u50a8\u7684\u952e\u540d\n            var userId = httpContext.User?.FindFirstValue("userId");\n\n            // \u8bf7\u6c42\u65f6\u95f4\n            var requestedTime = DateTimeOffset.Now;\n\n\n            //============== \u8fd9\u91cc\u662f\u6267\u884c\u65b9\u6cd5\u4e4b\u540e\u83b7\u53d6\u6570\u636e ====================\n            var actionContext = await next();\n\n\n            // \u5224\u65ad\u662f\u5426\u8bf7\u6c42\u6210\u529f\uff0c\u6ca1\u6709\u5f02\u5e38\u5c31\u662f\u8bf7\u6c42\u6210\u529f\n            var isRequestSucceed = actionContext.Exception == null;\n\n            // \u8fd9\u91cc\u5199\u5165\u65e5\u5fd7~~~~~~~~~~~~~~~~~~~~\n        }\n    }\n}\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"\u6ce8\u518c ",Object(i.b)("inlineCode",{parentName:"li"},"RequestAuditFilter")," \u7b5b\u9009\u5668")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"services.AddMvcFilter<RequestAuditFilter>();\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5173\u4e8e\u7b5b\u9009\u5668\u6ce8\u518c\u987a\u5e8f")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u901a\u5e38\u5148\u6ce8\u518c\u7684\u4f1a\u5148\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 ",Object(i.b)("inlineCode",{parentName:"p"},"IOrderedFilter")," \u63a5\u53e3\u914d\u7f6e ",Object(i.b)("inlineCode",{parentName:"p"},"Order")," \u5c5e\u6027\uff0c\u6570\u503c\u8d8a\u5c0f\uff0c\u8d8a\u5148\u6267\u884c\u3002"))),Object(i.b)("h2",{id:"9224-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.22.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}b.isMDXComponent=!0},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(t),m=a,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return t?r.a.createElement(u,c(c({ref:n},l),{},{components:t})):r.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);