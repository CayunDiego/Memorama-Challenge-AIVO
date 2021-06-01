import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CardInterface } from '../shared/models/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state("1", style({
        transform: 'none',
      })),
      state('2', style({
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('3', style({
        transform: 'perspective(600px) rotateY(180deg)',
        backgroundImage: "url(https://i.pinimg.com/originals/26/05/18/2605189d1689f4f9aa9bb2a78f08b9b1.gif)"
      })),
      transition('1 => 2', [
        animate('400ms')
      ]),
      transition('2 => 1', [
        animate('400ms')
      ]),
      transition('* => 3', [
        animate('400ms')
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() data: CardInterface;

  @Output() clickPropagate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  propagateClick(){
    this.clickPropagate.emit();
  }

}