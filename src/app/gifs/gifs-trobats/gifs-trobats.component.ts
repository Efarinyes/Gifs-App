import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-trobats',
  templateUrl: './gifs-trobats.component.html',
  styles: [
  ]
})
export class GifsTrobatsComponent {

  get trobats() {
    return this.gifService.trobats
  }

  constructor( private gifService: GifsService) { }

  

}
