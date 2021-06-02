import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PlayerInterface } from '../shared/models/player.interface';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {

  @Output() clickPropagate = new EventEmitter();
  @Input() players: PlayerInterface[];

  constructor() { }

  ngOnInit(): void {
  }

  clickStart(){
    this.clickPropagate.emit();
  }

}
