import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataDivisiComponent } from './edit-data-divisi.component';

describe('EditDataDivisiComponent', () => {
  let component: EditDataDivisiComponent;
  let fixture: ComponentFixture<EditDataDivisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataDivisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataDivisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
