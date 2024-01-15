import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeOverviewComponent } from './anime-overview.component';

describe('AnimeOverviewComponent', () => {
  let component: AnimeOverviewComponent;
  let fixture: ComponentFixture<AnimeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
