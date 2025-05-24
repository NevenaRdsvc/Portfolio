import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';



import { ExperienceBlockComponent } from './experience-block/experience-block.component';

@Component({
  selector: 'la-experience',
  imports: [TranslatePipe, ExperienceBlockComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  constructor() { }
}
