import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { ReadMoreComponent } from '../../shared/read-more/read-more.component';
import { UtilityService } from '../../shared/services/utility.service';

@Component({
  selector: 'la-experience-block',
  imports: [ReadMoreComponent],
  templateUrl: './experience-block.component.html',
  styleUrl: './experience-block.component.scss'
})
export class ExperienceBlockComponent implements AfterViewInit {
  @Input() title: string;
  @Input() description: string;

  @ViewChild('text', { read: ElementRef }) text: ElementRef;

  constructor(private utilityService: UtilityService) { }

  ngAfterViewInit(): void {
    this.registerAnimations();
  }

  private registerAnimations() {
    this.utilityService.addFadeInAnimation(this.text.nativeElement, 500);
  }
}
