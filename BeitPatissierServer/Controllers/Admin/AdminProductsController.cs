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
    [Route("admin_api/[controller]/[action]")]
    public class AdminProductsController : Controller
    {
        private readonly BeitPatissierContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager<BPUser> _userManager;

        public AdminProductsController(BeitPatissierContext context, IMapper mapper, UserManager<BPUser> userManager)
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

        [HttpPost]
        public ActionResult<ProductDTO> AddProduct([FromBody] ProductDTO productDTO)
        {
            var product = _mapper.Map<Product>(productDTO);
            _context.Products.Add(product);
            _context.SaveChanges();

            return Ok(_mapper.Map<ProductDTO>(product));
        }



    }
}
