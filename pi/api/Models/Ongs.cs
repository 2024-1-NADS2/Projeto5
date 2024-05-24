using System.Collections.Generic;

namespace api.Models
{
    public class Ongs
    {
        public int OngsId { get; set; }
        public string OngNome { get; set;} = string.Empty;
        public string OngEmail { get; set;} = string.Empty;
        public int OngTelefone { get; set;} // Mude para string se precisar armazenar o telefone como uma sequência de caracteres
        public string OngInfo { get; set;} = string.Empty;
        public List<Voluntarios> Voluntarios { get; set; } = new List<Voluntarios>(); // Renomeie para Voluntarios para seguir as convenções do Entity Framework Core
    }
}
