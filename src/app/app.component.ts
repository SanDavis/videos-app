import { Component } from '@angular/core';
import { VideosService } from './services/videos.service';
import { Video } from './interfaces/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private videosService: VideosService) {
    this.videosService.getVideos().subscribe((respuesta)=>{
      respuesta.forEach((r)=> console.log(r.nombre));
    });
  }
}
