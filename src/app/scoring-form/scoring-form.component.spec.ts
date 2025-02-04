import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringFormComponent } from './scoring-form.component';

describe('ScoringFormComponent', () => {
  let component: ScoringFormComponent;
  let fixture: ComponentFixture<ScoringFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoringFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
