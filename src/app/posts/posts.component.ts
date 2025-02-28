import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'la-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostsComponent {
  constructor() { }
}
