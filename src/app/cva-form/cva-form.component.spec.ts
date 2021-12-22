import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvaFormComponent } from './cva-form.component';

describe('CvaFormComponent', () => {
  let component: CvaFormComponent;
  let fixture: ComponentFixture<CvaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
