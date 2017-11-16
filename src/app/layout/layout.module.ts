import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    TopComponent,
    BottomComponent
  ],
  declarations: [TopComponent, BottomComponent]
})
export class LayoutModule { }
