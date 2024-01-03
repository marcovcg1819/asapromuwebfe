import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionesbodyComponent } from './donacionesbody.component';

describe('DonacionesbodyComponent', () => {
  let component: DonacionesbodyComponent;
  let fixture: ComponentFixture<DonacionesbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonacionesbodyComponent]
    });
    fixture = TestBed.createComponent(DonacionesbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
