import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { filter } from 'rxjs';

import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';
import { ExperienceComponent } from '../experience/experience.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { SkillsComponent } from '../skills/skills.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'la-home',
  imports: [
    RouterOutlet,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    HeroComponent,
    FooterComponent,
    ContactComponent,
    TranslatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  projectsActiveType: string = '';

  constructor(private router: Router) { }

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

  redirect(url: string) {
    this.router.navigate([`/home/${url}`]);
  }
}


