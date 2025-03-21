import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'la-contact',
  standalone:true,
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  isIntersecting: boolean = false;

  private typewriterWritedOnce: boolean = false;
  private translatedText: string = '';
  private observer: IntersectionObserver | null = null;

  constructor(private host: ElementRef, private translate: TranslateService) {

  }

  ngOnInit(): void {
    this.translatedText = this.translate.instant('labelMain.contact');
    this.translate.onLangChange.subscribe(_ => { 
      this.translatedText = this.translate.instant('labelMain.contact');

      if (this.typewriterWritedOnce) {
        this.initializeTypewriter();
      }
    });

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
    const titleElement = document.getElementById('typewriter-title-contact');

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

