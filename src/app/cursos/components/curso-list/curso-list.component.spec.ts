import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListComponent } from './curso-list.component';

describe('CursoList', () => {
  let component: CursoListComponent;
  let fixture: ComponentFixture<CursoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CursoListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
