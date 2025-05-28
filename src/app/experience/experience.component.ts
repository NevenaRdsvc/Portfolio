import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { UtilityService } from '../shared/services/utility.service';
import { ExperienceBlockComponent } from './experience-block/experience-block.component';

@Component({
  selector: 'la-experience',
  imports: [TranslatePipe, ExperienceBlockComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChild('heading', { read: ElementRef }) heading: ElementRef;

  constructor(private utilityService: UtilityService) { }

  ngAfterViewInit(): void {
    this.registerAnimations();
  }

  private registerAnimations() {
    this.utilityService.addFadeInAnimation(this.heading.nativeElement, -500);
  }
}
