import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciobodyComponent } from './iniciobody.component';

describe('IniciobodyComponent', () => {
  let component: IniciobodyComponent;
  let fixture: ComponentFixture<IniciobodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciobodyComponent]
    });
    fixture = TestBed.createComponent(IniciobodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
