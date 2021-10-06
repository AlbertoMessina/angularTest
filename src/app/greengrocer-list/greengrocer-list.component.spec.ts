import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreengrocerListComponent } from './greengrocer-list.component';

describe('GreengrocerListComponent', () => {
  let component: GreengrocerListComponent;
  let fixture: ComponentFixture<GreengrocerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreengrocerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreengrocerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
