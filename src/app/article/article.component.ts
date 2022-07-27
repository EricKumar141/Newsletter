import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../interfaces/article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() articles: Article;
  @Output() newColor = new EventEmitter();
  clicked: boolean = false;
  constructor() {}
  changeColor() {
    this.newColor.emit(this.articles.color);
    this.clicked = !this.clicked;
  }
  ngOnInit() {}
}
