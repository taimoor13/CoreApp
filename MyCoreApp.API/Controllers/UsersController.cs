using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyCoreApp.API.Data;
using AutoMapper;
using MyCoreApp.API.Dtos;
using System.Collections.Generic;

namespace MyCoreApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAppRepository _repo;
        private readonly IMapper _mapper;

        //private readonly IMapper _mapper;        

        public UsersController(IAppRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
            
        }

        [HttpGet] // automtically it will be called if url is api/getusers
        public async Task<IActionResult> GetUsers(){

            var users = await _repo.GetUsers();
            var UsersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(UsersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id){

            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }
    }
}