using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
        }

        public DbSet<Voluntarios> Voluntarios { get; set; }
        public DbSet<Ongs> Ongs { get; set; }

        // Sobrescreva este método se precisar de configurações adicionais
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Aqui você pode adicionar configurações de modelo personalizadas, como chaves primárias, índices, etc.
        }
    }
}