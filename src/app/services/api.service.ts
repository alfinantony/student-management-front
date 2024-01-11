import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:5000';

  // constructor(private http: HttpClient) {}

  // Existing methods...

  // New method for searching students
  searchStudents(name: string): Observable<any> {
    const url = `${this.baseUrl}/searchStudent?name=${name}`;
    return this.http.get(url);
  }


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
