using AutoMapper;
using BeitPatissierServer.Data;
using BeitPatissierServer.DTOs;
using BeitPatissierServer.Mappers;
using BeitPatissierServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using BeitPatissierServer.Services;

namespace BeitPatissierServer.Controllers.Admin
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ProductsController : Controller
    {
      
        private readonly UserManager<BPUser> _userManager;
        private readonly ProductService _productService;

        public ProductsController(UserManager<BPUser> userManager, ProductService productsSevice)
        {
            _productService = productsSevice;
            _userManager = userManager;
        }
        [HttpGet("{id}")]
        public ActionResult<ProductDTO> GetProductById(int id)
        {
            var product = _productService.GetProductById(id);
            if (product == null)
                return NotFound();

            return Ok(product);
        }

        [HttpGet]
        public ActionResult<List<ProductDTO>> GetAllProducts()
        {
            var products = _productService.GetAllProducts();
            return Ok(products);
        }

        [HttpPost]
        public ActionResult<ProductDTO> AddProduct([FromBody] ProductDTO productDTO)
        {
            var createdProduct = _productService.AddProduct(productDTO);
            return CreatedAtAction(nameof(GetProductById), new { id = createdProduct.ProductId }, createdProduct);
        }

            


    }
}
