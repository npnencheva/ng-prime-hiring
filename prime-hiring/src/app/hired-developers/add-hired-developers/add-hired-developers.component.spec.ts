import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHiredDevelopersComponent } from './add-hired-developers.component';

describe('AddHiredDevelopersComponent', () => {
  let component: AddHiredDevelopersComponent;
  let fixture: ComponentFixture<AddHiredDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHiredDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHiredDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
