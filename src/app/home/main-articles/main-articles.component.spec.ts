import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArticlesComponent } from './main-articles.component';

describe('MainArticlesComponent', () => {
  let component: MainArticlesComponent;
  let fixture: ComponentFixture<MainArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
