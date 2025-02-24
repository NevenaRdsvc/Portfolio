import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCointComponent } from './space-coint.component';

describe('SpaceCointComponent', () => {
  let component: SpaceCointComponent;
  let fixture: ComponentFixture<SpaceCointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceCointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceCointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
