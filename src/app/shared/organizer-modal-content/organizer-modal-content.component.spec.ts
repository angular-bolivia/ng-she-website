import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerModalContentComponent } from './organizer-modal-content.component';

describe('OrganizerModalContentComponent', () => {
  let component: OrganizerModalContentComponent;
  let fixture: ComponentFixture<OrganizerModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizerModalContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
