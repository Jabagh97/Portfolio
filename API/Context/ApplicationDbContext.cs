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
            base.OnModelCreating(modelBuilder);

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



            // Seed data for Projects
            modelBuilder.Entity<Project>().HasData(
    new Project
    {
        Id = 1,
        Title = "QLite",
        Description = "An advanced queue management system developed using the .Net Framework, designed to streamline customer service operations.",
        ImageUrl = "/Qlite.jpg",
        GithubUrl = "https://github.com/Jabagh97/QLite",
        DateCreated = DateTime.UtcNow,
        Category = "fullstack"
    },
    new Project
    {
        Id = 2,
        Title = "Personal Portfolio Website",
        Description = "This portfolio website is a personal showcase of my work, highlighting my projects and professional capabilities.",
        ImageUrl = "/port.png",
        GithubUrl = "https://github.com/Jabagh97/Portfolio",
        DateCreated = DateTime.UtcNow,
        Category = "frontend"
    },
    new Project
    {
        Id = 3,
        Title = "BattleShip",
        Description = "A riveting multiplayer BattleShip game, deployed on Heroku for seamless online play.",
        ImageUrl = "/port.png",
        GithubUrl = "https://github.com/Jabagh97/BattleShip",
        DateCreated = DateTime.UtcNow,
        Category = "fullstack"
    },
    new Project
    {
        Id = 4,
        Title = "SpringBoot Forum",
        Description = "A backend forum application utilizing Spring Boot, crafted as part of a university assignment.",
        ImageUrl = "/spring.png",
        GithubUrl = "https://github.com/Jabagh97/SpringBootFourm",
        DateCreated = DateTime.UtcNow,
        Category = "backend"
    },
    new Project
    {
        Id = 5,
        Title = "Task Manager",
        Description = "An innovative Task Manager leveraging Jira's API to calculate the effort of selected tasks, built with Spring Boot and Vue.js.",
        ImageUrl = "/vue.png",
        GithubUrl = "https://github.com/Jabagh97/TaskManager",
        DateCreated = DateTime.UtcNow,
        Category = "fullstack"
    }
);



        }
    }

}
