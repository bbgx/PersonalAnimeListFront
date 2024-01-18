import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeStaffComponent } from './anime-staff.component';

describe('AnimeStaffComponent', () => {
  let component: AnimeStaffComponent;
  let fixture: ComponentFixture<AnimeStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeStaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimeStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
