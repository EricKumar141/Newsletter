import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NewsComponent, ArticleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
