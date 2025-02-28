import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeowngryComponent } from './meowngry.component';

describe('MeowngryComponent', () => {
  let component: MeowngryComponent;
  let fixture: ComponentFixture<MeowngryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeowngryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeowngryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
