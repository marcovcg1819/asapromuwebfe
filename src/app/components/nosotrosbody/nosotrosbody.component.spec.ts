import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosbodyComponent } from './nosotrosbody.component';

describe('NosotrosbodyComponent', () => {
  let component: NosotrosbodyComponent;
  let fixture: ComponentFixture<NosotrosbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosotrosbodyComponent]
    });
    fixture = TestBed.createComponent(NosotrosbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
