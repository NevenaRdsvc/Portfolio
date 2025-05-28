import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'la-skill',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(180deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active <=> inactive', animate('500ms ease-in-out'))
    ])
  ]
})
export class SkillComponent implements AfterViewInit {
  @ViewChild('heading', { read: ElementRef }) heading: ElementRef;
  @ViewChild('skillsWrapper', { read: ElementRef }) skillsWrapper: ElementRef;

  isIntersecting: boolean = false;
  currentSkillIndex = 0;

  skills = [
    { name: 'Design', icon: 'assets/images/web-design-icon.png', flip: 'inactive' },
    { name: 'Media Producion', icon: 'assets/images/design-icon.png', flip: 'inactive' },
    { name: 'Development', icon: 'assets/images/coding-icon.png', flip: 'inactive' }
  ];

  constructor(private utilityService: UtilityService) { }

  ngAfterViewInit() {
    this.registerAnimations();
  }



  startAutomaticRotation() {
    let skillIndex = 0;
    const totalSkills = this.skills.length;

    const interval = setInterval(() => {
      this.skills[skillIndex].flip = 'active';
      skillIndex++;

      if (skillIndex >= totalSkills) {
        clearInterval(interval);
      }
    }, 500);
  }

  private registerAnimations() {
    this.utilityService.addFadeInAnimation(this.heading.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.skillsWrapper.nativeElement, 500);
  }
}
