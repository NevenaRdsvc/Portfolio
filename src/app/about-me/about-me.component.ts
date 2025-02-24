import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'la-about-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  isIntersecting: boolean = false;

  // Do injection as it is done in app.component with constructor
  private observer: IntersectionObserver | null = null;

  constructor(private host: ElementRef, private translate: TranslateService) {

  }

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: '-200px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries, _) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isIntersecting = true;
          this.initializeTypewriter();

          setTimeout(() => {
            this.observer.unobserve(this.host.nativeElement);
          }, 100);
        }
      });
    }, options);

    this.observer.observe(this.host.nativeElement);
  }

  private initializeTypewriter() {
    const titleElement = document.getElementById('typewriter-title');

    if (titleElement) {
      const translatedText = this.translate.instant('labelMain.aboutMe');

      new Typewriter(titleElement, {
        loop: false,
        delay: 75,
      })
        .typeString(translatedText)
        .pauseFor(1000)
        .start();
    }
  }
}
