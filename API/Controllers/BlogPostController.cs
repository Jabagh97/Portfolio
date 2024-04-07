using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Repositories;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostController : GenericController<BlogPost>
    {
        public BlogPostController(IGenericRepository<BlogPost> repository) : base(repository)
        {
        }
    }
}
