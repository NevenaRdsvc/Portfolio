import { AfterViewInit, Component, ElementRef, OnInit, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'la-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  private translate = inject(TranslateService);
  isIntersecting: boolean = false;
  private observer: IntersectionObserver | null = null;

  constructor(private host: ElementRef) {}

  ngOnInit() {
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

  ngAfterViewInit() {
    if (this.isIntersecting) {
      this.initializeTypewriter();
    }
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

  skills = [
    { name: 'Photoshop' },
    { name: 'Illustrator' },
    { name: 'After Effects' },
    { name: 'InDesign' },
    { name: 'Figma' },
    { name: 'Blender' },
    { name: 'Video Editing' },
    { name: 'Krita' },
    { name: 'labelMain.animations' },
    { name: 'labelMain.graphicDrawing' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'Angular' },
    { name: 'C#' },
    { name: 'labelMain.german' },
    { name: 'labelMain.english' },
    { name: 'labelMain.spanish' }
  ];
}
