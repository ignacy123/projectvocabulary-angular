import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    TopComponent,
    BottomComponent,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
    ],
  declarations: [TopComponent, BottomComponent]
})
export class LayoutModule { }
