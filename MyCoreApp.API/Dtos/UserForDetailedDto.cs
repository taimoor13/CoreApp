using System;
using System.Collections.Generic;
using MyCoreApp.API.Models;

namespace MyCoreApp.API.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }

        public int Age { get; set; }

        public DateTime Created { get; set; }   
        public DateTime LastActive { get; set; }

        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        public string PhotoUrl { get; set; }

        //public ICollection<Photo> Photos { get; set; }
        //we modififed the line above due to the issue : photo has 'User' in it for reference, but it was sending all the data belongs to user in it
        public ICollection<PhotoForDetailedDto> Photos { get; set; }
        
    }
}