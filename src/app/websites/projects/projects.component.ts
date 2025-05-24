import { AfterViewInit, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TagComponent } from '../../shared/components/tag/tag.component';
import { UtilityService } from '../../shared/services/utility.service';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'la-projects',
  imports: [ProjectComponent, TagComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  constructor(private utilityService: UtilityService) { }

  ngAfterViewInit(): void {
    this.registerAnimations();
  }

  private registerAnimations() {
  }
}
