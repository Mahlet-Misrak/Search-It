import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTravelComponent } from './tour-travel.component';

describe('TourTravelComponent', () => {
  let component: TourTravelComponent;
  let fixture: ComponentFixture<TourTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
