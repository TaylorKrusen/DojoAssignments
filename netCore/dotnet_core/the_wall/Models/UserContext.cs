using Microsoft.EntityFrameworkCore;

namespace the_wall.Models
{
    public class WallContext : DbContext
    {
        public WallContext(DbContextOptions<WallContext> options) : base(options)
        { }
        public DbSet<User> Users { get; set; }
    }
}