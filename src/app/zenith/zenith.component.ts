import { Component } from '@angular/core';
import { ColorTextCardComponent } from '../shared/color-text-card/color-text-card.component';
import { TitleComponent } from '../shared/title/title.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'la-zenith',
  imports: [
    ColorTextCardComponent,
    TitleComponent,
    TranslatePipe
  ],
  templateUrl: './zenith.component.html',
  styleUrl: './zenith.component.scss'
})
export class ZenithComponent {

}
