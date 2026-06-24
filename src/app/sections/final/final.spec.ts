import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalComponent } from './final';

describe('Final', () => {
  let component: FinalComponent;
  let fixture: ComponentFixture<FinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
