using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace user_dash.Models{
    public class Message : BaseEntity {
        public int MessageId { get; set; }
        [MinLengthAttribute(1)]
        [RequiredAttribute]
        public string MessageText { get; set; }
        public int UsersId { get; set;}
        public int AuthorsId {get; set;}
        public User user { get; set; }
        public ICollection<Message> Messages { get; set; }
    }
}