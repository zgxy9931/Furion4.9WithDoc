﻿using Furion;
using Microsoft.Extensions.DependencyInjection;

namespace FurionBlazorApi.EntityFramework.Core
{
    public class Startup : AppStartup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDatabaseAccessor(options =>
            {
            }, "FurionBlazorApi.Database.Migrations");
        }
    }
}