import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const TutorialNetAngularLesson9 = () => {
  return (
    <>
      <PageTitle title="9. Updating the user entity and Creating a base API controller"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Updating the user entity</b>
          <div className="tab-1">
            <p>- Update entity: AppUser</p>
          </div>
          <div className="tab-2">
            <Code
              code={`namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}`}
              language="csharp"
            />
          </div>
          <div className="tab-1">
            <p>- Update migrate: dotnet ef migrations add UserPasswordAdded</p>
          </div>
        </div>
        <div className="tab-2">
          <input
            type="image"
            src={require('resources/img/tutorials/netAngular/Net_Angular_8.jpg')}
            className="img-thumbnail"
            alt=""
          />
        </div>
        <div className="tab-1">
          <p>- Update database: dotnet ef database update</p>
        </div>
        <div className="tab-2">
          <input
            type="image"
            src={require('resources/img/tutorials/netAngular/Net_Angular_9.jpg')}
            className="img-thumbnail"
            alt=""
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Creating a base API controller</b>
          <div className="tab-1">
            <p>- Create API.Controllers.BaseApiController</p>
          </div>
          <div className="tab-2">
            <Code
              code={`using Microsoft.AspNetCore.Mvc;
namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
    }
}`}
              language="csharp"
            />
          </div>
          <div className="tab-1">
            <p>
              - Change UsersController: remove ApiController and
              [Route("api/[controller]")]
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`using System.Collections.Generic;
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
}`}
              language="csharp"
            />
          </div>
        </div>
      </div>
    </>
  );
};
