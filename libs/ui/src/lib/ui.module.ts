import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { UiComponent } from './ui.component';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './component/alert/alert.component';

@NgModule({
  declarations: [UiComponent, LoaderComponent, AlertComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  exports: [UiComponent, LoaderComponent, AlertComponent]
})
export class UiModule {}
