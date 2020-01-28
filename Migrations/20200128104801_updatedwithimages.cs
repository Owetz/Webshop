using Microsoft.EntityFrameworkCore.Migrations;

namespace WebShop.Migrations
{
    public partial class updatedwithimages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ArticleName", "Description", "Image" },
                values: new object[] { "Pig", "Origami pig, beautiful - right?", "pig.jpg" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "ArticleName", "Description", "Image" },
                values: new object[] { "Birds", "Origami Birds, lovely indeed..", "birds.jpg" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ArticleName", "Description", "Image" },
                values: new object[] { "Square", "This is a Cirle, a beautiful circle at that.", null });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "ArticleName", "Description", "Image" },
                values: new object[] { "Circle", "This is a Cirle, a beautiful circle at that.", null });
        }
    }
}
