import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../models/post.model'


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }
  
  getPosts() :Observable<Post[]>{
    return this.http.get<Post[]>(this.url)
  }
  
  getPost(id:number):Observable<Post>{
    return this.http.get<Post>(`${this.url}/${id}`)
  }

  addPost(post:Post):Observable<Post>{
    return this.http.post<Post>(`${this.url}`,post)
  }
  deletePost(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
