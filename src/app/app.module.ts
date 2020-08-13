import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

import { HeaderComponent } from './components/header/header.component';
import { BallSelectorComponent } from './components/ball-selector/ball-selector.component';
import { BetSlipComponent } from './components/bet-slip/bet-slip.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BallSelectorComponent,
    BetSlipComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
