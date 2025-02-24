import { Component } from '@angular/core';
import { ColorTextCardComponent } from '../shared/color-text-card/color-text-card.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  selector: 'la-academia',
  imports: [
    ColorTextCardComponent,
    TranslatePipe,
    TitleComponent],
  templateUrl: './academia.component.html',
  styleUrl: './academia.component.scss'
})
export class AcademiaComponent {

}
