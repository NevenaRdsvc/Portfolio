import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import Typewriter from 'typewriter-effect/dist/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'la-skill',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(180deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active <=> inactive', animate('500ms ease-in-out'))
    ])
  ]
})
export class SkillComponent implements AfterViewInit {
  private translate = inject(TranslateService);
  isIntersecting: boolean = false;
  private observer: IntersectionObserver | null = null;
  currentSkillIndex = 0; 
  
  skills = [
    { name: 'Design', icon: 'assets/images/web-design-icon.png', flip: 'inactive' },
    { name: 'Media Producion', icon: 'assets/images/design-icon.png', flip: 'inactive' },
    { name: 'Development', icon: 'assets/images/coding-icon.png', flip: 'inactive' }
  ];
  

  constructor(private host: ElementRef) {}

  ngAfterViewInit() {
  
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isIntersecting = true;
          this.initializeTypewriter();
          this.startAutomaticRotation(); 

          this.observer?.unobserve(this.host.nativeElement);
        }
      });
    }, { root: null, rootMargin: '-200px', threshold: 0 });

    this.observer.observe(this.host.nativeElement);
  }

  private initializeTypewriter() {
    const titleElement = document.getElementById('typewriter-title-skills');

    if (titleElement) {
      const translatedText = this.translate.instant('labelSkills.skillsTitle');

      new Typewriter(titleElement, {
        loop: false,
        delay: 75,
      })
        .typeString(translatedText)
        .pauseFor(1000)
        .start();
    }
  }
  startAutomaticRotation() {
    let skillIndex = 0;
    const totalSkills = this.skills.length;
  
    const interval = setInterval(() => {
      this.skills[skillIndex].flip = 'active';
      skillIndex++;
  
      if (skillIndex >= totalSkills) {
        clearInterval(interval);
      }
    }, 500);
  }
}
