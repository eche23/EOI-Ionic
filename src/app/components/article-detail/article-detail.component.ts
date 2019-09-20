import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../../types/blog-types';
import { ActivatedRoute } from '@angular/router';
import { BlogManagerService } from 'app/services/blog-manager/blog-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'blog-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit, OnDestroy {

  private article: Article;
  private article$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private blogManager: BlogManagerService
  ) { }

  public ngOnInit(): void {
    const articleNumber = parseInt(this.route.snapshot.params.id, 10);
    this.article$ = this.blogManager.getArticle(articleNumber).subscribe(article => {
      this.article = article;
    });
  }

  public ngOnDestroy(): void {
    this.article$.unsubscribe();
  }

}
