import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredDevelopersComponent } from './hired-developers.component';

describe('HiredDevelopersComponent', () => {
  let component: HiredDevelopersComponent;
  let fixture: ComponentFixture<HiredDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
