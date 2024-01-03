import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosbodyComponent } from './proyectosbody.component';

describe('ProyectosbodyComponent', () => {
  let component: ProyectosbodyComponent;
  let fixture: ComponentFixture<ProyectosbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosbodyComponent]
    });
    fixture = TestBed.createComponent(ProyectosbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
