import { Injectable } from '@angular/core';
import { Ball, balls } from '../balls.data';
import { Observable, Subscriber, Subject } from 'rxjs';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class BallService {
  ballData: Ball[] = balls;
  observableChosenBall = new Subject<Ball | boolean>();
  chosenBall: any = {};
  currentFunds: number = 50;
  betMade: number = 0;
  constructor() {}

  changeSelection(ball: Ball) {
    this.ballData.forEach((ball) => (ball.chosen = false));
    ball.chosen = !ball.chosen;
    this.chosenBall = ball;
    this.observableChosenBall.next(ball);
  }
}
