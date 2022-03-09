import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarSpeciesListPageComponent } from './star-war-species-list-page.component';

describe('StarWarSpeciesListPageComponent', () => {
  let component: StarWarSpeciesListPageComponent;
  let fixture: ComponentFixture<StarWarSpeciesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarSpeciesListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarSpeciesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
