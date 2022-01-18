import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusDataDivisiComponent } from './hapus-data-divisi.component';

describe('HapusDataDivisiComponent', () => {
  let component: HapusDataDivisiComponent;
  let fixture: ComponentFixture<HapusDataDivisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HapusDataDivisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusDataDivisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
