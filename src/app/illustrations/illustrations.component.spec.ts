import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationsComponent } from './illustrations.component';

describe('IllustrationsComponent', () => {
  let component: IllustrationsComponent;
  let fixture: ComponentFixture<IllustrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IllustrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IllustrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
