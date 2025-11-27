using AutoMapper;
using BeitPatissierServer.Data;
using BeitPatissierServer.DTOs;
using BeitPatissierServer.Mappers;
using BeitPatissierServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BeitPatissierServer.Controllers.Admin
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ProductsController : Controller
    {
        private readonly BeitPatissierContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager<BPUser> _userManager;

        public ProductsController(BeitPatissierContext context, IMapper mapper, UserManager<BPUser> userManager)
        {
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var allProducts = _context.Products.ToList();
            var allProductsDTO = _mapper.Map<List<ProductDTO>>(allProducts);
            return Ok(allProductsDTO);
        }
    }
}
