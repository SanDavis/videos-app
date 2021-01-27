import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) { }


  getVideos():Observable<Video[]>{ //Observale equivale a un Future
    return this.http.get<Video[]>('http://18.191.217.192/api/videos.php');
  }

}
