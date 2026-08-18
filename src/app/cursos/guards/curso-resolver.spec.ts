import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { Curso } from '../model/curso';
import { CursoResolver } from './curso-resolver';

describe('cursoResolver', () => {
  let resolver: CursoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CursoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
