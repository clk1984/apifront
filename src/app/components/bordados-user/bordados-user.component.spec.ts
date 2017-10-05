import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordadosUserComponent } from './bordados-user.component';

describe('BordadosUserComponent', () => {
  let component: BordadosUserComponent;
  let fixture: ComponentFixture<BordadosUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordadosUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordadosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
