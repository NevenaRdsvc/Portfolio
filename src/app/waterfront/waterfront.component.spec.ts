import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfrontComponent } from './waterfront.component';

describe('WaterfrontComponent', () => {
  let component: WaterfrontComponent;
  let fixture: ComponentFixture<WaterfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterfrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
