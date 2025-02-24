import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenithComponent } from './zenith.component';

describe('ZenithComponent', () => {
  let component: ZenithComponent;
  let fixture: ComponentFixture<ZenithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenithComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZenithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
