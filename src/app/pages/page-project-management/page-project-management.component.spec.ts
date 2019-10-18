import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectManagementComponent } from './page-project-management.component';

describe('PageProjectManagementComponent', () => {
  let component: PageProjectManagementComponent;
  let fixture: ComponentFixture<PageProjectManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProjectManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
