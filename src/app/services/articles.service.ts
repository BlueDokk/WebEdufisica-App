import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  data:any = [];


  constructor() { 
    console.log('Servicio ARTICLES listo para usarse');
  }

  async getArticles(){
    
    const response = await fetch('../../../assets/json/data-articles.json');
    const data = await response.json();
    return data;
  }
}
export interface Articles {
  title: string,
  article: string,
  img: string
}
