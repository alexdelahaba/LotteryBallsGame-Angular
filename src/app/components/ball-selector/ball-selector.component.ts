import { Component, OnInit } from '@angular/core';
import { balls, Ball } from '../../balls.data';
import { BallService } from '../../services/ball.service';
import { filter } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss'],
})
export class BallSelectorComponent implements OnInit {
  ballData = balls;
  playingGame = false;
  winnerBall: Ball;
  win = false;
  showResult = false;
  constructor(public ballService: BallService) {}

  ngOnInit(): void {
    this.listenToPlaceBet();
  }

  chooseBallToPlay(ball: Ball) {
    this.ballService.changeSelection(ball);
  }

  listenToPlaceBet() {
    this.ballService.observableChosenBall
      .pipe(filter((value) => value === true))
      .subscribe((resp) => {
        this.showResult = false;
        console.log(resp);
        this.playingGame = true;
        this.randomizeSelection();
      });
  }

  randomizeSelection() {
    this.winnerBall = this.ballData[Math.floor(Math.random() * 10)];
    const interval = setInterval(() => {
      this.winnerBall = this.ballData[Math.floor(Math.random() * 10)];
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      this.showResult = true;
      if (this.winnerBall === this.ballService.chosenBall) {
        this.win = true;
        this.ballService.currentFunds += this.ballService.betMade * 1.5;
      }
    }, 3000);
  }

  resetGame() {
    this.playingGame = false;
    this.win = false;
    this.showResult = false;
  }
}
