import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimeOverviewComponent } from './anime-overview/anime-overview.component';

@Component({
  selector: 'app-anime-profile',
  standalone: true,
  imports: [ CommonModule, AnimeOverviewComponent ],
  templateUrl: './anime-profile.component.html',
  styleUrl: './anime-profile.component.scss'
})
export class AnimeProfileComponent {
  tabs = [
    { id: 'anime-overview', title: 'Overview', component: AnimeOverviewComponent },
  ];

  activeTab = this.tabs[0].id;

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
