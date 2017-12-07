import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  result:any

  constructor(private _http: Http,private _httpClient: HttpClient) { }

  // returns an observable of a JSON object of type 
  // {success: bool, posts: Post[] }
  getPosts() {
    return this._http.get("/api/dashboard")
      .map(result => result.json())
    //.map(result => result.success ? result.posts : []) //fail silently
  }

  // return an observable of a JSON object of type
  // {success: bool, post: Post}
  getPost(id) {
    return this._http.get(`/api/dashboard/post/${id}`)
      .map(result => result.json())
  }

  makeTextPost(post) {
    console.log(post);
    let body = new URLSearchParams();
    body.append('title', post.title);
    body.append('body', post.body);
    body.append('tags', post.tags.join(','));
    console.log(body);
    return this._http.post('/api/posts/text', body).map(res => res.json());
  }

  makeImagePost(post) {
    let body = new URLSearchParams();
    console.log(post.imageUrl);
    body.append('url', post.imageUrl);
    body.append('caption',  post.caption);
    body.append('tags',     post.tags.join(','));
    return this._http.post('/api/posts/image', body).map(res => res.json());
  }

  refreshDashboard() {
    console.log("refreshing dashboard");
    this._http.get("/api/dashboard/refresh").subscribe(
      (res) => {
        if (!res.json().success) {
          alert("could not refresh dashboard");
          return false;
        } else {
          return true;
        }
      }
    );
  }

}
