import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import Typewriter from 'typewriter-effect/dist/core';

import { ExperienceBlockComponent } from './experience-block/experience-block.component';

@Component({
  selector: 'la-experience',
  imports: [TranslatePipe, ExperienceBlockComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  isIntersecting: boolean = false;

  private typewriterWritedOnce: boolean;
  private translatedText: string = '';
  private observer: IntersectionObserver | null = null;

  constructor(private host: ElementRef, private translate: TranslateService) { }

  ngOnInit() {
    this.translatedText = this.translate.instant('labelExperience.experience');
    this.translate.onLangChange.subscribe(_ => { 
      this.translatedText = this.translate.instant('labelExperience.experience');

      if (this.typewriterWritedOnce) {
        this.initializeTypewriter();
      }
    }
    );

    const options = {
      root: null,
      rootMargin: '-200px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isIntersecting = true;
          this.initializeTypewriter();

          setTimeout(() => {
            this.observer?.unobserve(this.host.nativeElement);
          }, 100);
        }
      });
    }, options);

    this.observer.observe(this.host.nativeElement);
  }

  private initializeTypewriter() {
    const titleElement = document.getElementById('typewriter-title-experience');

    if (titleElement) {
      new Typewriter(titleElement, {
        loop: false,
        delay: 75,
      })
        .typeString(this.translatedText)
        .pauseFor(1000)
        .start();

        this.typewriterWritedOnce = true;
    }
  }
}
