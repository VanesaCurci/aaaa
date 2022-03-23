import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproyeComponent } from './editproye.component';

describe('EditproyeComponent', () => {
  let component: EditproyeComponent;
  let fixture: ComponentFixture<EditproyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
