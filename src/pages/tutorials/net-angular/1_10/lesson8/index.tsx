import Code from '../../../../../components/modules/code';
import { PageTitle } from '../../../../../components/modules/page-title';

export const TutorialNetAngularLesson8 = () => {
  return (
    <>
      <PageTitle title="8. Adding CORS support in the API"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Startup.cs</b>
          <div className="tab-1">
            <p>- Create folder Entities</p>
            <p>- Create class AppUser</p>
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
            services.AddCors(); //
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));   //
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
          <b>2. app.component.html</b>
          <div className="tab-1">
            <p>- Add folder: API\Data</p>
            <p>- Add class: DataContext</p>
          </div>
          <div className="tab-2">
            <Code
              code={`<h1>{{ title }}</h1>
<ul>
  <li *ngFor="let user of users">{{ user.id }} - {{ user.userName }}</li>
</ul>`}
              language="javascript"
            />
          </div>
        </div>
      </div>
    </>
  );
};
