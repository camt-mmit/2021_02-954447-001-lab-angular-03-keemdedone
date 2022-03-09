import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormListComponent } from './simple-form-list.component';

describe('SimpleFormListComponent', () => {
  let component: SimpleFormListComponent;
  let fixture: ComponentFixture<SimpleFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
