import { Component, Input } from '@angular/core';

@Component({
  selector: 'la-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  @Input() text: string;
  @Input() isClosing: boolean;
}
