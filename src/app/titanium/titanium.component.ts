import { Component } from '@angular/core';
import { ColorTextCardComponent } from '../shared/color-text-card/color-text-card.component';
import { TitleComponent } from '../shared/title/title.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'la-titanium',
  imports: [
    ColorTextCardComponent, 
    TitleComponent,
    TranslatePipe],
  templateUrl: './titanium.component.html',
  styleUrl: './titanium.component.scss'
})
export class TitaniumComponent {

}


