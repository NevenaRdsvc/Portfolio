import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'la-color-text-card',
  imports: [TranslatePipe],
  templateUrl: './color-text-card.component.html',
  styleUrls: ['./color-text-card.component.scss']
})
export class ColorTextCardComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() aboutText: string = '';
  @Input() taskText: string = '';
  
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

          setTimeout(() => {
            this.observer?.unobserve(this.host.nativeElement);
          }, 100);
        }
      });
    }, options);

    this.observer.observe(this.host.nativeElement);
  }
}
