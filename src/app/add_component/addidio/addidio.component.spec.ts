import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddidioComponent } from './addidio.component';

describe('AddidioComponent', () => {
  let component: AddidioComponent;
  let fixture: ComponentFixture<AddidioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddidioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddidioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
