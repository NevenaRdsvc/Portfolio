import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { register } from 'swiper/element/bundle';

import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { LS_USER_LANGUAGE } from './shared/constants';

@Component({
  selector: 'la-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
  showLoadingSpinner = true;

  constructor(private translateService: TranslateService, private router: Router, private zone: NgZone) {
    let languageToUse = environment.defaultLanguage;
    this.translateService.setDefaultLang(languageToUse);
    const savedLanguage = localStorage.getItem(LS_USER_LANGUAGE);

    if (savedLanguage) {
      languageToUse = savedLanguage;
    } else {
      localStorage.setItem(LS_USER_LANGUAGE, languageToUse);
    }

    this.translateService.use(languageToUse);
  }

  ngOnInit(): void {
    this.zone.onStable.subscribe(() => {
      this.showLoadingSpinner = false;
    });
  }

  ngAfterViewInit(): void {
    register();
  }
}
