import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import PostModel from '../model/postsmodel';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
