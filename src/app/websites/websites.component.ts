import { Component } from '@angular/core';

import { AcademiaComponent } from '../academia/academia.component';
import { CoffeHubComponent } from '../coffe-hub/coffe-hub.component';
import { LuckyTravellerComponent } from '../lucky-traveller/lucky-traveller.component';
import { MediaComponent } from '../media/media.component';
import { TicketAppComponent } from '../ticket-app/ticket-app.component';
import { TitaniumComponent } from '../titanium/titanium.component';
import { ZenithComponent } from '../zenith/zenith.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'la-websites',
  imports: [
    ZenithComponent,
    AcademiaComponent,
    TitaniumComponent,
    MediaComponent,
    LuckyTravellerComponent,
    CoffeHubComponent,
    TicketAppComponent,
    ProjectsComponent
  ],
  templateUrl: './websites.component.html',
  styleUrl: './websites.component.scss'
})
export class WebsitesComponent {

}
