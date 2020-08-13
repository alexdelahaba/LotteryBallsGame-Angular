import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AngularMaterialModule {}
