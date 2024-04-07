using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Repositories;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : GenericController<Project>
    {
        public ProjectController(IGenericRepository<Project> repository) : base(repository)
        {
        }
    }
}
