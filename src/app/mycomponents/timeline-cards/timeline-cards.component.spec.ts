import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCardsComponent } from './timeline-cards.component';

describe('TimelineCardsComponent', () => {
  let component: TimelineCardsComponent;
  let fixture: ComponentFixture<TimelineCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
