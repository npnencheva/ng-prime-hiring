import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredDeveloperCardComponent } from './hired-developer-card.component';

describe('HiredDeveloperCardComponent', () => {
  let component: HiredDeveloperCardComponent;
  let fixture: ComponentFixture<HiredDeveloperCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredDeveloperCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredDeveloperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
