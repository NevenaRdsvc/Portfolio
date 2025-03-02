import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'la-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  texts: string[] = ['labelMain.designer', 'labelMain.uiUxDesigner', 'labelMain.graphicDesigner', 'labelMain.videoEditor'];
  translatedTexts: string[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translatedTexts = this.texts.map(key => this.translate.instant(key));
    this.translate.onLangChange.subscribe(_ => {
      this.translatedTexts = this.texts.map(key => this.translate.instant(key));
      this.setTypewriter();
    });
  }

  ngAfterViewInit() {
    this.setTypewriter();
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  private setTypewriter() {
    const heroElement = document.getElementById('typewriter-hero');
      
    if (heroElement) {
      const typewriter = new Typewriter(heroElement, {
        loop: true,
        delay: 40,
        deleteSpeed: 50
      });

      this.translatedTexts.forEach((text) => {
        typewriter
          .typeString(text)
          .pauseFor(1000)
          .deleteAll();
      });

      typewriter.start();
    }
  }
}
