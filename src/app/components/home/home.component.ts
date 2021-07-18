import { Component, OnInit } from '@angular/core';
import { ArticlesService, Articles } from '../../services/articles.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Articles[] = [];

  constructor(private _articlesService: ArticlesService) { }

  ngOnInit(): void {

    (async () => this.articles = await this._articlesService.getArticles())();

  }
}


