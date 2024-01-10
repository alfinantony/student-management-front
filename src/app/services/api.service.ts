import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  studentdetails(name:any,address:any,email:any,phone:any,district:any,english:number,maths:number,science:number,social:number,hindi:number,totalMarks:number,averageMarks:number){
    const body={
      name,
      address,
      email,
      phone,
      district,
      english,
      maths,
      science,
      social,
      hindi,
      totalMarks,
      averageMarks

    }
    return this.http.post('http://localhost:5000/studentdetails',body)
  }
}
