import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationReferentielComponent } from './creation-referentiel.component';

describe('CreationReferentielComponent', () => {
  let component: CreationReferentielComponent;
  let fixture: ComponentFixture<CreationReferentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationReferentielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationReferentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
