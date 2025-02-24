import { AfterViewInit, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'la-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  texts: string[] = ['labelMain.designer', 'labelMain.uiUxDesigner', 'labelMain.graphicDesigner', 'labelMain.videoEditor'];
  translatedTexts: string[] = [];

  constructor(private translate: TranslateService) {}

  ngAfterViewInit() {
    this.translate.get(this.texts).subscribe((translations) => {
      this.translatedTexts = this.texts.map(key => translations[key]);

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
    });
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
