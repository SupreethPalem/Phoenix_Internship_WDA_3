import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // bool = false
  // @Input() inputMsgFromParent!:string
  // @Output() outputMsgForParent:EventEmitter<string>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
Submit(){
  // this.bool=!this.bool
  // console.log(this.inputMsgFromParent)
  // this.outputMsgForParent.emit('hey from child comp to parent comp')
}
}
