using System.ComponentModel.DataAnnotations;

namespace MyCoreApp.API.Dtos
{
    public class UserforRegisterDto
    {
        [Required]
        public string username { get; set; }

        [Required]
        [StringLength(8, MinimumLength=4,ErrorMessage="password must be 4 to 8 characters long")]
        public string password { get; set; }
    }
}