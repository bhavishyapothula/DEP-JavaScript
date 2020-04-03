import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompComponent } from './create-comp.component';

describe('CreateCompComponent', () => {
  let component: CreateCompComponent;
  let fixture: ComponentFixture<CreateCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
