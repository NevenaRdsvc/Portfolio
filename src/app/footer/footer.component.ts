import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'la-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('wrapper', { read: ElementRef }) wrapper: ElementRef;
  @ViewChild('text', { read: ElementRef }) text: ElementRef;

  constructor(private utilityService: UtilityService) {

  }

  ngAfterViewInit(): void {
    this.registerAnimations();
  }

  private registerAnimations() {
    this.utilityService.addFadeInAnimation(this.wrapper.nativeElement, 500);
    this.utilityService.addFadeInAnimation(this.text.nativeElement, 500);
  }
}
