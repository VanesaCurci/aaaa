import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittecnoComponent } from './edittecno.component';

describe('EdittecnoComponent', () => {
  let component: EdittecnoComponent;
  let fixture: ComponentFixture<EdittecnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittecnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittecnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
