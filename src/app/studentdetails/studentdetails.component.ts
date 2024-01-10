import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  constructor(private studentdetailsFB:FormBuilder, private api:ApiService){}

  
  ngOnInit(): void {
    // Subscribe to form control changes for dynamic total and average updates
    this.subscribeToFormChanges();
  }
  
  studentdetailsForm=this.studentdetailsFB.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    address: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    district: [''],

    english: [0, [Validators.required, Validators.pattern('[0-9]*')]],
    maths: [0, [Validators.required, Validators.pattern('[0-9]*')]],
    science: [0, [Validators.required, Validators.pattern('[0-9]*')]],
    social: [0, [Validators.required, Validators.pattern('[0-9]*')]],
    hindi: [0, [Validators.required, Validators.pattern('[0-9]*')]],
    // Additional fields for total and average
    totalMarks: [0],
    averageMarks: [0]  
  });


 
  // control passes to html
  register(){

    if(this.studentdetailsForm.valid){
      let name=this.studentdetailsForm.value.name;
      let address=this.studentdetailsForm.value.address;
      let email=this.studentdetailsForm.value.email;
      let phone=this.studentdetailsForm.value.phone;
      let district=this.studentdetailsForm.value.district;

      let english=this.studentdetailsForm.value.english ||0
      let maths=this.studentdetailsForm.value.maths ||0
      let science=this.studentdetailsForm.value.science ||0
      let social=this.studentdetailsForm.value.social||0
      let hindi=this.studentdetailsForm.value.hindi ||0

      let totalMarks = this.studentdetailsForm.value.totalMarks ||0
      let averageMarks= this.studentdetailsForm.value.averageMarks ||0

      this.api.studentdetails(name,address,email,phone,district,english,maths,science,social,hindi,totalMarks,averageMarks).subscribe((result:any)=>{
        alert(result.message);
      })

    // alert('Register Success')
    }
    // console.log(this.studentdetailsForm)
  
   else{
    alert('Invalid student details')
   }

}


subscribeToFormChanges() {
  const subjectControls = ['english', 'maths', 'science', 'social', 'hindi'];

  subjectControls.forEach((controlName) => {
    this.studentdetailsForm.get(controlName)?.valueChanges.subscribe(() => {
      this.calculateTotalAndAverage();
    });
  });
}

calculateTotalAndAverage() {
  const english = this.studentdetailsForm.value.english || 0;
  const maths = this.studentdetailsForm.value.maths || 0;
  const science = this.studentdetailsForm.value.science || 0;
  const social = this.studentdetailsForm.value.social || 0;
  const hindi = this.studentdetailsForm.value.hindi || 0;

  // Ensure the values are numbers before calculating
  const marksArray = [english, maths, science, social, hindi].map(Number);

  // Calculate total marks
  const totalMarks = marksArray.reduce((total, mark) => total + mark, 0);
  this.studentdetailsForm.get('totalMarks')?.setValue(totalMarks);

  // Calculate average marks
  const averageMarks = totalMarks / marksArray.length || 0; // Handle division by zero
  this.studentdetailsForm.get('averageMarks')?.setValue(averageMarks);
}


// Function to get a form control for easier validation checks in the template
getFormControl(controlName: string): AbstractControl | null {
  return this.studentdetailsForm.get(controlName);
}


}