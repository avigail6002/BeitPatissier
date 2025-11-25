using BeitPatissierServer.DTOs;
using BeitPatissierServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BeitPatissierServer.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ProductsController : Controller
    {

        private readonly UserManager<BPUser> _userManager;

        public ProductsController(UserManager<BPUser> userManager)
        {
            _userManager = userManager;
        }
        //[HttpPost]
        //public async Task<IActionResult> AddUserExercise([FromBody] ProductDTO dto)
        //{
        //    //if (!User.Identity.IsAuthenticated)
        //    //{
        //    //    return Unauthorized("User must be logged in to add exercise.");
        //    //}

        //    var user = await _userManager.GetUserAsync(User);
        //    if (user == null)
        //    {
        //        return Unauthorized("User not found.");
        //    }

        //    //var newExercise = new Exercise
        //    //{
        //    //    ExTitle = dto.ExTitle,
        //    //    ExBodyHTML = dto.ExBodyHTML,
        //    //    SolutionHintHTML = dto.SolutionHintHTML,
        //    //    CreateDate = DateTime.Now,
        //    //    StartTime = null,
        //    //    EndTime = null,
        //    //    ExerciseLevelId = 1,
        //    //    UserUploadId = user.Id,
        //    //    IsDeleted = false
        //    //};

        //    //try
        //    //{
        //    //    await _context.Exercises.AddAsync(newExercise);
        //    //    await _context.SaveChangesAsync();
        //    //    return Ok(new { newExercise.ExerciseId });
        //    //}
        //    //catch (Exception ex)
        //    //{
        //    //    return StatusCode(500, $"Failed to save user exercise: {ex.Message}");
        //    //}
        //}
        //[HttpGet]
        //public IActionResult GetAllProducts()
        //{
        //    return View();
        //}
    }
}
