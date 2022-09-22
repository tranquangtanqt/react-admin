import { Col, Row, Divider } from "antd";
import Code from "../../../../components/modules/code";

const NALesson5 = () => {
  const controller = `using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
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
`;
  return (
    <>
      <Divider orientation="left">Adding a new API Controller</Divider>
      <Row justify="start">
        <Col span={24}>
          <Code code={controller} language="csharp" />
        </Col>
        
        <Col span={23} offset={1}>
          <br />
          <p>1. Run command: dotnet run</p>
          <p>2. https://localhost:5001/api/users</p>
        </Col>
      </Row>
    </>
  );
};

export default NALesson5;
