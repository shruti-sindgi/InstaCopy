import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllPosts(count?) {
    return this.http.get(`https://picsum.photos/v2/list?page=2&limit=${count ? count : 100}`);
  }
}
