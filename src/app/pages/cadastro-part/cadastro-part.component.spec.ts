import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPartComponent } from './cadastro-part.component';

describe('CadastroPartComponent', () => {
  let component: CadastroPartComponent;
  let fixture: ComponentFixture<CadastroPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
