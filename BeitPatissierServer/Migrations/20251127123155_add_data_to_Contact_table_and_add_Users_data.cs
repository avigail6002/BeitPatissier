using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BeitPatissierServer.Migrations
{
    /// <inheritdoc />
    public partial class add_data_to_Contact_table_and_add_Users_data : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProfileHexColor",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "JoinDate", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PasswordResetCode", "PasswordResetCodeCreatedAt", "PasswordResetCodeExpires", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { 2, 0, "551e4f2e-7e56-45a1-b479-5994da3bbdb5", "manager1@example.com", true, "Mali", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Levi", false, null, "MANAGER1@EXAMPLE.COM", "MANAGER1", "AQAAAAIAAYagAAAAEGz1FJf0qV3hGm8R9TtNwftF6u4aG+Yq5rC9GxJzFm0rD2nW6D4bU6YpT2yK1J/MBw==", null, null, null, null, false, null, false, "manager1" },
                    { 3, 0, "5ede468d-cc94-4647-8969-e69e25a46a2e", "manager2@example.com", true, "Sara", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Cohen", false, null, "MANAGER2@EXAMPLE.COM", "MANAGER2", "AQAAAAIAAYagAAAAEGz1FJf0qV3hGm8R9TtNwftF6u4aG+Yq5rC9GxJzFm0rD2nW6D4bU6YpT2yK1J/MBw==", null, null, null, null, false, null, false, "manager2" },
                    { 4, 0, "81c225e9-c5da-45c5-92ad-e3ef9c1ecdb4", "customer1@example.com", true, "Avi", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Halevi", false, null, "CUSTOMER1@EXAMPLE.COM", "CUSTOMER1", "AQAAAAIAAYagAAAAEGz1FJf0qV3hGm8R9TtNwftF6u4aG+Yq5rC9GxJzFm0rD2nW6D4bU6YpT2yK1J/MBw==", null, null, null, null, false, null, false, "customer1" },
                    { 5, 0, "f39961c7-bdf5-4df2-8964-d2a3684e916c", "customer2@example.com", true, "Rachel", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Bar", false, null, "CUSTOMER2@EXAMPLE.COM", "CUSTOMER2", "AQAAAAIAAYagAAAAEGz1FJf0qV3hGm8R9TtNwftF6u4aG+Yq5rC9GxJzFm0rD2nW6D4bU6YpT2yK1J/MBw==", null, null, null, null, false, null, false, "customer2" },
                    { 6, 0, "ae0199f4-9e19-4aae-9c25-fc5053f7e141", "customer3@example.com", true, "David", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Tal", false, null, "CUSTOMER3@EXAMPLE.COM", "CUSTOMER3", "AQAAAAIAAYagAAAAEGz1FJf0qV3hGm8R9TtNwftF6u4aG+Yq5rC9GxJzFm0rD2nW6D4bU6YpT2yK1J/MBw==", null, null, null, null, false, null, false, "customer3" }
                });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "ContactId", "Email", "Message", "Phone", "Status", "Subject", "UserId", "UserName" },
                values: new object[,]
                {
                    { 4, "mali@example.com", "מתי מגיע?", "0529988776", 0, "שאלה על משלוח", null, "Mali" },
                    { 5, "sara@example.com", "הפרטים שלי לא מעודכנים", "0534455667", 0, "בקשה לתיקון", null, "Sara" },
                    { 6, "dan@example.com", "טופל", "0547891122", 1, "סגור 1", null, "Dan" },
                    { 7, "hadas@example.com", "נפתר", "0585566778", 1, "סגור 2", null, "Hadas" },
                    { 8, "roni@example.com", "הסתדר", "0573322110", 1, "סגור 3", null, "Roni" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[,]
                {
                    { 2, 2 },
                    { 2, 3 },
                    { 3, 4 },
                    { 3, 5 },
                    { 3, 6 }
                });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "ContactId", "Email", "Message", "Phone", "Status", "Subject", "UserId", "UserName" },
                values: new object[,]
                {
                    { 1, "avi@example.com", "לא מצליח להתחבר למערכת", "0501234567", 0, "בעיה בהתחברות", 6, "Avi User" },
                    { 2, "avi@example.com", "הזמנה לא נסגרת", "0501234567", 0, "באג בהזמנה", 6, "Avi User" },
                    { 3, "avi@example.com", "מבקש לעדכן טלפון", "0501234567", 0, "עדכון פרטים", 4, "Avi User" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { 2, 2 });

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { 2, 3 });

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { 3, 4 });

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { 3, 5 });

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { 3, 6 });

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "ContactId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "ContactId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "ContactId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "ContactId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "ContactId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "ContactId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "ContactId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "ContactId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.AddColumn<string>(
                name: "ProfileHexColor",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
