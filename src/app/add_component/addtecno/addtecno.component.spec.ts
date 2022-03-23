import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtecnoComponent } from './addtecno.component';

describe('AddtecnoComponent', () => {
  let component: AddtecnoComponent;
  let fixture: ComponentFixture<AddtecnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtecnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtecnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
