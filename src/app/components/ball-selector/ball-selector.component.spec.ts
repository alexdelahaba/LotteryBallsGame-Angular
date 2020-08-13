import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallSelectorComponent } from './ball-selector.component';
import { Ball } from '../../balls.data';
import { BallService } from '../../services/ball.service';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;

  let ballMock: Ball = { classColor: '#43AABA', number: 1, chosen: false };
  let service = new BallService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BallSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    component = new BallSelectorComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listenToPlaceBet on init', () => {
    const spy = spyOn(component, 'listenToPlaceBet').and.callFake(() => {
      return true;
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should return a winner ball', () => {
    component.randomizeSelection();
    expect(component.winnerBall.number).toBeGreaterThanOrEqual(1);
  });

  it('should reset the game', () => {
    component.resetGame();
    expect(component.playingGame).toBeFalse();
    expect(component.win).toBeFalse();
    expect(component.showResult).toBeFalse();
  });

  it('should call the service', () => {
    const spy = spyOn(service, 'changeSelection').and.callFake(() => {
      return true;
    });
    component.chooseBallToPlay(ballMock);
    expect(spy).toHaveBeenCalled();
  });
});
