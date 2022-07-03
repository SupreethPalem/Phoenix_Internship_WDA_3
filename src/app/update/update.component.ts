import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HelpserviceService } from '../helpservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
myForm!:FormGroup
objectId:any
  constructor(private _fb:FormBuilder, private activatedRoute:ActivatedRoute, private helperService:HelpserviceService ,private router:Router) { }

  ngOnInit(): void {
    this.myForm=this._fb.group({
      Email : ["", Validators.compose([Validators.required, Validators.email])],
      Password : ["", Validators.compose([Validators.required,Validators.minLength(6)])],
      FirstName : ["", Validators.required],
      MiddleName : ["", Validators.required],
      LastName : ["", Validators.required],
      Dob : ["", Validators.required],
      Gender : ["", Validators.required]

    })
    this.objectId=this.activatedRoute.snapshot.paramMap.get('id')
    this.helperService.getUserById(this.objectId).subscribe((data:any)=>{
      this.myForm.setValue({
        Email: data[0]?.Email,
        Password: data[0]?.Password,
        FirstName: data[0]?.FirstName,
        MiddleName: data[0]?.MiddleName,
        LastName: data[0]?.LastName,
        Dob: data[0]?.Dob,
        Gender: data[0]?.Gender
      })
      console.log(data)
    })
  }
  Update(){
    console.log("data updated")
    this.helperService.putUserById(this.objectId,this.myForm.value).subscribe(data=>{
      alert('Sucessfully Updated')
      this.router.navigate(['/read'])
    })
  }

}
