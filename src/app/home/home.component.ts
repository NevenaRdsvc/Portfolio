import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { filter } from 'rxjs';
import Typewriter from 'typewriter-effect/dist/core';

import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';
import { ExperienceComponent } from '../experience/experience.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'la-home',
  imports: [
    RouterOutlet,
    AboutMeComponent,
    ExperienceComponent,
    HeroComponent,
    FooterComponent,
    ContactComponent,
    SkillComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  projectsActiveType: string = '';
  translatedProjectTitle: string = '';

  private typewriterInitialized: boolean = false;
  private observer: IntersectionObserver | null = null;

  constructor(
    private router: Router,
    private elRef: ElementRef,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    const routeSegments = this.router.url.split('/');
    this.projectsActiveType = routeSegments[routeSegments.length - 1];

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const routeSegments = event.urlAfterRedirects.split('/');
        this.projectsActiveType = routeSegments[routeSegments.length - 1];
      });

    this.translatedProjectTitle = this.translate.instant('labelMain.projectTitle');

    this.translate.onLangChange.subscribe(() => {
      this.translatedProjectTitle = this.translate.instant('labelMain.projectTitle');
      if (this.typewriterInitialized) {
        this.initTypewriter();
      }
    });

    this.setupIntersectionObserver();
  }

  redirect(url: string) {
    this.router.navigate([`/home/${url}`]);
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '-200px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.initTypewriter();

          // Stop observing after animation
          setTimeout(() => {
            this.observer?.unobserve(entry.target);
          }, 100);
        }
      });
    }, options);

    const titleEl = this.elRef.nativeElement.querySelector('#typewriter-title-projects');
    if (titleEl) {
      this.observer.observe(titleEl);
    }
  }

  private initTypewriter() {
    const titleEl = this.elRef.nativeElement.querySelector('#typewriter-title-projects');

    if (titleEl) {
      titleEl.innerHTML = '';
      new Typewriter(titleEl, {
        loop: false,
        delay: 75
      })
        .typeString(this.translatedProjectTitle)
        .pauseFor(1000)
        .start();

      this.typewriterInitialized = true;
    }
  }
}
