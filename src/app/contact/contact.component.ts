import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'la-contact',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('heading', { read: ElementRef }) heading: ElementRef;
  @ViewChild('email', { read: ElementRef }) email: ElementRef;
  @ViewChild('phone', { read: ElementRef }) phone: ElementRef;
  @ViewChild('button', { read: ElementRef }) button: ElementRef;

  constructor(private utilityService: UtilityService) {

  }

  ngAfterViewInit(): void {
    this.registerAnimations();
  }

  private registerAnimations() {
    this.utilityService.addFadeInAnimation(this.heading.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.email.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.phone.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.button.nativeElement, -500);
  }
}

