import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuiasService {

  data:any = [];


  constructor() {
    console.log('Servicio GUIAS listo para usarse');
  }

  async getGuias(){
    
    const response = await fetch('../../../assets/json/data-guias.json');
    const data = await response.json();
    return data;
  }

}
