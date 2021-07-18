import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  data: any = [];

  constructor() { 
    console.log('Servicio VIDEOS listo para usarse')
  }

  async getVideos(){
    
    const response = await fetch('../../../assets/json/data-videos.json');
    const data = await response.json();
    return data;
  }

}
