using System.Collections.Generic;
using System.Threading.Tasks;
using MyCoreApp.API.Models;

namespace MyCoreApp.API.Data
{
    public interface IAppRepository
    {
         void Add<T>(T entity) where T:class; // generic menthod T is any entity (user or photo) and restitct it to be a class.
         void Delete<T>(T entity) where T:class;

         Task<bool> SavAll(); 

         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}