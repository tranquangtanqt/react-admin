import Code from "../../../../../components/modules/code";
import { PageTitle } from "../../../../../components/modules/pageTitle";

export const TutorialNetAngularLesson3 = () => {
  return (
    <>
      <PageTitle title="3. Adding Entity Framework"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Add Entity User</b>
          <div className="tab-1">
            <p>- Create folder Entities</p>
            <p>- Create class AppUser</p>
          </div>
          <div className="tab-2">
            <Code
              code={`namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
    }
}`}
              language="csharp"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Adding a DBContext class</b>
          <div className="tab-1">
            <p>- Add folder: API\Data</p>
            <p>- Add class: DataContext</p>
          </div>
          <div className="tab-2">
            <Code
              code={`using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Data
{
    public class  DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options){

        }

        public DbSet<AppUser> Users { get; set; }
    }
}`}
              language="csharp"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>3. Creating the connection string</b>
          <div className="tab-1">
            <p>- Editing appsettings.Development.json</p>
          </div>
          <div className="tab-2">
            <Code
              code={`{
  "ConnectionStrings": {
      "DefaultConnection": "Data source=datingapp.db"
  },
  "TokenKey":  "super secret unguessable key",
  "Logging": {
      "LogLevel": {
      "Default": "Information",
      "Microsoft": "Information",
      "Microsoft.Hosting.Lifetime": "Information"
      }
  }
}`}
              language="json"
            />
          </div>
          <div className="tab-1">
            <p>- Startup.cs</p>
          </div>
          <div className="tab-2">
            <Code
              code={`using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using API.Data;
using Microsoft.EntityFrameworkCore;
namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;
        public Startup(IConfiguration config)
        {
            _config = config;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(options => {
                options.UseSqlite(_config.GetConnectionString("DefaultConnection"));
            });
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            });
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
            }
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}`}
              language="csharp"
            />
          </div>
        </div>
      </div>
    </>
  );
};
