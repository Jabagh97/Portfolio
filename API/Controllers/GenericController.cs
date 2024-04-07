using Microsoft.AspNetCore.Mvc;
using API.Repositories;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenericController<T> : ControllerBase where T : class
    {
        private readonly IGenericRepository<T> _repository;

        public GenericController(IGenericRepository<T> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<T>>> GetAll()
        {
            var items = await _repository.GetAllAsync();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<T>> GetById(int id)
        {
            var item = await _repository.GetByIdAsync(id);
            if (item == null) return NotFound();
            return Ok(item);
        }

        [HttpPost]
        public async Task<ActionResult<T>> Create(T item)
        {
            var newItem = await _repository.AddAsync(item);
            return CreatedAtAction(nameof(GetById), new { id = newItem }, newItem);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, T item)
        {
            await _repository.UpdateAsync(item);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.DeleteAsync(id);
            return NoContent();
        }
    }
}
