import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFarmersProfileComponent } from './view-farmers-profile.component';

describe('ViewFarmersProfileComponent', () => {
  let component: ViewFarmersProfileComponent;
  let fixture: ComponentFixture<ViewFarmersProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFarmersProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFarmersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
