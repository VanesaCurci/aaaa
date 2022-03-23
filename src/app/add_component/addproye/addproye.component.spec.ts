import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproyeComponent } from './addproye.component';

describe('AddproyeComponent', () => {
  let component: AddproyeComponent;
  let fixture: ComponentFixture<AddproyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
