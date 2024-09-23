import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFarmerDialogComponent } from './contact-farmer-dialog.component';

describe('ContactFarmerDialogComponent', () => {
  let component: ContactFarmerDialogComponent;
  let fixture: ComponentFixture<ContactFarmerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFarmerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFarmerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
