import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  constructor(private studentdetailsFB:FormBuilder, private api:ApiService){}
  
  studentdetailsForm=this.studentdetailsFB.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    address: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    district: ['']
  })

  // control passes to html
  register(){

    if(this.studentdetailsForm.valid){
      let name=this.studentdetailsForm.value.name;
      let address=this.studentdetailsForm.value.address;
      let email=this.studentdetailsForm.value.email;
      let phone=this.studentdetailsForm.value.phone;
      let district=this.studentdetailsForm.value.district;

      this.api.studentdetails(name,address,email,phone,district).subscribe((result:any)=>{
        alert(result.message);
      })

    // alert('Register Success')
    }
    // console.log(this.studentdetailsForm)
  
   else{
    alert('Invalid student details')
   }

}

}