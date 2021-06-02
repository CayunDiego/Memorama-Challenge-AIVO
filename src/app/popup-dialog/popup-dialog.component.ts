import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {

  @Output() clickPropagate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickStart(){
    this.clickPropagate.emit();
  }

}
