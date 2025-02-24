import { Component } from '@angular/core';
import { ColorTextCardComponent } from '../shared/color-text-card/color-text-card.component';
import { TitleComponent } from '../shared/title/title.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'la-lucky-traveller',
  imports: [
    ColorTextCardComponent, 
    TitleComponent,
    TranslatePipe
 ],
  templateUrl: './lucky-traveller.component.html',
  styleUrl: './lucky-traveller.component.scss'
})
export class LuckyTravellerComponent {

}
