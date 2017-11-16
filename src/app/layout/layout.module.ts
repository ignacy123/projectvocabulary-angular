import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    TopComponent,
    BottomComponent,
    MatToolbarModule
  ],
  declarations: [TopComponent, BottomComponent]
})
export class LayoutModule { }
