import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, map } from 'rxjs/operators';

import { JsonPlaceholderService } from './services/json-placeholder.service';
import PostModel from './model/postsmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  values = '';
  posts: PostModel[];
  postsLocal: PostModel[];
  subject = new Subject<PostModel[]>();
  subjectPosts = new Subject<any>();

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.subject.pipe(
      switchMap(() => this.jsonPlaceholderService.getPosts())
    ).subscribe(resp => {
      this.posts = resp;
      this.postsLocal = resp;
    });

    this.subjectPosts.pipe(
      debounceTime(1000),
      map((event) => {
        return this.postsLocal.filter((post) => {
          return post.title.includes(event.target.value);
        });
      })
    ).subscribe(resp => this.posts = resp);
  }

  onKeyUp(event: any): void {
    this.subjectPosts.next(event);
  }
}
