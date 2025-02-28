import { Component } from '@angular/core';
import { WaterfrontComponent } from '../waterfront/waterfront.component';
import { MeowngryComponent } from '../meowngry/meowngry.component';
import { SpaceCointComponent } from '../space-coint/space-coint.component';

@Component({
  selector: 'la-illustrations',
  imports: [WaterfrontComponent,MeowngryComponent,SpaceCointComponent],
  templateUrl: './illustrations.component.html',
  styleUrl: './illustrations.component.scss'
})
export class IllustrationsComponent {

}
