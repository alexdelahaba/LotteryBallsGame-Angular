import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { BallService } from '../../services/ball.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public ballService: BallService) {}

  ngOnInit(): void {}
}
