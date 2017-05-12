using System;
using System.Collections.Generic;

namespace user_dash.Models
{
	public abstract class BaseEntity {}
	public class User : BaseEntity
	{
		public long UserId { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
		public string Password { get; set; }
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
		public int Admin { get; set; }
        public string Description { get; set;}
        public ICollection<Message> Messages { get; set; }
		public ICollection<Comment> Comments { get; set; }
	}
}