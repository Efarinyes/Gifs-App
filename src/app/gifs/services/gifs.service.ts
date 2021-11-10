import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


   private apiKey: string = 'htuoKEiPlqkDM2Eqo1iTLMPM7klqGSvh'
   private url = 'https://api.giphy.com/v1/gifs'
   private _historial: string[] = []
   public trobats: Gif[] = []


   get historial() {
     
     return [...this._historial]
   }

   constructor( private http: HttpClient ) {

       this._historial = JSON.parse(localStorage.getItem('historial')!) || []
       this.trobats = JSON.parse(localStorage.getItem('resultats')!) || []
      //  if( localStorage.getItem('historial')) {
      //     this._historial = JSON.parse(localStorage.getItem('historial')!)
      // }
   }

   cercaGifs( terme: string) {
  
       terme = terme.trim().toLowerCase() 
       
      if ( !this._historial.includes(terme)) {
        this._historial.unshift(terme)
        this._historial = this._historial.splice(0,10)

        localStorage.setItem('historial', JSON.stringify(this._historial) )
        
      }
    
    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '12')
          .set('q', terme );

      this.http.get<SearchGifsResponse>(`${this.url}/search`, { params })
                .subscribe( (resp ) => {
                  
                  this.trobats = resp.data
                  localStorage.setItem('resultats', JSON.stringify(this.trobats))
                })

    }
}
