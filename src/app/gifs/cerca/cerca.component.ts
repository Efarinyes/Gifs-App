import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styles: [
  ]
})

export class CercaComponent  {

  @ViewChild('txtCercar') txtCercar!: ElementRef<HTMLInputElement>

  constructor(private gifService: GifsService) {}

  cercar() {
    const valor = this.txtCercar.nativeElement.value
    
    if ( valor.trim().length === 0) {
      return
    }

    this.gifService.cercaGifs(valor)
    this.txtCercar.nativeElement.value = ''
  }  
}
