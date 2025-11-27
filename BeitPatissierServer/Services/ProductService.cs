using AutoMapper;
using BeitPatissierServer.Data;
using BeitPatissierServer.DTOs;
using BeitPatissierServer.Models;

namespace BeitPatissierServer.Services
{
    public class ProductService
    {
        private readonly BeitPatissierContext _context;
        private readonly IMapper _mapper;

        public ProductService(BeitPatissierContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public ProductDTO? GetProductById(int id)
        {
            var product = _context.Products.FirstOrDefault(p => p.ProductId == id);
            if (product == null)
                return null;

            return _mapper.Map<ProductDTO>(product);
        }

        public List<ProductDTO> GetAllProducts()
        {
            var allProducts = _context.Products.ToList();
            var allProductsDTO = _mapper.Map<List<ProductDTO>>(allProducts);
            return allProductsDTO;
        }
        public ProductDTO AddProduct(ProductDTO productDTO)
        {
            var product = _mapper.Map<Product>(productDTO);

            _context.Products.Add(product);
            _context.SaveChanges();

            return _mapper.Map<ProductDTO>(product);
        }



    }
}
