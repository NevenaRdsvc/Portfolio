import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { ButtonComponent } from '../shared/button/button.component';
import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'la-hero',
  imports: [TranslatePipe, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('projectsButton', { read: ElementRef }) projectsButton: ElementRef;
  @ViewChild('behanceButtonWrapper', { read: ElementRef }) behanceButtonWrapper: ElementRef;

  texts: string[] = ['labelMain.designer', 'labelMain.uiUxDesigner', 'labelMain.graphicDesigner', 'labelMain.videoEditor'];
  translatedTexts: string[] = [];

  constructor(private translate: TranslateService, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.translatedTexts = this.texts.map(key => this.translate.instant(key));
    this.translate.onLangChange.subscribe(_ => {
      this.translatedTexts = this.texts.map(key => this.translate.instant(key));
    });
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    this.registerAnimations();
  }

  private registerAnimations() {
    this.utilityService.addFadeInAnimation(this.projectsButton.nativeElement, -500);
    // this.utilityService.addFadeInAnimation(this.behanceButtonWrapper.nativeElement, 500);
  }
}
