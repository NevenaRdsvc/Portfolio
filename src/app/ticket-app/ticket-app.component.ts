import { Component } from '@angular/core';
import { TitleComponent } from '../shared/title/title.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'la-ticket-app',
  imports: [TitleComponent,TranslatePipe],
  templateUrl: './ticket-app.component.html',
  styleUrl: './ticket-app.component.scss'
})
export class TicketAppComponent {

}
