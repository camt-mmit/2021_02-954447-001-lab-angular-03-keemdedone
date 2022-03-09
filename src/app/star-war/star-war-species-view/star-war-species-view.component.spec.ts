import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarSpeciesViewComponent } from './star-war-species-view.component';

describe('StarWarSpeciesViewComponent', () => {
  let component: StarWarSpeciesViewComponent;
  let fixture: ComponentFixture<StarWarSpeciesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarSpeciesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarSpeciesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
