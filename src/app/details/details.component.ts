import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

//   constructor(private detailsFB:FormBuilder){}
  
//   detailsForm=this.detailsFB.group({
//     name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
//     password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
   
//   })

//   // control passes to html
//   login(){
//     if(this.detailsForm.valid){
//       let name=this.detailsForm.value.name;
//       let password=this.detailsForm.value.password;
     
//       // let district=this.studentdetailsForm.value.district;
//     alert('login Success')
//     }
//     // console.log(this.studentdetailsForm)
  
//    else{
//     alert('Invalid student login')
//    }

// }

}
