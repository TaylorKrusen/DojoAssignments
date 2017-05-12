using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace user_dash.Models
{
    public class Comment : BaseEntity {
        public int CommentId { get; set; }
        [RequiredAttribute]
        [MinLengthAttribute(1)]
        public string CommentText { get; set; }
        public int MessagesId { get; set;}
        public int AuthorsId {get; set;}
        public ICollection<Comment> comments { get; set; }
    }
}  