using System;
using System.ComponentModel.DataAnnotations;

namespace quoting_dojo.Models
{
    public class Quote 
    {
        public int Id { get; set; }

        [Required]
        [MinLength(2)]
        public string the_name { get; set; }

        [Required]
        public string the_quote { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}