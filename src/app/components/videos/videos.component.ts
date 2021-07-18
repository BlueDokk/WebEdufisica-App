import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  dataVideos: any = [];
  videoUrl: string = "";
  videoTitle:string =""

  getVideoUrl(event: any){

    this.videoUrl = event.target.getAttribute('data-videoUrl');
    this.videoTitle = event.target.getAttribute('data-title');
    
    this.changeUrl();

  }

  changeVideoTitle(){

    var videoTitle = document.getElementById('video-title');
    if(videoTitle != null){
      videoTitle.innerHTML = this.videoTitle; 
    }

  }

  changeUrl(){

    var video = document.getElementById('video');
    

    if (video != null) {

      video.setAttribute('src', this.videoUrl);
      
      this.changeVideoTitle()
    }


  }



  constructor(private _videosService: VideosService) { }

  ngOnInit(): void {
    (async () => this.dataVideos = await this._videosService.getVideos())();






  }

}
