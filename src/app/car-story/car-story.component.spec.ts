import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStoryComponent } from './car-story.component';

describe('CarStoryComponent', () => {
  let component: CarStoryComponent;
  let fixture: ComponentFixture<CarStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
