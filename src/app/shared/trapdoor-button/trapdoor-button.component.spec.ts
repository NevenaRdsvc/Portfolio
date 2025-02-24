import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapdoorButtonComponent } from './trapdoor-button.component';

describe('TrapdoorButtonComponent', () => {
  let component: TrapdoorButtonComponent;
  let fixture: ComponentFixture<TrapdoorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrapdoorButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrapdoorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
