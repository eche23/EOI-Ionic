import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogManagerService } from 'app/services/blog-manager/blog-manager.service';
import { Article } from 'app/types/blog-types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  public articles: Article[];
  private articles$: Subscription;

  constructor(private blogManager: BlogManagerService) {}


  public ngOnInit(): void {
    this.blogManager.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

  public ngOnDestroy(): void {
    this.articles$.unsubscribe();
  }
}
