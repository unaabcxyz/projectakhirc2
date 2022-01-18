import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahDataDivisiComponent } from './tambah-data-divisi.component';

describe('TambahDataDivisiComponent', () => {
  let component: TambahDataDivisiComponent;
  let fixture: ComponentFixture<TambahDataDivisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahDataDivisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahDataDivisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
