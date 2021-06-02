import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnChanges  {

  //10 seconds
  time: number = 10;
  @Input() togglePlayer: boolean;
  @Output() togglePlayertEmitter = new EventEmitter<boolean>();

  intervalId:  ReturnType<typeof setTimeout>;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges() {
    clearInterval(this.intervalId);
    this.time = 10;
    this.intervalTimer();
  }

  intervalTimer(){
    this.intervalId = setInterval(() => {
      if(this.time !== 0){
        this.time = this.time - 1;
      } else {
          this.toggleByTimer();
      }
    }, 1000);
  }

  toggleByTimer(){
    this.togglePlayertEmitter.emit();
  }
}
