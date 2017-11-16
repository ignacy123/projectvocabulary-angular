import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports:[
    TopComponent,
    BottomComponent,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [TopComponent, BottomComponent]
})
export class LayoutModule { }
