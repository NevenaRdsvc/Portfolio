import { Component } from '@angular/core';
import { TitleComponent } from '../shared/title/title.component';
import { ColorTextCardComponent } from '../shared/color-text-card/color-text-card.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'la-meowngry',
  imports: [TitleComponent,ColorTextCardComponent,TranslatePipe],
  templateUrl: './meowngry.component.html',
  styleUrl: './meowngry.component.scss'
})
export class MeowngryComponent {

}
