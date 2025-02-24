import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAppComponent } from './ticket-app.component';

describe('TicketAppComponent', () => {
  let component: TicketAppComponent;
  let fixture: ComponentFixture<TicketAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
