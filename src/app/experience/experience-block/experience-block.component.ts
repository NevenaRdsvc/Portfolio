import { Component, Input } from '@angular/core';

import { ReadMoreComponent } from '../../shared/read-more/read-more.component';

@Component({
  selector: 'la-experience-block',
  imports: [ReadMoreComponent],
  templateUrl: './experience-block.component.html',
  styleUrl: './experience-block.component.scss'
})
export class ExperienceBlockComponent {
  @Input() title: string;
  @Input() description: string;

  constructor() { }

}
