import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'la-about-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('aboutMeInfo', { read: ElementRef }) aboutMeInfo: ElementRef;
  @ViewChild('aboutMePhoto', { read: ElementRef }) aboutMePhoto: ElementRef;

  constructor(private utilityService: UtilityService) {

  }

  ngAfterViewInit(): void {
    this.registerAnimations();
  }

  private registerAnimations() {
    this.utilityService.addFadeInAnimation(this.aboutMeInfo.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.aboutMePhoto.nativeElement, 500);
  }
}
