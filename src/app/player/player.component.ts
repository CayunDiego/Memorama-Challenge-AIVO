import { Component, Input, OnInit } from '@angular/core';
import { PlayerInterface } from '../shared/models/player.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() data: PlayerInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
