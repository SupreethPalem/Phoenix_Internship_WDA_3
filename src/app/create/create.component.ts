import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelpserviceService } from '../helpservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
picker=  new Date()
myForm!:FormGroup
 arr = ['Male','Female']
  constructor(private _fb:FormBuilder, private helpservice:HelpserviceService) { }

  ngOnInit(): void {
    console.log('loading create')
    this.myForm=this._fb.group({
      Email : ["", Validators.compose([Validators.required, Validators.email])],
      Password : ["", Validators.compose([Validators.required,Validators.minLength(6)])],
      FirstName : ["", Validators.required],
      MiddleName : ["", Validators.required],
      LastName : ["", Validators.required],
      Dob : ["", Validators.required],
      Gender : ["", Validators.required]

    })
  }
submit(){
  console.log('in submit')
  console.log(this.myForm.value)
  this.helpservice.postUser(this.myForm.value)
  .subscribe(data=>{
    alert('sucess')
  })
}

emailChanged(event : any){
  console.log(event.target.value)
}
}
