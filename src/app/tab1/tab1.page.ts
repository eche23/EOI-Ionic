import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogManagerService } from 'app/services/blog-manager/blog-manager.service';
import { Article } from 'app/types/blog-types';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  public articles: Article[];
  private articles$: Subscription;

  constructor(
    private blogManager: BlogManagerService,
    private nav: NavController) {}


  public ngOnInit(): void {
    this.blogManager.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

  public articleTrancking(index: number): number {
    return index;
  }

  public goToArticle(index: number): void{
    this.nav.navigateForward(['tabs', 'tab1', 'article-detail', index]);
  }

  public ngOnDestroy(): void {
    this.articles$.unsubscribe();
  }
}
