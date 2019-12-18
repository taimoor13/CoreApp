using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MyCoreApp.API.Data;

namespace MyCoreApp.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //CreateWebHostBuilder(args).Build().Run();
            //To Run the Seed methods, its the best place.(as MS best practise)
            //defer the Run();
            //no error handling is avalable here : use try catch
            // no DI can be done here , use : using ()
            var host = CreateWebHostBuilder(args).Build();

            using(var scope = host.Services.CreateScope() ){

                var services = scope.ServiceProvider;

                try{
                    var context = services.GetRequiredService<DataContext>();
                    context.Database.Migrate();//this will create the DB as we are going to drop it (manually) before running the progame 
                    Seed.SeedUsers(context);


                }
                catch(Exception ex){
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occured duing Migration");

                }
            }

            host.Run();


        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
