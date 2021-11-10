import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { CercaComponent } from './cerca/cerca.component';
import { GifsTrobatsComponent } from './gifs-trobats/gifs-trobats.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    CercaComponent,
    GifsTrobatsComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
