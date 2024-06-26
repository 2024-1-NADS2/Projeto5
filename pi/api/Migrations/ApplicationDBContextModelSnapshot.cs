﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Data;

#nullable disable

namespace api.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    partial class ApplicationDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            MySqlModelBuilderExtensions.AutoIncrementColumns(modelBuilder);

            modelBuilder.Entity("api.Models.Ongs", b =>
                {
                    b.Property<int>("OngsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("OngsId"));

                    b.Property<string>("OngEmail")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("OngInfo")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("OngNome")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("OngTelefone")
                        .HasColumnType("int");

                    b.HasKey("OngsId");

                    b.ToTable("Ongs");
                });

            modelBuilder.Entity("api.Models.Voluntarios", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("FDV")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int?>("OngsId")
                        .HasColumnType("int");

                    b.Property<int>("Telefone")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OngsId");

                    b.ToTable("Voluntarios");
                });

            modelBuilder.Entity("api.Models.Voluntarios", b =>
                {
                    b.HasOne("api.Models.Ongs", "Ongs")
                        .WithMany("Voluntarios")
                        .HasForeignKey("OngsId");

                    b.Navigation("Ongs");
                });

            modelBuilder.Entity("api.Models.Ongs", b =>
                {
                    b.Navigation("Voluntarios");
                });
#pragma warning restore 612, 618
        }
    }
}
