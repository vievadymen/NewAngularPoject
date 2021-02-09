import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationGroupeCompetenceComponent } from './creation-groupe-competence.component';

describe('CreationGroupeCompetenceComponent', () => {
  let component: CreationGroupeCompetenceComponent;
  let fixture: ComponentFixture<CreationGroupeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationGroupeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationGroupeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
