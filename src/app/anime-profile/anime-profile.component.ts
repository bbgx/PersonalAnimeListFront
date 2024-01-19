import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { AnimeOverviewComponent } from './anime-overview/anime-overview.component';
import { AnimeCharactersComponent } from './anime-characters/anime-characters.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { AnimeStaffComponent } from './anime-staff/anime-staff.component';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-anime-profile',
  standalone: true,
  imports: [ CommonModule , AnimeOverviewComponent, AnimeCharactersComponent, AnimeStaffComponent ],
  templateUrl: './anime-profile.component.html',
  styleUrl: './anime-profile.component.scss',
  animations: [
    trigger('fade', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AnimeProfileComponent {
  tabs = [
    { id: 'anime-review', title: 'Reviews', component: ReviewComponent },
    { id: 'anime-overview', title: 'Overview', component: AnimeOverviewComponent },
    { id: 'anime-characters', title: 'Characters', component: AnimeCharactersComponent },
    { id: 'anime-staff', title: 'Staff', component: AnimeStaffComponent },

  ];

  activeTab = this.tabs[0].id;

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
