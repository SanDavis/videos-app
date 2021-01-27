import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) { }

  
  getVideos(){
    return this.http.get('http://18.191.217.192/api/videos.php');
  }
  
}
