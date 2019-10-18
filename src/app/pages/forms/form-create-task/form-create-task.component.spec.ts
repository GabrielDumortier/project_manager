import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateTaskComponent } from './form-create-task.component';

describe('FormCreateTaskComponent', () => {
  let component: FormCreateTaskComponent;
  let fixture: ComponentFixture<FormCreateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreateTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
