import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllivescoreComponent } from './alllivescore.component';

describe('AlllivescoreComponent', () => {
  let component: AlllivescoreComponent;
  let fixture: ComponentFixture<AlllivescoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlllivescoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlllivescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
