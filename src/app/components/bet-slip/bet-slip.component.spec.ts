import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSlipComponent } from './bet-slip.component';
import { BallService } from '../../services/ball.service';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';
import { Ball } from '../../balls.data';
describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let service = new BallService();
  let ballMock: Ball = { classColor: '#43AABA', number: 1, chosen: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BetSlipComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    component = new BetSlipComponent(service, new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain stake in the form', () => {
    expect(component.betForm.contains('stake')).toBeTruthy();
  });
  it('stake should be required and greater than 5', () => {
    let control = component.betForm.get('stake');
    control.setValue('');
    expect(control.valid).toBeFalsy();
    control.setValue(0);
    expect(control.valid).toBeFalsy();
  });

  it('should call the listenToBallChanges when on init', () => {
    const spy = spyOn(component, 'listenToBallChanges').and.callFake(() => {
      return true;
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should turn playing into true', () => {
    component.playGame(component.betForm);
    expect(component.playing).toBe(true);
    setTimeout(() => {
      expect(component.playing).toBe(false);
    }, 3500);
  });
});
