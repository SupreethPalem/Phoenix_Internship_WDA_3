import { Component, OnInit } from '@angular/core';
import { HelpserviceService } from '../helpservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
dataSource : any
displayedColumns =['_id', 'Email' ,'FirstName' ,'LastName', 'Dob' , 'Gender']
  constructor(private _helpservice:HelpserviceService) { }

  ngOnInit(): void {
    this._helpservice.getallUsers().subscribe(data=>{
      console.log(data)
      this.dataSource=data
    })
  }

}
