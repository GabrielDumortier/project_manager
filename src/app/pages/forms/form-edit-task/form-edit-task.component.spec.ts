import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTaskComponent } from './form-edit-task.component';

describe('FormEditTaskComponent', () => {
  let component: FormEditTaskComponent;
  let fixture: ComponentFixture<FormEditTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
