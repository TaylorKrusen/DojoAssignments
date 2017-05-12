using System;
using System.Collections.Generic;

namespace the_wall.Models
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
		// public ICollection<Quote> quotes { get; set; }
		// public User()
		// {
		// 	quotes = new List<Quote>();
		// }
	}
}