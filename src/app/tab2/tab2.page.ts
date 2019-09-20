import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogManagerService } from 'app/services/blog-manager/blog-manager.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public createArticleForm: FormGroup;

  constructor(private blogManager: BlogManagerService) {}

  public ngOnInit(): void {
    this.createArticleForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      writtenBy: new FormControl('', [Validators.required]),
      contentPreview: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      mainImg: new FormControl('', [Validators.required]),
    });
  }

  public createArticle(): void {
    this.blogManager.createArticle(this.createArticleForm.value);
  }
}
