
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
// other using statements
using Microsoft.Extensions.Logging;
 
namespace YourNamespace
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            // Add Mvc as a service making it available across our entire app
            services.AddMvc();
        }
         
        // LoggerFactory is for bugging tools and should only be used in production
        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory) {
            loggerFactory.AddConsole();
            app.UseDeveloperExceptionPage();
            app.UseMvc( routes =>
            {
                routes.MapRoute(
                    name: "Default", // the route's name is only for our reference
                    template: "",
                    defaults: new {controller = "Hello", action = "Index"} 
                );
            });
            // app.UseMvc();
        }
    }
}