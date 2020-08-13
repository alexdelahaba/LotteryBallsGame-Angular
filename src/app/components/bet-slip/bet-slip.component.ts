import { Component, OnInit } from '@angular/core';
import { BallService } from '../../services/ball.service';
import { Ball } from '../../balls.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss'],
})
export class BetSlipComponent implements OnInit {
  chosenBall: Ball;
  betForm: FormGroup;
  playing = false;
  constructor(public ballService: BallService, private fb: FormBuilder) {
    this.betForm = this.fb.group({
      stake: ['', [Validators.required, Validators.min(5)]],
    });
  }

  ngOnInit(): void {
    this.listenToBallChanges();
  }

  playGame(betForm: FormGroup) {
    this.playing = true;
    if (betForm.status === 'VALID' && this.chosenBall) {
      if (
        betForm.value.stake <= this.ballService.currentFunds &&
        this.playing
      ) {
        this.ballService.currentFunds -= betForm.value.stake;
        this.ballService.betMade = betForm.value.stake;
        this.ballService.observableChosenBall.next(true);
      }
    }

    setTimeout(() => {
      this.playing = false;
    }, 3000);
  }

  listenToBallChanges() {
    this.ballService.observableChosenBall
      .pipe(filter((value) => value !== true))
      .subscribe((resp: Ball) => {
        this.chosenBall = resp;
      });
  }
}
