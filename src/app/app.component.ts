import { Component } from '@angular/core';
import { VideosService } from './services/videos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private videosService: VideosService) {
    this.videosService.getVideos().subscribe((respuesta)=>console.log(respuesta));
  }
}
