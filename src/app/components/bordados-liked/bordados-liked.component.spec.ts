import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordadosLikedComponent } from './bordados-liked.component';

describe('BordadosLikedComponent', () => {
  let component: BordadosLikedComponent;
  let fixture: ComponentFixture<BordadosLikedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordadosLikedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordadosLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
