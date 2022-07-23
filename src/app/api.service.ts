import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewcourse=()=>{
    return this.http.get("http://localhost:3001/viewcourse")
    
  }
  addcourse(course:any){
    return this.http.post<any>("http://localhost:3001/addcourse",course)
  }
}
