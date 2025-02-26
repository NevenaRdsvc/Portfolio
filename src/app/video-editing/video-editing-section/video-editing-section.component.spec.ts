import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditingSectionComponent } from './video-editing-section.component';

describe('VideoEditingSectionComponent', () => {
  let component: VideoEditingSectionComponent;
  let fixture: ComponentFixture<VideoEditingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoEditingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoEditingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
