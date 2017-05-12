using System;
using System.ComponentModel.DataAnnotations;

namespace RestSpace.Models
{
	public abstract class BaseEntity {}
	public class Review : BaseEntity
	{
		[Key]
		public long ReviewId { get; set; }

		[Required]
		public string ReviewName { get; set; }

		[Required]
		public string RestaurantName { get; set; }

		[Required]
		public string Rating { get; set; }

		[Required]
		[MinLength(10)]
		public string ReviewText { get; set; }

		[Required]
        public DateTime VisitDate { get; set; }
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
	}
}