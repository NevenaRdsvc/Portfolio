import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyTravellerComponent } from './lucky-traveller.component';

describe('LuckyTravellerComponent', () => {
  let component: LuckyTravellerComponent;
  let fixture: ComponentFixture<LuckyTravellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuckyTravellerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckyTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
