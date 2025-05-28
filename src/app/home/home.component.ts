import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { filter } from 'rxjs';

import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';
import { ExperienceComponent } from '../experience/experience.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { UtilityService } from '../shared/services/utility.service';
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
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('projectsHeading', { read: ElementRef }) projectsHeading: ElementRef;
  @ViewChild('buttonsWrapper', { read: ElementRef }) buttonsWrapper: ElementRef;

  projectsActiveType: string = '';

  constructor(
    private router: Router,
    private utilityService: UtilityService
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
  }

  ngAfterViewInit(): void {
    this.registerAnimations();
  }

  redirect(url: string) {
    this.router.navigate([`/home/${url}`]);
  }

  private registerAnimations() {
    this.utilityService.addFadeInAnimation(this.projectsHeading.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.buttonsWrapper.nativeElement, 500);
  }
}
