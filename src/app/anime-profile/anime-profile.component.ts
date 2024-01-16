import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { AnimeOverviewComponent } from './anime-overview/anime-overview.component';
import { AnimeCharactersComponent } from './anime-characters/anime-characters.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-anime-profile',
  standalone: true,
  imports: [ CommonModule , AnimeOverviewComponent, AnimeCharactersComponent ],
  templateUrl: './anime-profile.component.html',
  styleUrl: './anime-profile.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AnimeProfileComponent {
  tabs = [
    { id: 'anime-overview', title: 'Overview', component: AnimeOverviewComponent },
    { id: 'anime-characters', title: 'Characters', component: AnimeCharactersComponent },
  ];

  activeTab = this.tabs[0].id;

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
