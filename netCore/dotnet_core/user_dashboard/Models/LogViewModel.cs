using System.ComponentModel.DataAnnotations;

namespace user_dash.Models
{
	public class LogViewModel : BaseEntity 
	{ //creates class to validate the login fields
		[Required(ErrorMessage = "Email address cannot be left blank")]
		[Display(Name = "Email:")]
		public string LogEmail { get; set; }
		[Required(ErrorMessage = "Password cannot be left blank")]
		[Display(Name = "Password:")]
		[DataType(DataType.Password)]
		public string LogPass { get; set; }
	}
}
