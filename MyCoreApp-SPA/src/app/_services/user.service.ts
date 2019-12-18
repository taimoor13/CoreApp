import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

/* issue : on login, there was no Token stored, after refreshing the page it become avaialble, so fixed this issue with defining it in app.module.ts
const headerOptions = { 
  headers : new HttpHeaders ({
  'Authorization' : 'Bearer ' + localStorage.getItem('token')
})
};
*/

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

getUsers(): Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'users/');
}


getUser(id) : Observable<User>{
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}

}
