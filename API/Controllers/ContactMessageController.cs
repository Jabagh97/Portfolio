using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Repositories;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactMessageController : GenericController<ContactMessage>
    {
        public ContactMessageController(IGenericRepository<ContactMessage> repository) : base(repository)
        {
        }
    }
}
