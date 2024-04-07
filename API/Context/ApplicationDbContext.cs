using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Project Model Configuration
            modelBuilder.Entity<Project>()
                .HasKey(p => p.Id); // Primary Key
            modelBuilder.Entity<Project>()
                .HasIndex(p => p.DateCreated); // Index for DateCreated
            modelBuilder.Entity<Project>()
                .Property(p => p.Title)
                .IsRequired()
                .HasMaxLength(255);

            // BlogPost Model Configuration
            modelBuilder.Entity<BlogPost>()
                .HasKey(b => b.Id); // Primary Key
            modelBuilder.Entity<BlogPost>()
                .HasIndex(b => b.DatePublished); // Index for DatePublished
            modelBuilder.Entity<BlogPost>()
                .Property(b => b.Title)
                .IsRequired()
                .HasMaxLength(255);

            // ContactMessage Model Configuration
            modelBuilder.Entity<ContactMessage>()
                .HasKey(c => c.Id); // Primary Key
            modelBuilder.Entity<ContactMessage>()
                .HasIndex(c => c.DateSent); // Index for DateSent
            modelBuilder.Entity<ContactMessage>()
                .Property(c => c.Name)
                .IsRequired()
                .HasMaxLength(100);
            modelBuilder.Entity<ContactMessage>()
                .Property(c => c.Email)
                .IsRequired()
                .HasMaxLength(255);
        }
    }

}
