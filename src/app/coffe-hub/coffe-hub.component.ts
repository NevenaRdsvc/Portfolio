import { Component } from '@angular/core';
import { TitleComponent } from '../shared/title/title.component';
import { ColorTextCardComponent } from '../shared/color-text-card/color-text-card.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'la-coffe-hub',
  imports: [
    TitleComponent, 
    ColorTextCardComponent,
    TranslatePipe
 ],
  templateUrl: './coffe-hub.component.html',
  styleUrl: './coffe-hub.component.scss'
})
export class CoffeHubComponent {

}
