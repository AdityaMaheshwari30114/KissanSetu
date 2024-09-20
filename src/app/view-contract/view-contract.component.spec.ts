import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContractComponent } from './view-contract.component';

describe('ViewContractComponent', () => {
  let component: ViewContractComponent;
  let fixture: ComponentFixture<ViewContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
