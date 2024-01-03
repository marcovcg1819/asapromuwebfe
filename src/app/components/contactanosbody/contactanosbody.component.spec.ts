import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosbodyComponent } from './contactanosbody.component';

describe('ContactanosbodyComponent', () => {
  let component: ContactanosbodyComponent;
  let fixture: ComponentFixture<ContactanosbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactanosbodyComponent]
    });
    fixture = TestBed.createComponent(ContactanosbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
