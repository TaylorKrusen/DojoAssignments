using Microsoft.EntityFrameworkCore;

namespace user_dash.Models
{
    public class DashContext : DbContext
    {
        public DashContext(DbContextOptions<DashContext> options) : base(options)
        { }
        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}