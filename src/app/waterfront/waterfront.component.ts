import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TitleComponent } from '../shared/title/title.component';
import { ColorTextCardComponent } from '../shared/color-text-card/color-text-card.component';

@Component({
  selector: 'la-waterfront',
  imports: [TranslatePipe,TitleComponent, ColorTextCardComponent],
  templateUrl: './waterfront.component.html',
  styleUrl: './waterfront.component.scss'
})
export class WaterfrontComponent {

}
