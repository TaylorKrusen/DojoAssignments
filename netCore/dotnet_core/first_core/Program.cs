
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace YourNamespace
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IWebHost host = new WebHostBuilder()
                // ContentRoot tells our webserver where to find the project files
                .UseContentRoot(Directory.GetCurrentDirectory())
                // This line tells the WebHost to use Kestrel
                .UseKestrel()
                // Use Startup.cs to configure server 
                .UseStartup<Startup>()
                // Completes the initialization of the WebHost
                .Build();
            // Here the WebHost starts up the web app
            host.Run();
        }
    }
}