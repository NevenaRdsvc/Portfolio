import { Component } from '@angular/core';
import { ColorTextCardComponent } from '../shared/color-text-card/color-text-card.component';
import { TitleComponent } from '../shared/title/title.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'la-media',
  imports: [
    ColorTextCardComponent, 
    TitleComponent,
    TranslatePipe
],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {

}
