using AutoMapper;
using System.Linq;
using BeitPatissierServer.Models;
using BeitPatissierServer.DTOs;

namespace BeitPatissierServer.Mappers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDTO>().ReverseMap();
        }
    }
}
