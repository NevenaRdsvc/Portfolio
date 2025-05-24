import { Component } from '@angular/core';

import { VideoEditingSectionComponent, VideoSection } from './video-editing-section/video-editing-section.component';

@Component({
  selector: 'la-video-editing',
  imports: [VideoEditingSectionComponent],
  templateUrl: './video-editing.component.html',
  styleUrls: ['./video-editing.component.scss']
})
export class VideoEditingComponent {
  fonVideos: VideoSection[] = [
    {
      type: "video/mp4",
      videoSrc: "assets/videos/building.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/fon-55.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/fonboarding.mp4",
      videoPoster: "assets/images/video-cover.jpg",
      isMuted: true,
      isLoop: false,
      isAutoplay: false,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/pm-forum.mp4",
      videoPoster: "assets/images/video-cover-pm.jpg",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/sah.mp4",
      videoPoster: "assets/images/video-cover-sah.png",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/summer-school.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
  ];

  fonisVideos: VideoSection[] = [
    {
      type: "video/mp4",
      videoSrc: "assets/videos/hzs-banner.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      videoPoster: "assets/images/hzs-banner-cover.png",
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/tizer.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/hzs-open.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/throwback.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/hzs-closed.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/hzs-partners.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      videoPoster: "assets/images/hzs-partners-cover.png",
      hasControls:true
    },
  ];

  mojeTapeteVideos: VideoSection[] = [
    {
      type: "video/mp4",
      videoSrc: "assets/videos/children-room.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/room.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      hasControls:true
    },
    {
      type: "video/mp4",
      videoSrc: "assets/videos/big-room.mp4",
      isMuted: true,
      isLoop: true,
      isAutoplay: true,
      videoPoster: "assets/images/cover-sala.png",
      hasControls:true
    },
  ];
}
