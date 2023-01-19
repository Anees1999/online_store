import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  //getweatherdata(cityName:string){
    //this.http.get(environment.weatherApiBaseUrl,{
     // headers:new HttpHeaders()
      //.set(environment.XRapidAPIHosttHeaderName,environment.XRapidAPIHostHeaderValue)
     // .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
      //params:new HttpParams()
      //.set('q',cityName)
      //.set('units','metrics')
     // .set('mode','json')
   // })
 // }
}
