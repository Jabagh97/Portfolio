using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class v11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BlogPosts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", maxLength: 255, nullable: false),
                    Content = table.Column<string>(type: "TEXT", nullable: false),
                    DatePublished = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Author = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlogPosts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ContactMessages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "TEXT", maxLength: 255, nullable: false),
                    Message = table.Column<string>(type: "TEXT", nullable: false),
                    DateSent = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactMessages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", maxLength: 255, nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false),
                    GithubUrl = table.Column<string>(type: "TEXT", nullable: false),
                    Category = table.Column<string>(type: "TEXT", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "Category", "DateCreated", "Description", "GithubUrl", "ImageUrl", "Title" },
                values: new object[,]
                {
                    { 1, "fullstack", new DateTime(2024, 4, 10, 20, 3, 34, 163, DateTimeKind.Utc).AddTicks(4725), "An advanced queue management system developed using the .Net Framework, designed to streamline customer service operations.", "https://github.com/Jabagh97/QLite", "/Qlite.jpg", "QLite" },
                    { 2, "frontend", new DateTime(2024, 4, 10, 20, 3, 34, 163, DateTimeKind.Utc).AddTicks(4727), "This portfolio website is a personal showcase of my work, highlighting my projects and professional capabilities.", "https://github.com/Jabagh97/Portfolio", "/port.png", "Personal Portfolio Website" },
                    { 3, "fullstack", new DateTime(2024, 4, 10, 20, 3, 34, 163, DateTimeKind.Utc).AddTicks(4729), "A riveting multiplayer BattleShip game, deployed on Heroku for seamless online play.", "https://github.com/Jabagh97/BattleShip", "/port.png", "BattleShip" },
                    { 4, "backend", new DateTime(2024, 4, 10, 20, 3, 34, 163, DateTimeKind.Utc).AddTicks(4730), "A backend forum application utilizing Spring Boot, crafted as part of a university assignment.", "https://github.com/Jabagh97/SpringBootFourm", "/spring.png", "SpringBoot Forum" },
                    { 5, "fullstack", new DateTime(2024, 4, 10, 20, 3, 34, 163, DateTimeKind.Utc).AddTicks(4732), "An innovative Task Manager leveraging Jira's API to calculate the effort of selected tasks, built with Spring Boot and Vue.js.", "https://github.com/Jabagh97/TaskManager", "/vue.png", "Task Manager" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BlogPosts_DatePublished",
                table: "BlogPosts",
                column: "DatePublished");

            migrationBuilder.CreateIndex(
                name: "IX_ContactMessages_DateSent",
                table: "ContactMessages",
                column: "DateSent");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_DateCreated",
                table: "Projects",
                column: "DateCreated");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BlogPosts");

            migrationBuilder.DropTable(
                name: "ContactMessages");

            migrationBuilder.DropTable(
                name: "Projects");
        }
    }
}
