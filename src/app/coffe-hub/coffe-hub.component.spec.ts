import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeHubComponent } from './coffe-hub.component';

describe('CoffeHubComponent', () => {
  let component: CoffeHubComponent;
  let fixture: ComponentFixture<CoffeHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
