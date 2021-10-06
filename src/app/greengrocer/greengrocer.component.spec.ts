import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreengrocerComponent } from './greengrocer.component';

describe('GreengrocerComponent', () => {
  let component: GreengrocerComponent;
  let fixture: ComponentFixture<GreengrocerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreengrocerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreengrocerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
