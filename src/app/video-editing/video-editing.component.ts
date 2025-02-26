import { Component } from '@angular/core';

import { VideoEditingSectionComponent, VideoSection } from './video-editing-section/video-editing-section.component';

@Component({
  selector: 'la-video-editing',
  imports: [VideoEditingSectionComponent],
  templateUrl: './video-editing.component.html',
  styleUrl: './video-editing.component.scss'
})
export class VideoEditingComponent {
  fonVideos: VideoSection[] = [
    {
      type: "video/mp4",
      videoSrc: "assets/videos/building.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/fon-55.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/fonboarding.mp4",
      videoPoster: "assets/images/video-cover.jpg",
      isMuted: true,
      isLoop: false,
      isAutoplay: false,
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/pm-forum.mp4",
      videoPoster: "assets/images/video-cover-pm.jpg",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/sah.mp4",
      videoPoster: "assets/images/video-cover-sah.png",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/summer-school.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
    },
  ];
}
