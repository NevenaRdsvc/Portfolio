import { Component } from '@angular/core';

@Component({
  selector: 'la-trapdoor-button',
  templateUrl: './trapdoor-button.component.html',
  styleUrls: ['./trapdoor-button.component.scss']
})
export class TrapdoorButtonComponent {
  isHovered = false;

  toggleHover(state: boolean) {
    this.isHovered = state;
  }


}
