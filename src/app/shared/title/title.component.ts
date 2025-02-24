import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'la-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() number: string = '';
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
