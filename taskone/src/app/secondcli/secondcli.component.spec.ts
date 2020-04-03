import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcliComponent } from './secondcli.component';

describe('SecondcliComponent', () => {
  let component: SecondcliComponent;
  let fixture: ComponentFixture<SecondcliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondcliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
