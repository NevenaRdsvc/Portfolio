import { Component } from '@angular/core';
import { TitleComponent } from '../shared/title/title.component';
import { ColorTextCardComponent } from '../shared/color-text-card/color-text-card.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'la-space-coint',
  imports: [
    TitleComponent,
    ColorTextCardComponent,
    TranslatePipe
  ],
  templateUrl: './space-coint.component.html',
  styleUrl: './space-coint.component.scss'
})
export class SpaceCointComponent {

}
