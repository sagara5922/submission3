import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aerospace } from './aerospace';

describe('Aerospace', () => {
  let component: Aerospace;
  let fixture: ComponentFixture<Aerospace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aerospace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aerospace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
