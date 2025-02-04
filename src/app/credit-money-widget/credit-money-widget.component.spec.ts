import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMoneyWidgetComponent } from './credit-money-widget.component';

describe('CreditMoneyWidgetComponent', () => {
  let component: CreditMoneyWidgetComponent;
  let fixture: ComponentFixture<CreditMoneyWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMoneyWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMoneyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
