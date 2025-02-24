import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTextCardComponent } from './color-text-card.component';

describe('ColorTextCardComponent', () => {
  let component: ColorTextCardComponent;
  let fixture: ComponentFixture<ColorTextCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorTextCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorTextCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
