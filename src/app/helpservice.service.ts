import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpserviceService {
base =  'http://localhost:7000/api'
  constructor(private http:HttpClient) { }
  postUser(data:any){
    console.log(data)
    return this.http.post(this.base+'/postUserInfo', data)
  }
  getallUsers() {
    return this.http.get(this.base+'/getUserInfo')
  }

  getUserById(id:any) {
    return this.http.get(this.base+'/getUserById/'+id)
  }


  putUserById(id:any, body:any){
    return this.http.put(this.base+'/putUserById/'+id , body)
  }
}
