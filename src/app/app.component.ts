import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { register } from 'swiper/element/bundle';

import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { LS_USER_LANGUAGE } from './shared/constants';

@Component({
  selector: 'la-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NavbarComponent,SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
  showLoadingSpinner = true;

  constructor(private translateService: TranslateService) {
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

  ngAfterViewInit(): void {
    register();
  }
}
