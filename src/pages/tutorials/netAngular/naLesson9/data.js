export const naLesson3Data = {
    appUser: `namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}`,

    baseApiController: `using Microsoft.AspNetCore.Mvc;
namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
    }
}
`,

    usersController: `using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public ActionResult<IEnumerable<AppUser>> GetUsers(){
            return _context.Users.ToList();
        }
        [HttpGet("get/{id}")]
        public ActionResult<AppUser> GetUser(int id){
            return _context.Users.Find(id);
        }
        [HttpGet("async")]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsersAsync(){
            return await _context.Users.ToListAsync();
        }
        [HttpGet("async/{id}")]
        public async Task<ActionResult<AppUser>> GetUserAsync(int id){
            return await _context.Users.FindAsync(id);
        }
    }
}
`,

    appsettings: ``,
}