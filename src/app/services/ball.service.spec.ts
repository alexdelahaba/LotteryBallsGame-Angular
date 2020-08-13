import { TestBed } from '@angular/core/testing';

import { BallService } from './ball.service';
import { Ball } from '../balls.data';

describe('BallService', () => {
  let service: BallService;
  let ballMock: Ball = { classColor: '#43AABA', number: 1, chosen: false };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change the ball to chosen', () => {
    service.changeSelection(ballMock);
    ballMock.chosen = true;
    expect(service.chosenBall).toBe(ballMock);
    expect(service.chosenBall.chosen).toBe(true);
    expect(service.ballData[0].classColor).toBe(ballMock.classColor);
  });
});
