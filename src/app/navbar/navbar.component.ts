import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LS_USER_LANGUAGE } from '../shared/constants';

// Kreiranje loadera za učitavanje JSON fajlova
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'la-navbar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // englishLanguage =

  constructor(private translateService: TranslateService) { }


  changeLanguage(language: 'en' | 'rs' | 'ger') {
    this.translateService.setDefaultLang(language);
    localStorage.setItem(LS_USER_LANGUAGE, language);
    this.translateService.use(language);
  }  


  goToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
