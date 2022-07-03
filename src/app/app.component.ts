import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // inputMsgForChild ="Hey child comp from parent comp"
  title = 'SAS Broadband';
  // getValuesFromChild(event:any){
  //   console.log(event)
  // }
}
