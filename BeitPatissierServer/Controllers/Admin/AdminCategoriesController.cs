using AutoMapper;
using BeitPatissierServer.Data;
using BeitPatissierServer.DTOs;
using BeitPatissierServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BeitPatissierServer.Controllers.Admin
{
    [ApiController]
    [Route("admin_api/[controller]/[action]")]
    public class AdminCategoriesController : Controller
    {
        private readonly BeitPatissierContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager<BPUser> _userManager;

        public AdminCategoriesController(BeitPatissierContext context, IMapper mapper, UserManager<BPUser> userManager)
        {
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<CategoryDTO>), 200)]
        public IActionResult GetAllCategories()
        {
            var allCategories = _context.Categories.ToList();
            var allCategoriesDTO = _mapper.Map<List<CategoryDTO>>(allCategories);
            return Ok(allCategoriesDTO);
        }

        [HttpPost]
        [ProducesResponseType(typeof(CategoryDTO), 200)]
        public ActionResult<CategoryDTO> AddCategory([FromBody] CategoryDTO categoryDTO)
        {
            var category = _mapper.Map<Category>(categoryDTO);
            _context.Categories.Add(category);
            _context.SaveChanges();

            return Ok(_mapper.Map<CategoryDTO>(category));
        }

        [HttpPut]
        [ProducesResponseType(typeof(CategoryDTO), 200)]
        [ProducesResponseType(404)]
        public ActionResult<CategoryDTO> UpdateCategory([FromBody] CategoryDTO categoryDTO)
        {
            var category = _context.Categories.FirstOrDefault(c => c.CategoryId == categoryDTO.CategoryId);
            if (category == null)
                return NotFound("Category not found");

            _mapper.Map(categoryDTO, category);
            _context.SaveChanges();

            return Ok(_mapper.Map<CategoryDTO>(category));
        }
    }
}
