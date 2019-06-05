import { Component, OnInit } from '@angular/core';

import { JsonPlaceholderService } from './services/json-placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts = [];

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.jsonPlaceholderService.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(results => this.posts = results);
  }
}
