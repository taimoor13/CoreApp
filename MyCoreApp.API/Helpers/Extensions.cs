using System;
using Microsoft.AspNetCore.Http;

namespace MyCoreApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message){

            response.Headers.Add("Application-Error",message);
            //belwo two are to able the above line to get displayed
            response.Headers.Add("Access-Control-Expose-Header","Application-Error");
            response.Headers.Add("Access-Control-Allow-Origion", "*");
        }

        public static int CalculateAge(this DateTime theDateTime){
            var age = DateTime.Today.Year - theDateTime.Year;
            if(theDateTime.AddYears(age) >  DateTime.Today)
                age --;
            
            return age;
        }       
    }
}