import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Congratulation } from './congratulation';

describe('Congratulation', () => {
  let component: Congratulation;
  let fixture: ComponentFixture<Congratulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Congratulation],
    }).compileComponents();

    fixture = TestBed.createComponent(Congratulation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
