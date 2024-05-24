using System.Collections.Generic;

namespace api.Models
{
    public class Voluntarios
    {
        public int Id { get; set; } // Renomeie a propriedade de ID para Id para seguir as convenções do Entity Framework Core
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public int Telefone { get; set; } // Mude para string se precisar armazenar o telefone como uma sequência de caracteres
        public string FDV { get; set; } = string.Empty;
        public int? OngsId { get; set; } // Adicione uma chave estrangeira para a tabela Ongs
        public Ongs? Ongs { get; set; } // Adicione uma propriedade de navegação para a tabela Ongs
    }
}
