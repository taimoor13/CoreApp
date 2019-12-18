using System.Linq;
using AutoMapper;
using MyCoreApp.API.Dtos;
using MyCoreApp.API.Models;

namespace MyCoreApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            //NOTES:
            //restart Kestral server after doing modifications here
            //its convention Based:
            //its smart enough to map smiliar names of peropeties of class : User & UserForListDto, except few !
            CreateMap<User, UserForListDto>()
            .ForMember(dest => dest.PhototUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));;
            
            CreateMap<User, UserForDetailedDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Photo, PhotoForDetailedDto>();
           
        }
    }
}