import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'la-contact',
  imports: [TranslatePipe, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
