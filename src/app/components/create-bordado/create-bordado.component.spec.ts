import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBordadoComponent } from './create-bordado.component';

describe('CreateBordadoComponent', () => {
  let component: CreateBordadoComponent;
  let fixture: ComponentFixture<CreateBordadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBordadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBordadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
