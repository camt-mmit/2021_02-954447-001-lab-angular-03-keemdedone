import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormListPageComponent } from './simple-form-list-page.component';

describe('SimpleFormListPageComponent', () => {
  let component: SimpleFormListPageComponent;
  let fixture: ComponentFixture<SimpleFormListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFormListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
