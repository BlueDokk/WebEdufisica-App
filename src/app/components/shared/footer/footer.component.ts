import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  yearDate:number=0;

  constructor() { 
    this.yearDate = new Date().getFullYear();
  }
  
  ngOnInit(): void {
  }

}
