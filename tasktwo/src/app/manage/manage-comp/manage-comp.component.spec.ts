import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompComponent } from './manage-comp.component';

describe('ManageCompComponent', () => {
  let component: ManageCompComponent;
  let fixture: ComponentFixture<ManageCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
