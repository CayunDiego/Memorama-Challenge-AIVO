import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  time: number = 10;

  constructor() { }

  ngOnInit(): void {
    this.intervalTimer();
  }

  intervalTimer(){
    let intervalId = setInterval(() => {
      this.time = this.time - 1;
      if(this.time === 0) clearInterval(intervalId)
    }, 1000);
  }

}
