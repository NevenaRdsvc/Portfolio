import { Component, HostBinding, Input } from '@angular/core';

export interface VideoSection {
  type: string;
  videoSrc: string;
  videoPoster?: string | null;
  isMuted: boolean;
  isLoop: boolean;
  isAutoplay: boolean;
  hasControls:boolean;
}

@Component({
  selector: 'la-video-editing-section',
  imports: [],
  templateUrl: './video-editing-section.component.html',
  styleUrl: './video-editing-section.component.scss'
})
export class VideoEditingSectionComponent {
  @Input() logoUrl: string;
  @Input() videos: VideoSection[] = [];

  @Input()
  @HostBinding('class.medium-card')
  isMediumCard: boolean = false;

  playVideo(video: HTMLVideoElement) {
    video.play();
  }
}
