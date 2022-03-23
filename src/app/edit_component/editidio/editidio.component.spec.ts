import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditidioComponent } from './editidio.component';

describe('EditidioComponent', () => {
  let component: EditidioComponent;
  let fixture: ComponentFixture<EditidioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditidioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditidioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
