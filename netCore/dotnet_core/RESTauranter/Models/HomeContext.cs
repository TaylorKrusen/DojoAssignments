using Microsoft.EntityFrameworkCore;

namespace RestSpace.Models
{
    public class RestContext : DbContext
    {
        public RestContext(DbContextOptions<RestContext> options) : base(options)
        { }
        public DbSet<Review> Reviews { get; set; }
    }
}