using System.ComponentModel.DataAnnotations;

namespace user_dash.Models
{
	public class RegViewModel : BaseEntity
	{
		[Required(ErrorMessage = "First name cannot be left blank.")]
		[MinLength(2, ErrorMessage = "First name must be at least 2 characters in length.")]
		[Display(Name = "First Name:")]
		public string FirstName { get; set; }
		[Required(ErrorMessage = "Last name cannot be left blank.")]
		[MinLength(2, ErrorMessage = "Last name must be at least 2 characters in length.")]
		[Display(Name = "Last Name:")]
		public string LastName { get; set; }
		[Required(ErrorMessage = "Email address cannot be left blank.")]
		[EmailAddress(ErrorMessage = "Email is not in the correct format.")]
		[Display(Name = "Email:")]
		public string Email { get; set; }
		[Required(ErrorMessage = "Password cannot be left blank.")]
		[RegularExpression(@"(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&#39;?/&gt;.&lt;,])(?!.*\s).*$", ErrorMessage = "Password must be at least 8 characters and include 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.")]
		[Compare("Confirm", ErrorMessage = "Password and confirm password do not match.")]
		[DataType(DataType.Password)]
		[Display(Name = "Password:")]
		public string Password { get; set; }
		[Required(ErrorMessage = "Confirm password cannot be left blank.")]
		[DataType(DataType.Password)]
		[Display(Name = "Confirm Password:")]
		public string Confirm { get; set; }
	}
}