import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  result: any

  constructor(private _http: Http) { }

  getProfile(url) {
    console.log("got request for url " + url);
    return this._http.get(`/api/profile/${url}`)
      .map(result => result.json());
  }
}

