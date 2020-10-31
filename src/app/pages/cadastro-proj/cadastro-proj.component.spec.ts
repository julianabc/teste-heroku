import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProjComponent } from './cadastro-proj.component';

describe('CadastroProjComponent', () => {
  let component: CadastroProjComponent;
  let fixture: ComponentFixture<CadastroProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
