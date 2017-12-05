import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports:[
    TopComponent,
    BottomComponent,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule
    ],
  declarations: [TopComponent, BottomComponent]
})
export class LayoutModule { }
