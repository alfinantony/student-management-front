import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  studentdetails(name:any,address:any,email:any,phone:any,district:any){
    const body={
      name,
      address,
      email,
      phone,
      district
    }
    return this.http.post('http://localhost:5000/studentdetails',body)
  }
}
