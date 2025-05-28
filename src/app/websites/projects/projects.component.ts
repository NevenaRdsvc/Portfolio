import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { UtilityService } from '../../shared/services/utility.service';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'la-projects',
  imports: [ProjectComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('sanobot', { read: ElementRef }) sanobot: ElementRef;
  @ViewChild('idealWedding', { read: ElementRef }) idealWedding: ElementRef;
  @ViewChild('fonboard', { read: ElementRef }) fonboard: ElementRef;
  @ViewChild('brandedGames', { read: ElementRef }) brandedGames: ElementRef;

  constructor(private utilityService: UtilityService) {

  }

  ngAfterViewInit(): void {
    this.registerAnimations();
  }

  private registerAnimations() {
    this.utilityService.addFadeInAnimation(this.sanobot.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.idealWedding.nativeElement, 500);
    this.utilityService.addFadeInAnimation(this.fonboard.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.brandedGames.nativeElement, 500);
  }
}
